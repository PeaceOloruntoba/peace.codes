// src/components/sections/Header.tsx
import React, { useState } from "react";
import { Menu, X, Sun, Moon, Briefcase } from "lucide-react";
import { contactInfo } from "../../data/contact";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["About", "Work", "Testimonials", "Contact"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const Logo = () => (
    <div className="flex items-center gap-2 font-mono font-extrabold text-2xl tracking-tighter text-zinc-950 dark:text-zinc-50">
      {/* Fancy initials logo P.O. + icon */}
      <Briefcase className="size-7 text-sky-500" />
      <div className="flex items-baseline">
        <span className="text-zinc-950 dark:text-zinc-50">P</span>
        <span className="text-zinc-500">.</span>
        <span className="text-zinc-950 dark:text-zinc-50">O</span>
        <span className="text-zinc-500 font-bold ml-0.5">/&gt;</span>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-zinc-600 dark:text-zinc-300 font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-sky-500 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-sky-500/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={`mailto:${contactInfo.email}`}
              className="px-6 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 font-semibold hover:bg-sky-600 dark:hover:bg-sky-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-lg text-zinc-700 dark:text-zinc-300 transition-colors"
            aria-label="Toggle Theme Mobile"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-zinc-950 dark:text-zinc-50"
            aria-label="Open Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Figma References: MobileMenuLight.png, MobileMenuDark.png */}
      {menuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white dark:bg-zinc-950 z-40 p-8 flex flex-col md:hidden animate-fade-in-down border-t dark:border-zinc-800">
          <ul className="flex flex-col gap-6 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                    toggleMenu();
                  }}
                  className="block hover:text-sky-500 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <a
              href={`mailto:${contactInfo.email}`}
              onClick={toggleMenu}
              className="block w-full text-center px-6 py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 font-bold text-lg hover:bg-sky-600 dark:hover:bg-sky-400 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
