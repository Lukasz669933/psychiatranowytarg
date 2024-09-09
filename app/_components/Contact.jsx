"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock8, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="" id="contact">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Kontakt</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto mt-8">
          <div className="h-auto text-center flex items-center justify-center flex-col hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6 group cursor-pointer shadow-how transition ease-in-out">
            <Phone className="w-12 h-12 text-primary group-hover:text-[#dcecff]" />
            <h3 className="text-3xl font-semibold mt-3 group-hover:text-white">
              Telefon
            </h3>

            <p className="text-gray-800 text-center text-lg my-3 group-hover:text-gray-100">
              Zapraszam do kontaktu telefonicznego
            </p>

            <a
              href="tel:603971911 
"
              className="text-lg group-hover:text-white font-medium underline"
            >
              {" "}
              603 97 19 11
            </a>
          </div>
          <div className="h-auto text-center flex items-center justify-center flex-col hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6 group cursor-pointer shadow-how transition ease-in-out">
            <Clock8 className="w-12 h-12 text-primary group-hover:text-[#dcecff]" />
            <h3 className="text-3xl font-semibold mt-3 group-hover:text-white">
              Godziny otwarcia
            </h3>

            <p className="text-gray-800 text-center text-lg my-2 group-hover:text-gray-100">
              Biuro znajduje się
            </p>
            <p className="text-gray-800 text-center text-xl my-2 group-hover:text-gray-50">
              Wtorek, Czwartek, Piątek <br />
              około od godziny 13 do 18
            </p>
          </div>
          <div
            // variants={slideInFromBottom(0.5, 60)}
            // initial="hidden"
            // whileInView={"visible"}
            // viewport={onceTrue}
            className="h-auto text-center flex items-center justify-center flex-col hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6 group cursor-pointer shadow-how transition ease-in-out"
          >
            <MapPin className="w-12 h-12 text-primary group-hover:text-[#dcecff]" />
            <h3 className="text-3xl font-semibold mt-3 group-hover:text-white">
              Adres
            </h3>

            <p className="text-gray-800 text-center text-lg my-2 group-hover:text-gray-100">
              Biuro znajduje się
            </p>
            <p className="text-gray-800 text-center text-xl my-2 group-hover:text-gray-50">
              ulica Szkolna 2, <br /> 34-400 Nowy Targ
            </p>
            <div className="flex gap-4 items-center justify-center">
              <a href="https://maps.apple.com/?address=Szkolna%202,%2034-400%20Nowy%20Targ,%20Poland&ll=49.482500,20.029300&q=Szkolna%202&t=h" target="_blank">
                <Image
                  width={100}
                  height={100}
                  src="/amap.png"
                  alt="Apple Maps Icon"
                  className="w-[50px] h-[65px] object-cover"
                />
              </a>
              <a href="https://www.google.com/maps/place/Szkolna+2,+34-400+Nowy+Targ,+Poland/@49.4825963,20.0293376,17z/data=!4m6!3m5!1s0x4715e4ec470ee6c3:0x5edf21ad7eb8dc39!8m2!3d49.4825963!4d20.0293376!16s%2Fg%2F11csnwytd_" target="_blank">
                <Image
                  width={100}
                  height={100}
                  src="/gmap.png"
                  alt="Google Maps Icon"
                  className="w-[50px] h-[50px] object-cover"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 text-center">
          <Button>Get Started</Button>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
