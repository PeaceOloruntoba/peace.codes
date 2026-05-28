// src/App.tsx
import React, { useState, useEffect } from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ScrollToTop from "./components/ui/ScrollToTop";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Testimonial from "./components/sections/Testimonial";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";
// Import remaining sections as needed (e.g., Skills, Experience, Projects)

const App: React.FC = () => {
  // Main theme state: checks local storage first, then system preference.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    }
    return false;
  });

  // Effect to apply/remove 'dark' class to the HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <div className="font-sans antialiased bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
