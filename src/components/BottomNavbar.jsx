import React, { useState } from "react";
import {
  Home,
  User,
  BarChart3,
  Briefcase,
  Code,
  Lightbulb,
  Mail,
  Menu,
  X,
} from "lucide-react";

// Glass effect styles
const glassStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
  `,
};

const BottomNavbar = () => {
  const [activeSection, setActiveSection] = useState("Intro");
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: "Intro", icon: Home, label: "Home", section: "Intro" },
    { id: "About", icon: User, label: "About", section: "About" },
    { id: "GitHubStats", icon: BarChart3, label: "Stats", section: "GitHubStats" },
    { id: "Experience", icon: Briefcase, label: "Experience", section: "Experience" },
    { id: "Projects", icon: Code, label: "Projects", section: "Projects" },
    { id: "Skills", icon: Lightbulb, label: "Skills", section: "Skills" },
    { id: "Links", icon: Mail, label: "Contact", section: "Links" },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 20;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Tombol burger */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-2 rounded-xl 
                   border border-white/30 dark:border-white/20
                   hover:scale-105 hover:border-white/50 transition-all
                   dark:text-white text-gray-900"
        style={glassStyle}
        aria-label="Toggle Navbar"
      >
        {isVisible ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navbar */}
      <div
        className="fixed bottom-6 left-1/2 z-40 transition-all duration-[1200ms] ease-in-out"
        style={{
          transform: isVisible
            ? "translate(-50%, 0) scale(1)"
            : "translate(calc(50vw - 2rem), calc(-100vh + 1rem)) scale(0.05)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div 
          className="rounded-full px-3 py-2 border border-white/30 dark:border-white/20"
          style={glassStyle}
        >
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.section)}
                  className={`group relative p-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "dark:bg-white/20 bg-black/20 dark:text-white text-gray-900 shadow-md"
                      : "dark:text-gray-200 text-gray-700 hover:dark:text-white hover:text-gray-900 hover:dark:bg-white/10 hover:bg-black/10"
                  }`}
                  aria-label={item.label}
                >
                  <Icon size={14} strokeWidth={2} />

                  {/* Tooltip */}
                  <div
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-1.5 py-0.5 
                                dark:bg-black/70 bg-white/90 dark:text-white text-gray-900 text-[10px] rounded opacity-0 
                                transition-opacity duration-200 whitespace-nowrap pointer-events-none
                                ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
