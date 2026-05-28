// src/components/sections/Hero.tsx
import React from "react";
import { MapPin, Target} from "lucide-react";
import { aboutContent } from "../../data/about";
import { contactInfo } from "../../data/contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden"
    >
      {/* Subtle grid background, like image */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)] bg-[size:32px_32px] bg-[image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Content - Figma alignment */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-zinc-950 dark:text-zinc-50 leading-tight">
            Hi, I&apos;m Peace Oloruntoba{" "}
            <span className="text-sky-500 ml-1">👋</span>
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
            A Senior Software Engineer specializing in building functional,
            performant digital experiences. With primary tools in TypeScript,
            PHP, and Go, I create robust applications across frontend, backend,
            mobile, and emergent tech. Thriving in Lagos, Nigeria, I&apos;m open
            to remote roles globally.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="size-5 text-sky-500" />
              <span>{aboutContent.locationStatus}</span>
            </div>
            {/* Status notice card, matching images */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Social Links matching images */}
          <div className="flex items-center gap-4 pt-6 text-zinc-500 dark:text-zinc-400">
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>

        {/* Right Image/Card Area - Figma layout */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative">
            {/* The stacked visual element shown in screenshots */}
            <div className="absolute -inset-4 bg-zinc-200 dark:bg-zinc-800/60 rounded-3xl [transform:rotate(5deg)] scale-105 z-0"></div>
            <div className="absolute -inset-2 bg-zinc-300 dark:bg-zinc-700/80 rounded-2xl [transform:rotate(-3deg)] scale-105 z-0"></div>

            {/* The "Notice" card overlay as requested, using Target icon */}
            <div className="absolute top-1/3 -right-6 md:-right-10 z-20 px-5 py-3 rounded-xl bg-white/95 dark:bg-zinc-900/95 shadow-xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
              <div className="p-2 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                <Target size={20} strokeWidth={2.5} />
              </div>
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                Problem Solver
              </p>
            </div>

            {/* The main Image Card - Replace source with your actual image */}
            <div className="w-[300px] h-[360px] md:w-[320px] md:h-[380px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 relative z-10 overflow-hidden">
              <img
                src="/your-hero-image.png" // <--- PLACE YOUR ACTUAL PORTRAIT IMAGE HERE in /public folder
                alt="Peace Oloruntoba"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
