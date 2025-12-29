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
import GlassSurface from "./GlassSurface";

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
      <GlassSurface
        borderRadius={12}
        brightness={45}
        opacity={0.9}
        blur={14}
        backgroundOpacity={0.1}
        className="fixed top-4 right-4 z-50 cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="p-2 dark:text-white text-gray-900">
          {isVisible ? <X size={20} /> : <Menu size={20} />}
        </div>
      </GlassSurface>

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
        <GlassSurface
          borderRadius={9999}
          brightness={50}
          opacity={0.92}
          blur={16}
          displace={2}
          backgroundOpacity={0.05}
          distortionScale={-160}
          redOffset={3}
          greenOffset={12}
          blueOffset={22}
        >
          <div className="flex items-center space-x-2 px-3 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.section)}
                  className={`group relative p-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "dark:bg-white/25 bg-black/20 dark:text-white text-gray-900 shadow-lg"
                      : "dark:text-gray-200 text-gray-700 hover:dark:text-white hover:text-gray-900 hover:dark:bg-white/15 hover:bg-black/10"
                  }`}
                  aria-label={item.label}
                >
                  <Icon size={14} strokeWidth={2} />

                  {/* Tooltip */}
                  <div
                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 
                                dark:bg-black/80 bg-white/95 dark:text-white text-gray-900 text-[10px] rounded-lg opacity-0 
                                transition-opacity duration-200 whitespace-nowrap pointer-events-none backdrop-blur-sm
                                ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </GlassSurface>
      </div>
    </>
  );
};

export default BottomNavbar;
