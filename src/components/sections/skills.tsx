// src/components/sections/Skills.tsx
import React from "react";
import { skillsData } from "../../data/skills";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-24 px-6 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Pill Title - Matching Figma layout */}
        <div className="flex flex-col items-center text-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-300/40 dark:border-zinc-700">
            Skills
          </span>
        </div>

        {/* Section Subheading matching screenshots */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        {/* Grid Container - Fully responsive columns */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 justify-items-center">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 w-24 text-center cursor-pointer"
            >
              {/* Icon Frame Box */}
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-transparent transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_4px_12px_rgba(16,185,129,0.15)]">
                <img
                  src={skill.iconUrl}
                  alt={`${skill.name} icon`}
                  className="w-10 h-10 object-contain transition-all duration-300 filter group-hover:grayscale-0 dark:brightness-100 dark:contrast-100"
                  // Explicit design safety handling: Certain standard black icon assets need inversion to white dynamically in dark mode
                  onError={(e) => {
                    // Fail-safe handling for localized image loading anomalies
                    e.currentTarget.style.display = "none";
                  }}
                  style={{
                    // Ensures high-visibility compatibility for dark themes
                    filter: "var(--tw-icon-filter)",
                  }}
                />
              </div>

              {/* Skill Text Label */}
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
