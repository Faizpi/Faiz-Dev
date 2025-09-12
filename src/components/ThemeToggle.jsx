import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [circle, setCircle] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = (e) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    // Hitung posisi klik
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Ukuran circle = diagonal layar * 2 → selalu nutup full
    const size = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 2;

    setCircle({ x, y, size, newTheme });

    // Ubah tema setelah circle nutup setengah animasi
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }, 500);

    // Hapus circle setelah animasi selesai
    setTimeout(() => setCircle(null), 1000);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-black/60 dark:bg-white/70 text-white dark:text-black shadow-md hover:scale-110 transition"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Circle animasi */}
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

      {/* Keyframes animasi */}
      <style jsx>{`
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
