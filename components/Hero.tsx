
"use client";

export const BASE_PATH = "/sahara";

import { useState } from "react";
import LeadPopup from "@/components/LeadPopup";
import { Star, CheckCircle, IndianRupee } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="
          relative w-full overflow-hidden
          min-h-[680px]
          sm:min-h-[700px]
          md:min-h-[90vh]
          flex items-start md:items-center
        "
        id="home"
      >
        {/* DESKTOP BACKGROUND */}
        <div
          className="
            hidden md:block
            absolute inset-0
            bg-cover bg-center
          "
          style={{
            backgroundImage: "url(banner/deskbanner.webp)",
          }}
        />

        {/* MOBILE BACKGROUND */}
        <div
          className="
            block md:hidden
            absolute inset-0
            bg-cover bg-center
            min-h-full
          "
          style={{
            backgroundImage: "url(banner/mobbanner.webp)",
          }}
        />

        {/* Optional mobile overlay for better text visibility */}
        <div
          className="
            absolute inset-0 md:hidden
            bg-gradient-to-b
            from-white/20
            via-transparent
            to-white/10
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            w-full
            max-w-7xl
            mx-auto
            px-0
            sm:px-6
            md:px-8
            pt-6
            sm:pt-8
            md:pt-0
          "
        >
          <div
            className="
              w-full
              max-w-2xl
              mx-auto
              md:mx-0
              text-center
              md:text-left
            "
          >
            {/* HEADING */}
            <h1
              className="
                font-extrabold
                text-slate-900
                text-shadow-sm
                break-words
                mt-0

               
                leading-tight

                min-[350px]:text-[20px]
                min-[375px]:text-[26px]
                min-[400px]:text-[31px]

                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                md:leading-tight
              "
            >
              Expert
              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#00008B]/70
                  to-blue-400
                "
              >
                RO Water Purifier Servicing
                <br />
              </span>

              Near You in Pune
            </h1>

            {/* TRUST HIGHLIGHTS */}
            <ul
              className="
                mt-5
                sm:mt-6
                md:mt-7

                space-y-3
                sm:space-y-3.5

                text-[14px]
                min-[375px]:text-[15px]
                sm:text-base

                font-semibold
                text-slate-900

                flex
                flex-col
                items-center
                md:items-start
              "
            >
              <li
                className="
                  flex
                  items-center
                  gap-2.5
                  sm:gap-3
                  justify-center
                  md:justify-start
                  w-full
                "
              >
                <IndianRupee
                  className="
                    w-[18px] h-[18px]
                    sm:w-5 sm:h-5
                    text-blue-600
                    shrink-0
                  "
                />

                <span>Affordable Cost</span>
              </li>

              <li
                className="
                  flex
                  items-center
                  gap-2.5
                  sm:gap-3
                  justify-center
                  md:justify-start
                  w-full
                "
              >
                <Star
                  className="
                    w-[18px] h-[18px]
                    sm:w-5 sm:h-5
                    text-blue-600
                    shrink-0
                  "
                />

                <span>30 Days Warranty</span>
              </li>

              <li
                className="
                  flex
                  items-center
                  gap-2.5
                  sm:gap-3
                  justify-center
                  md:justify-start
                  w-full
                "
              >
                <CheckCircle
                  className="
                    w-[18px] h-[18px]
                    sm:w-5 sm:h-5
                    text-blue-600
                    shrink-0
                  "
                />

                <span>Same Day Doorstep Service</span>
              </li>
            </ul>

            {/* CTA */}
            <div
              className="
                mt-7
                sm:mt-8
                relative
                inline-block
                
                mx-auto

                text-center
              "
            >
              {/* Wave 1 */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-cyan-400/25
                  animate-[ping_2.8s_ease-in-out_infinite]
                "
              />

              {/* Wave 2 */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-blue-500/20
                  animate-[ping_2.8s_ease-in-out_infinite]
                  [animation-delay:0.9s]
                "
              />

              {/* Wave 3 */}
              <span
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-indigo-500/15
                  animate-[ping_2.8s_ease-in-out_infinite]
                  [animation-delay:1.8s]
                "
              />

              {/* CTA BUTTON */}
              <a
                href="tel:+917558652253"
                className="
                        relative
                        z-10
                        flex
                        w-[140px]
                        sm:w-auto
                        sm:mx-auto
                        items-center
                        justify-center
                    
                        min-h-[52px]
                        sm:min-h-[56px]
                    
                        px-6
                        sm:px-8
                    
                        py-3.5
                        sm:py-4
                    
                        rounded-xl
                    
                        font-semibold
                        text-[16px]
                        sm:text-base
                    
                        text-white
                    
                        bg-gradient-to-r
                        from-[#00008B]
                        to-blue-400
                    
                        hover:opacity-90
                        active:scale-[0.98]
                    
                        transition
                        duration-200
                         "                    
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      <LeadPopup
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

