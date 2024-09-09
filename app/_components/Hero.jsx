import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookAppintment from "./BookAppintment";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg flex flex-col items-center justify-center sm:h-80 lg:order-last lg:h-full">
            <Image
              alt=""
              src="/wam.png"
              className="lg:h-[440px] h-[300px] w-[250px] lg:w-[440px]  object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Doktor
              <span className="text-primary"> Michał Gałecki </span> <br />{" "}
              Twoja Droga
              <br /> do Lepszego Jutra
            </h2>

            <p className="my-4 text-gray-600">
              Jako doktor nauk medycznych i specjalista psychiatra, zapraszam
              Cię do mojego gabinetu w centrum Nowego Targu. Tutaj, w
              bezpiecznej i przyjaznej przestrzeni, oferuję kompleksową pomoc w
              walce z zaburzeniami psychicznymi. Moje podejście opiera się na
              najnowszych metodach leczenia, łącząc wiedzę zdobytą w Wojskowej
              Akademii Medycznej w Łodzi z praktycznym doświadczeniem, również
              tym nabytym w wieloletniej służbie wojskowej, którą zakończyłem w
              stopniu Majora.
              <br />
              Skupiam się na indywidualnych potrzebach każdego pacjenta, dążąc
              do zapewnienia najlepszej możliwej opieki. Moja praktyka to
              miejsce, gdzie możesz liczyć na profesjonalne wsparcie i
              zrozumienie.
            </p>

            {/* <Button>Explore More</Button> */}
            {/* <BookAppintment /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
