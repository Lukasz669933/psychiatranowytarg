import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment/moment";
import { Button } from "@/components/ui/button";
import CancelAppointment from "./CancelAppointment";
import GlobalApi from "@/app/_utils/GlobalApi";
import {toast} from 'sonner'

const BookingList = ({ bookingList, expired,updateRecord }) => {
  const onDeleteBooking = (item) => {
    console.log(item);

    GlobalApi.deleteBooking(item.id).then((resp) => {
      console.log(resp);
      if (resp) {
        toast("Booking Deleted!");
        updateRecord()
      }
    }).catch((err)=> console.log(err));
  };
  return (
    <div>
      {bookingList?.map((item, index) => (
        <div key={index}>
          <h2 className="flex w-full">
            <span> Doctor Name</span>
            {!expired && (
              <CancelAppointment
                onContinueClick={() => onDeleteBooking(item)}
              />
            )}
          </h2>
          <h2 className="flex gap-2">
            <MapPin /> Address
          </h2>

          <h2 className="flex gap-2">
            <Calendar /> Appointment on{" "}
            {moment(item.attributes.Date).format("DD-MM-YYYY")}
          </h2>
          <h2 className="flex gap-2">
            <Clock /> At Time: {item.attributes.Time}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
