import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-zinc-500 dark:text-zinc-400">
        <p className="tracking-wide">
          &copy; {new Date().getFullYear()} | Peace Oloruntoba. All rights
          reserved.
        </p>

        <p className="flex items-center gap-1">
          Designed &amp; Built with{" "}
          <span className="text-sky-500 font-bold">♥</span> using React
          &amp; TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
