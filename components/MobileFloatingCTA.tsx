"use client";

import { useEffect, useState } from "react";
import { Calendar, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import LeadPopup from "@/components/LeadPopup";

export default function MobileFloatingCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-[100%] rounded-t-xl  bg-gradient-to-r from-blue-800 to-blue-500 shadow-xl p-3 text-white text-center">
      
      <p className="text-lg font-semibold mb-2">
       Book RO Repair Near You
      </p>

      <div className="flex gap-2 px-1">
        
        {/* WhatsApp */}
        <a
        onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 bg-white text-green-600 rounded-full py-2 w-1/2 font-medium"
        >
          <Calendar size={18} />
          Book Now
        </a>

        {/* Call */}
        <a
          href="tel:+91 755 865 2253"
          className="flex items-center justify-center gap-2 bg-white text-blue-600 rounded-full py-2 w-1/2 font-medium"
        >
          <Phone size={18} />
          Call Now
        </a>

      </div>
        {/* Popup */}
            <LeadPopup open={open} onClose={() => setOpen(false)} />
    </div>
  );
}