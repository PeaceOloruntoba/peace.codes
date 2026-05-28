import React from "react";
import { ExternalLink } from "lucide-react";
import { projectsData } from "../../data/projects";
// import { FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  return (
    <section
      id="work"
      className="py-20 md:py-28 px-6 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-300/40 dark:border-zinc-700">
            Work
          </span>
        </div>

        <div className="text-center mb-20">
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            Some of the noteworthy projects I have built and deployed:
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-stretch rounded-2xl border border-zinc-100 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                {/* Left Side: Dynamic Showcase Mockup Area */}
                <div className="md:w-1/2 min-h-[280px] sm:min-h-[340px] bg-zinc-100 dark:bg-zinc-800/50 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800 flex items-center justify-center p-8 relative group overflow-hidden">
                  {/* Subtle dark layout pattern layer matching screenshots */}
                  <div className="absolute inset-0 opacity-5 bg-[size:16px_16px] bg-[image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>

                  {/* Visual Placeholder Graphic - Add specific UI mockups to /public/projects/ as you like */}
                  <div className="w-full h-full max-w-[440px] max-h-[240px] rounded-xl bg-zinc-200 dark:bg-zinc-800 shadow-xl border border-zinc-300/30 dark:border-zinc-700 flex items-center justify-center font-mono font-black text-4xl text-zinc-400 dark:text-zinc-600 tracking-wider group-hover:scale-[1.02] transition-transform duration-300 select-none">
                    {project.imageFallback}
                  </div>
                </div>

                {/* Right Side: Structured Specifications & Project Links */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Badge Arrays */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Redirection Links */}
                  <div className="flex items-center gap-5 mt-auto pt-2 text-zinc-500 dark:text-zinc-400">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Preview</span>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                      >
                        <img
                          src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                          alt="GitHub"
                          className="w-4 h-4 dark:invert opacity-70 group-hover:opacity-100"
                        />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
