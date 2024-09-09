"use client";
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between items-center border text-left transition-all duration-200 ease-in-out w-full h-full text-lg lg:text-xl font-[700] lg:px-6 px-4 py-3 hover:text-primary lg:py-4 rounded-[2px] ${
          accordionOpen ? "border-gray-300 text-primary" : "border-gray-200"
        }`}
      >
        <span>{title}</span>
        <svg
          className="fill-main shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:px-4 px-2 text-gray-600 leading-[30px] text-[16px] lg:text-[20px] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2 lg:mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
