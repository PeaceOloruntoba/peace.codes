// src/components/sections/Testimonial.tsx
import React from "react";
import { Quote } from "lucide-react";
import { testimonialsData } from "../../data/testimonials";

const Testimonial: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 px-6 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Pill */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-200 dark:border-zinc-700">
            Testimonials
          </span>
        </div>

        {/* Section Subheading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Nice things people have said about working with me:
          </p>
        </div>

        {/* 3-Column Testimonials Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 backdrop-blur-sm shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-sky-500/20 group"
            >
              {/* Quote Mark Visual Icon */}
              <div className="text-zinc-200 dark:text-zinc-800 mb-6 group-hover:text-sky-500/20 transition-colors duration-300">
                <Quote size={36} fill="currentColor" className="opacity-50" />
              </div>

              {/* Testimonial Quote Text */}
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal italic mb-8 flex-1">
                &ldquo;{item.testimonialText}&rdquo;
              </p>

              {/* Client Profile Identity Section */}
              <div className="flex flex-col items-center text-center pt-6 border-t border-zinc-100 dark:border-zinc-800/80">

                <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300/40 dark:border-zinc-700 flex items-center justify-center mb-3 overflow-hidden">
                  {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt={item.clientName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Fallback to showing initials if no avatar photo is mapped
                    <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
                      {item.clientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                  {item.clientName}
                </h4>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {item.role} at{" "}
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">
                    {item.company}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
