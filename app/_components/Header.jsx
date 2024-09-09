"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user);
  }, [user]);

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center justify-between w-full gap-10">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt=""
            width={180}
            height={70}
            className=""
          />
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            {menu.map((item, index) => (
              <Link href={item.path} key={index}>
                <li className="hover:text-primary hover:scale-105 transition-all ease-in-out cursor-pointer">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <Link href={"#contact"} className="">
            {" "}
            <Button>Kontakt</Button>
          </Link>
        </div>
      </div>
      {/* {user ? (
        <Popover>
          <PopoverTrigger>
            <Image
              src={user?.picture || "/profile.png"}
              alt="Profile Picture"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] object-cover object-center"
            />
          </PopoverTrigger>
          <PopoverContent className="w-44">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer rounded-md hover:bg-slate-100 p-2 px-4">
                Profile
              </li>
              <Link href={'/my-booking'} className="cursor-pointer rounded-md hover:bg-slate-100 p-2 px-4">
                My Booking
              </Link>
              <li className="cursor-pointer rounded-md hover:bg-slate-100 p-2 px-4">
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      ) : (
        <LoginLink>
          <Button>Get Started</Button>
        </LoginLink>
      )} */}
      {/* <Button>Get Started</Button> */}
    </div>
  );
};

export default Header;
