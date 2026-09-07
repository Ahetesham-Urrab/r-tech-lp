"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: " What is the cost of water purifier servicing in Pune?",
    answer:
      "The cost of water purifier servicing in Pune depends on the purifier type, service required, and any parts that may need replacement. Our technician will inspect the purifier and provide an estimate before starting the service.",
  },
  {
    question: "Do you offer same-day water purifier service in Pune?",
    answer:
      "Yes, we offer same-day water purifier service in Pune, subject to technician availability and location accessibility. Contact us to schedule a service appointment.",
  },
  {
    question: " How long does water purifier servicing normally take?",
    answer:
      "A standard water purifier service generally takes around 30 to 60 minutes, depending on the condition of the purifier and the servicing required.",
  },
  {
    question: " Do you provide water purifier repair along with servicing?",
    answer:
      "Yes, we provide both water purifier servicing and repair. Our technicians can inspect and resolve common issues such as water leakage, low water flow, unusual noise, poor purification, and a non-functioning purifier.",
  },
  {
    question: " Which types of water purifiers do you service?",
    answer:
      "We service various types of domestic water purifiers, including RO, UV, UF, and RO + UV systems from major brands.",
  },
  {
    question: " Do you provide RO spare parts during servicing?",
    answer:
      "Yes, required RO spare parts can be provided based on the purifier model and service requirement. Common parts include filters, membranes, pumps, SMPS, solenoid valves, tubing, and other components.",
  },
   {
    question: " How can I book a water purifier service near me?",
    answer:
      "Booking is easy. Simply contact us with your location and water purifier problem. We’ll help schedule an appointment, and our technician will visit your location to inspect and service the purifier.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-10 relative overflow-hidden" id="faq">

      <div className="relative z-10 max-w-6xl mx-auto px-4">

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
          RO & Water Purifier Service FAQs
          <span
            className="hidden sm:inline-block w-24 h-1
 bg-gradient-to-r from-blue-400 to-green-300 to-transparent ml-6"
          ></span>
        </h2>


        {/* FAQ Items */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300
                  ${
                    open
                      ? "bg-white border-blue-300 shadow-lg"
                      : "bg-[#eef5ff] border-blue-200 shadow-sm"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-slate-900">
                    {faq.question}
                  </span>

                  <span
                    className={`flex items-center justify-center h-8 w-8 rounded-full
                      transition-all duration-300
                      ${
                        open
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-blue-100 text-blue-600"
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
