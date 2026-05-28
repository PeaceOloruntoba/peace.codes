// src/components/sections/About.tsx
import React from "react";
import { aboutContent } from "../../data/about";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading matching Figma style */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700">
            Curious about me? Here you have it:
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left image slot, placeholder, matching Figma position */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-[320px] md:w-full max-w-[400px] h-[450px] bg-zinc-100 dark:bg-zinc-800 rounded-3xl border-4 border-white dark:border-zinc-950 shadow-inner overflow-hidden flex items-center justify-center relative">
              <img
                src="/your-about-image.jpg" // <--- PLACE YOUR ACTUAL ABOUT ME IMAGE HERE in /public folder
                alt="Peace Oloruntoba working"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-semibold text-lg text-white">
                Engineering Focused.
              </div>
            </div>
          </div>

          {/* Right Text Content using structured data */}
          <div className="md:col-span-7 flex flex-col gap-6 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed font-normal">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              A brief summary of my tech journey.
            </h2>

            {aboutContent.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="mt-6">
              <p className="font-semibold text-zinc-950 dark:text-zinc-50 mb-2">
                My Main Tools:
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {aboutContent.mainTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 font-medium">
              Ready to discuss how my engineering mindset can thrive on your
              next technical challenge? Let&apos;s connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
