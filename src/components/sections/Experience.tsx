// src/components/sections/Experience.tsx
import React from "react";
import { experienceData } from "../../data/experience";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-6 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header Pill */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-200 dark:border-zinc-700">
            Experience
          </span>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A quick summary of my most recent professional milestones:
          </p>
        </div>

        {/* Timeline Stack Container */}
        <div className="flex flex-col gap-10">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-sky-500/30 flex flex-col md:flex-row justify-between gap-6"
            >
              {/* Left Column: Company Branding & Identification */}
              <div className="flex items-start gap-4 md:w-1/4">
                <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden flex-shrink-0 border dark:border-zinc-700">
                  <img
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback typography visual if image asset is temporarily missing
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span className="text-xs font-extrabold text-zinc-400 select-none absolute">
                    {exp.company.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 leading-tight">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    {exp.locationStatus}
                  </p>
                </div>
              </div>

              {/* Middle Column: Core Content & Technical Metrics */}
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-xl font-extrabold text-zinc-950 dark:text-zinc-50">
                  {exp.role}
                </h3>
                <ul className="list-none flex flex-col gap-2">
                  {exp.achievements.map((bullet, index) => (
                    <li
                      key={index}
                      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start"
                    >
                      <span className="text-sky-500 mr-2 font-bold select-none">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Time Frame Label */}
              <div className="text-right flex-shrink-0 md:w-1/5">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap bg-zinc-100 dark:bg-zinc-800/60 px-3 py-1 rounded-full md:bg-transparent md:p-0">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
