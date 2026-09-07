"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ---------------- Data ---------------- */

const reviews = [
  {
    name: "Rahul Patil",
    rating: 5,
    text: "Called R Tech Filtration for RO repair me in pune. The technician checked the issue and fixed it quickly. Good service and professional work",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    text: "My water purifier had low water flow and was not working properly. R Tech Filtration diagnosed the issue and provided quick doorstep service",
  },
  {
    name: "Amit Deshmukh",
    rating: 5,
    text: "Very good RO repair service near me in Pune. The technician was on time, explained the issue clearly and completed the repair professionally",
  },
  {
    name: "Pooja joshi",
    rating: 5,
    text: "Booked an RO repair service near me for leakage and filter issues. The service was quick and the technician was helpful. Overall, a good experience",
  },
  {
    name: "Akash Shinde",
    rating: 5,
    text: "My RO stopped working suddenly. R Tech Filtration responded quickly and resolved the problem at my home. Recommended for RO & water purifier repair in pune",
  },
  {
    name: "Neha More",
    rating: 5,
    text: "Good service for water purifier repair in pune. The technician identified the problem and explained the required replacement before doing the work",
  },
];

/* ---------------- Responsive Count ---------------- */

function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

/* ---------------- Component ---------------- */

export default function ReviewsSection() {
  const VISIBLE = useVisibleCount();
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(reviews.length - VISIBLE, 0);

  const handleDragEnd = (_: any, info: any) => {
    const threshold = 80;

    if (info.offset.x < -threshold && index < maxIndex) {
      setIndex(index + 1);
    } else if (info.offset.x > threshold && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-8" id="reviews">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          {/* <p className="mx-auto text-[11px] sm:text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3 px-3 py-1 border border-blue-300 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Reviews
          </p> */}

          <h2
          className="relative flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold
text-transparent bg-clip-text
bg-gradient-to-r from-[#00008B]/80 to-green-600
mb-6 md:mb-8"
        >
          <span
            className="hidden sm:inline-block w-24 h-1
  bg-gradient-to-r from-[#00008B]/80 to-green-600 mr-6"
          ></span>
        Our Customers Reviews

          <span
            className="hidden sm:inline-block w-24 h-1
 bg-gradient-to-r from-blue-400 to-green-300 to-transparent ml-6"
          ></span>
        </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl text-black font-bold leading-tight mb-1">
            Excellent

            </h2>

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-2xl mb-1">
              ★ ★ ★ ★ ★
            </div>

            {/* Review Count */}
            <div className="text-sm text-black">
              Based on <b className="font-extrabold">1600+</b> Reviews
            </div>

            {/* Google Logo */}
            <img
              src="google.webp" // 🔁 replace with your actual path
              alt="Google Reviews"
              className="h-15 object-contain mt-2"
            />
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="lg:col-span-9">
            <div className="overflow-hidden" ref={containerRef}>
              <motion.div
                drag="x"
                dragConstraints={containerRef}
                onDragEnd={handleDragEnd}
                animate={{ x: `-${index * (100 / VISIBLE)}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="flex cursor-grab active:cursor-grabbing"
              >
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / VISIBLE}%` }}
                  >
                    <ReviewCard review={review} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* DOTS */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === i
                      ? "w-6 bg-gradient-to-r from-blue-400 to-green-300"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function ReviewCard({ review }: { review: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
  layout
  className="
    min-h-[190px]
    rounded-xl
    bg-gradient-to-br from-sky-200 via-sky-200 to-blue-400
    border border-blue-100
    shadow-md
    p-5 flex flex-col gap-3
    overflow-hidden
    text-slate-800
  "
  transition={{ duration: 0.3, ease: 'easeInOut' }}
>
      {/* Rating */}
      <div className="flex items-center gap-2 text-sm">
        <div className="flex gap-1 text-yellow-400">
          {Array.from({ length: review.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <img src="verified.png" alt="Verified" className="w-4 h-4" />
      </div>

      {/* Name */}
      <span className="font-semibold text-slate-900">{review.name}</span>

      {/* Review Text */}
      <motion.p
        layout
        className={`text-sm text-slate-600 leading-relaxed ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {review.text}
      </motion.p>

      {/* Read more */}
      {review.text.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto text-xs font-semibold text-blue-600 hover:underline self-start"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </motion.div>
  );
}
