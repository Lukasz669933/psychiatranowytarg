"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { CalendarDays, Clock } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import GlobalApi from "../_utils/GlobalApi";

const BookAppintment = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    const data = {
      data: {
        Username: user.given_name + " " + user.family_name,
        Email: user.email,
        Time: selectedTimeSlot,
        Date: date,
      },
    };

    GlobalApi.bookAppointment(data)
      .then((resp) => {
        console.log(resp);
        if (resp) {
          toast("Your booking is done! Yep");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isPastDay = (day) => {
    return day <= new Date();
  };
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {/* Calender */}
                <div className="flex flex-col items-baseline gap-3 ">
                  <h2 className="flex gap-2 items-center">
                    <CalendarDays className="text-primary h-5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    disabled={isPastDay}
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                {/* Timeslot */}
                <div className="flex flex-col gap-3">
                  <h2 className="flex gap-2 items-center">
                    <Clock className="text-primary h-5 w-5" />
                    Select Date
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
                    {timeSlot?.map((item, index) => (
                      <h2
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`p-2 border rounded-full text-center hover:bg-primary hover:text-white cursor-pointer ${
                          item.time === selectedTimeSlot &&
                          "bg-primary text-white"
                        }`}
                        key={index}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <div className="flex items-center justify-between gap-5">
              <Button
                type="button"
                className="text-red-500 border-red-500"
                variant="outline"
              >
                Close
              </Button>
              <Button
                type="button"
                onClick={() => saveBooking()}
                disabled={!(date && selectedTimeSlot)}
              >
                Submit
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppintment;
