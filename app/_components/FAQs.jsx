import React from "react";
import Accordion from "./Accordian";

const faqs = [
  {
    title: "Ile kosztuje wizyta?",
    answer:
      "Koszt wizyty wynosi 200 zł.",
  },
  {
    title: "Ile trzeba czekać w kolejce?",
    answer:
      "Czas oczekiwania w kolejce zależy od liczby pacjentów, poniżej gabinetu znajduje się kawiarnia w której można umilić sobie czas oczekiwania, w gabinecie również znajduje się toaleta.",
  },
  {
    title: "Gdzie znajduje się gabinet?",
    answer:
      "Gabinet znajduje się w samym sercu Nowego Targu, na ulicy Szkolnej 2. Idąc od rynku w stronę lodowiska, znajdziesz nas po prawej stronie na pierwszym piętrze.",
  },
  {
    title: "Ile trzeba czekać na wizytę domową?",
    answer:
      "Czas oczekiwania na wizytę domową zależy od dostępności, ale staramy się realizować wizyty jak najszybciej.",
  }
];

const FAQs = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold sm:text-xl text-primary mb-3">
            FAQs
          </h2>
          <h1 className="text-3xl font-bold sm:text-4xl">
          Często zadawane <span className="text-primary">pytania?</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 mt-5 gap-3">
          {faqs.map((faq, index) => (
            <div
              className="w-full h-full flex items-center justify-center max-w-[750px] mx-auto"
              key={index}
            >
              <Accordion title={faq.title} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
