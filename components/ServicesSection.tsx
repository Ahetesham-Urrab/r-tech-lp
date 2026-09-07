"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PhoneCallIcon } from "lucide-react";

const services = [
  {
    title: "RO Repair Service",
    text: "Fixing low flow, leakage, noise, pump issues & more.",
    image: "Services/RORepairService.webp",
  },
  {
    title: "RO Filter Replacement",
    text: "Replace clogged filters for better flow and purification",
    image: "Services/ROFilter.webp",
  },
  {
    title: "RO Membrane Replacement",
    text: "Membrane replacement for poor purification and low flow",
    image: "Services/ROMembrane.webp",
  },
  {
    title: "RO Pump Repair & Replacement",
    text: "Repair or replacement for RO pump and pressure issues",
    image: "Services/ROPumpRepair.webp",
  },
  {
    title: "RO Leakage Repair",
    text: "Fix leaks from pipes, connectors and RO components",
    image: "Services/ROLeakageRepair.webp",
  },
  {
    title: "RO Service & Cleaning",
    text: "Complete cleaning and servicing for better RO performance",
    image: "Services/clean.webp",
  },
  {
    title: "Water Purifier Repair",
    text: "Repair for no water, low flow, leakage, bad taste & more",
    image: "Services/WaterPurifierRep.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-5 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4">
          {/* Subtitle */}
          {/* <p className="mx-auto text-center text-[11px] sm:text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Services
          </p> */}

          {/* Main Heading with gradient lines */}
          <h2
            className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold
text-transparent bg-clip-text
bg-gradient-to-r from-[#00008B]/80 to-green-600
mb-6 md:mb-8"
          >
            <span
              className="hidden sm:inline-block w-24 h-1
  bg-gradient-to-r from-[#00008B]/80 to-green-600 to-transparent mr-6"
            ></span>
            Professional RO & Water Purifier Repair Services in Pune

            <span
              className="hidden sm:inline-block w-24 h-1
  bg-gradient-to-r from-blue-600 to-transparent ml-6"
            ></span>
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={false}
          spaceBetween={24}
          grabCursor={true}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // ⏱ wait 3 seconds
            disableOnInteraction: false, // keep autoplay after swipe
            pauseOnMouseEnter: true, // pause on hover (nice UX)
          }}
          speed={800} // smooth slide animation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="
        h-full flex flex-col
        bg-white rounded-2xl
        shadow-md hover:shadow-2xl
        transition-all duration-300
        overflow-hidden group
        hover:-translate-y-2
        min-h-[420px] mx-auto
      "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
            w-full h-50 object-cover object-center
            transition-transform duration-500
            group-hover:scale-110
          "
                  />
                  <div
                    className="
            absolute inset-0
            bg-gradient-to-t from-black/40 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow " >
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {service.text}
                  </p>

                  {/* CTA */}
                  <a
                    href="tel:+91 755 865 2253"
                    className="
            mt-0
            inline-flex items-center justify-center
            w-full
            rounded-xl
            bg-gradient-to-r from-[#00008B] to-blue-400
            text-white
            text-sm font-semibold
            py-3
            transition-all duration-300
            hover:bg-sky-600
            hover:shadow-lg
            active:scale-95
          "
                  >
                    <PhoneCallIcon className="h-4 w-4 me-1 " /> Call Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
