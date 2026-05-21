import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [circle, setCircle] = useState(null);
  const timeouts = useRef([]);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    return () => {
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const toggleTheme = (e) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const size = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 2;

    setCircle({ x, y, size, newTheme });

    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    const applyThemeTimeout = setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }, 500);

    const clearCircleTimeout = setTimeout(() => setCircle(null), 1000);
    timeouts.current = [applyThemeTimeout, clearCircleTimeout];
  };

  return (
    <>
      {/* Button group: Theme + Language — glass pill container */}
      <div
        className="fixed top-4 left-4 z-50 flex items-center gap-1 p-1 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center justify-center w-8 h-8 rounded-full
                     dark:text-white/90 text-black/80
                     hover:dark:bg-white/15 hover:bg-black/10
                     transition-all duration-300 hover:scale-110"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span className="transition-all duration-300">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </span>
        </button>

        {/* Divider */}
        <span className="w-px h-4 dark:bg-white/20 bg-black/15 rounded-full" />

        {/* Language toggle */}
        <button
          onClick={toggleLang}
          className="relative flex items-center gap-1 px-2.5 h-8 rounded-full
                     dark:text-white/90 text-black/80
                     hover:dark:bg-white/15 hover:bg-black/10
                     transition-all duration-300 hover:scale-105
                     select-none group"
          aria-label={`Switch to ${lang === "en" ? "Indonesian" : "English"}`}
          title={lang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
        >
          {/* Globe icon */}
          <Globe size={13} className="opacity-75 transition-transform duration-300 group-hover:rotate-12" />
          {/* Label — shows language to SWITCH TO */}
          <span className="text-[10px] font-bold tracking-widest uppercase">
            {lang === "en" ? "ID" : "EN"}
          </span>
        </button>
      </div>

      {circle && (
        <span
          className="pointer-events-none fixed rounded-full z-40"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            transform: "translate(-50%, -50%) scale(0)",
            backgroundColor: circle.newTheme === "dark" ? "black" : "white",
            animation: "circle-expand 1s ease-out forwards",
            borderRadius: "50%",
          }}
        />
      )}

      <style>{`
        @keyframes circle-expand {
          to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
