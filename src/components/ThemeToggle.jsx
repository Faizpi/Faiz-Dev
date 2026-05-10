import React, { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [circle, setCircle] = useState(null);
  const timeouts = useRef([]);

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
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/60 dark:bg-white/70 text-white dark:text-black shadow-md hover:scale-110 transition"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

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
