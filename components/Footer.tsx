"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#00008B] to-blue-400 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6 ">
          <img
            src="logos/logortech.webp"
            alt="Air Cool"
            className="h-22 w-auto object-contain bg-white/90 rounded-xl p-4"
          />
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm md:text-base">
          <p>
            Customer Care no :-{" "}
            <span className="font-medium"> +91 755 865 2253</span>
          </p>

          <p>
            E-mail Id :-{" "}
            <span className="font-medium">
              info@rtechfiltration.com
            </span>
          </p>

          <p>
             C-2/25 Brahma Estate kondhwa - 411048 Pune Maharashtra India
             DISCLAIMER:
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-8"></div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-sm leading-relaxed text-white/90">
          <p className="font-semibold mb-2">DISCLAIMER:</p>
          <p>
           R Tech Filtration provides RO and water purifier repair, servicing, installation and maintenance services. Brand names and logos used on this website are for identification of compatible products/services and do not imply ownership, authorization, affiliation or endorsement by the respective manufacturers.

          </p>
        </div>

        {/* Links */}
        {/* <div className="mt-4 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div> */}

        {/* Copyright */}
        <div className="mt-6 text-sm text-white/90">
          © {year} R Tech Filtration | All Rights Reserved.{" "}
          
        </div>

      </div>
    </footer>
  );
}