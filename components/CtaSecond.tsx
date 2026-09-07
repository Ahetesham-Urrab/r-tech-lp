import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CtaSecond() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-top bg-no-repeat h-[60vh]  bg-gradient-to-r from-[#000080]/80 to-blue-600"
      id="cta"
    >
      {/* PNG Overlay */}
      <div
        className="absolute inset-0 bg-top bg-no-repeat bg-cover opacity-20"
        style={{
          backgroundImage: "url('banner/cta-back.webp')",
        }}
      />
      {/* TOP WHITE WAVE */}
      <svg
        className="absolute top-0 left-0 w-full h-24 sm:h-28"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          className="wave-path"
          d="M0,60 C240,90 480,30 720,30 960,30 1200,90 1440,60 L1440,0 L0,0 Z"
          fill="#E8F7FF"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
          M0,60 C240,90 480,30 720,30 960,30 1200,90 1440,60 L1440,0 L0,0 Z;
          M0,50 C240,70 480,50 720,40 960,30 1200,70 1440,50 L1440,0 L0,0 Z;
          M0,60 C240,90 480,30 720,30 960,30 1200,90 1440,60 L1440,0 L0,0 Z
        "
          />
        </path>
      </svg>

      {/* CONTENT */}
      <div className="relative pt-28 pb-20">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 mt-10  drop-shadow-lg">
            Book RO Repair & Servicing Near You in Pune
          </h2>

          {/* Sub text */}
          <p className="text-white/85 max-w-2xl mx-auto mb-10">
           Fast response. Professional technicians. Reliable doorstep service
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             {/* WhatsApp */}
             <a
          href="https://wa.me/755 865 2253"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2
            px-7 py-3 rounded-xl bg-white
            text-green-500 font-semibold shadow-lg hover:shadow-2xl
            hover:-translate-y-0.5 transition-all"
        >
          <FaWhatsapp className="text-lg text-green-500" />
          Book Now
        </a>


            {/* Call */}
            <a
              href="tel:+91 755 865 2253"
              className="inline-flex items-center justify-center gap-2
            px-7 py-3 rounded-xl bg-white text-blue-500 font-semibold
            shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>

           
          </div>
        </div>
      </div>
    </section>
  );
}
