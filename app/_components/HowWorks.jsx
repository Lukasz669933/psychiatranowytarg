import { Button } from "@/components/ui/button";
import React from "react";

const HowWorks = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Jak umówić się na wizytę?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              Bez umawiania się
            </h2>

            <p className="text-md group-hover:text-gray-100">
              We wtorki, czwartki i piątki w godzinach od 13:00 do 18:00 możesz
              przyjść bez wcześniejszego umawiania się. Wystarczy pojawić się i
              poczekać w kolejce.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                01
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              Wizyty domowe
            </h2>

            <p className="text-md group-hover:text-gray-100">
              Dla osób, które nie mogą dojechać do gabinetu, oferujemy wizyty
              domowe. Aby skorzystać z tej usługi, prosimy o kontakt
              telefoniczny w celu ustalenia szczegółów i dogodnego terminu.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                02
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 hover:bg-[#0da6ff] hover:scale-105 rounded-md px-8 py-6  group cursor-pointer shadow-how transition ease-in-out">
            <h2 className="text-3xl mt-5 font-bold text-primary group-hover:text-white">
              E-porady dla pacjentów{" "}
            </h2>

            <p className="text-md group-hover:text-gray-100">
              Dla już będących pacjentów oferujemy e-porady. Możesz umówić się
              na konsultację online, telefonicznie, uzyskując wsparcie bez
              konieczności wychodzenia z domu.
            </p>
            <div className="w-[40px] h-[40px] rounded-full bg-[#82bcff] relative z-40 ">
              <p className="absolute bottom-[-3px] right-[-3px] text-xl text-primary font-bold group-hover:text-white">
                03
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
