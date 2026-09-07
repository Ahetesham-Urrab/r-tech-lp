"use client";

import { useEffect, useRef, useState } from "react";

/* -------------------------------- Types -------------------------------- */

type ColorKey = "orange" | "blue" | "emerald" | "rose";

type Stat = {
  label: string;
  value: number | string;
  suffix?: string;
  icon: string; // image path
  color: ColorKey;
  noCount?: boolean;
};

/* --------------------------- Tailwind-safe colors ------------------------ */

const colorClasses = {
  orange: {
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    glow: "bg-orange-200",
    line: "bg-orange-500",
  },
  blue: {
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    glow: "bg-blue-200",
    line: "bg-blue-500",
  },
  emerald: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    glow: "bg-emerald-200",
    line: "bg-emerald-500",
  },
  rose: {
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    glow: "bg-rose-200",
    line: "bg-rose-500",
  },
} as const;

/* ------------------------------- Data ----------------------------------- */

const stats: Stat[] = [
  {
    label: "Years of Experience",
    value: 10,
    suffix: "+",
    icon: "stats/badge.png",
    color: "rose",
  },
  {
    label: "Certified RO Technicians",
    value: 25,
    suffix: "+",
    icon: "stats/repairman.png",
    color: "blue",
  },
  {
    label: "RO Repairs Completed",
    value: 15,
    suffix: "k+",
    icon: "stats/tools.png",
    color: "emerald",
  },
  {
    label: "Transparency Guarantee",
    value: 100,
    suffix: "%",
    icon: "stats/security.png",
    color: "orange",
  },
];

/* ---------------------------- Count-up hook ------------------------------ */

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1400;

    function animate(time: number) {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [start, target]);

  return count;
}

/* ------------------------------- Component -------------------------------- */

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 pt-12" id="stats">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color];

            const displayValue =
              typeof stat.value === "number" && !stat.noCount
                ? useCountUp(stat.value, visible)
                : stat.value;

            return (
              <div
                key={index}
                className="
                group relative overflow-hidden rounded-2xl
                bg-gradient-to-r from-blue-700 to-blue-400
                p-8 shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                "
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl
                  transition-opacity duration-300 group-hover:opacity-30
                  ${colors.glow}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Image Icon */}
                  <div
                    className={`mx-auto mb-6 flex h-18 w-18 items-center justify-center
                    rounded-full ${colors.iconBg}
                    ring-8 ring-white shadow-md
                    transition-all duration-300
                    group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  {/* Value */}
                  <div className="text-4xl font-extrabold text-slate-900">
                    {displayValue}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <p className="mt-2 text-sm md:text-base font-bold text-slate-900">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom line */}
                <span
                  className={`absolute bottom-0 left-0 h-1 w-0
                  ${colors.line}
                  transition-all duration-300 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}