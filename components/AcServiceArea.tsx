"use client";

import { CheckCircle } from "lucide-react";

export default function AcServiceArea() {
  const services = [
    "RO repair near me",
    "Water purifier repair near me",
    "RO service near me",
    "RO technician near me",
    "RO filter replacement in Pune",
    "RO membrane replacement in Pune",
    "RO leakage repair in Pune",
    "Water purifier service in Pune",
  ];

  return (
    <section className="py-10 px-6 -mt-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2
          className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold
text-transparent bg-clip-text
bg-gradient-to-r from-[#00008B]/80 to-green-600
mb-6 md:mb-8"
        >
          <span
            className="hidden sm:inline-block w-24 h-1
  bg-gradient-to-r from-blue-400 to-green-300 to-transparent mr-6"
          ></span>
          Offering RO & Water Purifier Repair Services in Pune & PCMC
          <span
            className="hidden sm:inline-block w-24 h-1
 bg-gradient-to-r from-blue-400 to-green-300 to-transparent ml-6"
          ></span>
        </h2>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 max-w-4xl mx-auto">
          {services.map((item, index) => (
            <div key={index} className="flex align-center items-center gap-3">
              <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}