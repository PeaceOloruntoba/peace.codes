// src/components/ui/ScrollToTop.tsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down beyond hero section
  useEffect(() => {
    const toggleVisibility = () => {
      // Assuming Hero is roughly 600px tall
      if (window.pageYOffset > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-sky-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
