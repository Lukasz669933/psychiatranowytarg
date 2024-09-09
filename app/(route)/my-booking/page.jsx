/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./_components/BookingList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const page = () => {
  const { user } = useKindeBrowserClient();
  const [bookingList, setBookingList] = useState();
  const getUserBookingList = () => {
    GlobalApi.getBookingList(user.email).then((resp) => {
      console.log(resp.data.data);
      setBookingList(resp.data.data);
    });
  };

  useEffect(() => {
    user && getUserBookingList();
  }, [user]);

  const filterUserBooking = (type) => {
    const result = bookingList?.filter((item) =>
      type == "upcoming"
        ? new Date(item.attributes.Date) >= new Date()
        : new Date(item.attributes.Date) < new Date()
    );

    console.log(result);
    return result;
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <h2 className="text-3xl font-bold sm:text-4xl">My Bookings</h2>
        <div>
          <Tabs defaultValue="upcoming" className="w-full mt-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <BookingList bookingList={filterUserBooking("upcoming")} expired={false} updateRecord={()=> getUserBookingList()}/>
            </TabsContent>
            <TabsContent value="expired">
              <BookingList bookingList={filterUserBooking("expired")} expired={true}  updateRecord={()=> getUserBookingList()}/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default page;
