import React, { useState, useEffect } from "react";

export default function LiquidGlassCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId;
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
      style={{
        left: mousePosition.x - 18,
        top: mousePosition.y - 18,
        transform: `scale(${isMoving ? 1.15 : 1}) translate3d(0,0,0)`,
        willChange: "transform"
      }}
    >
      {/* Bubble utama kaca tipis */}
      <div
        className="relative w-9 h-9 rounded-full transition-all duration-300 ease-out"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, transparent 80%),
            linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%)
          `,
          backdropFilter: "blur(1.5px)",
          border: "0.5px solid rgba(255, 255, 255, 0.12)",
          boxShadow: `
            0 2px 6px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(255, 255, 255, 0.03)
          `
        }}
      >
        {/* Highlight kecil */}
        <div
          className="absolute top-0.5 left-0.5 w-2 h-2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)",
            filter: "blur(0.5px)"
          }}
        />

        {/* Layer dalam bergerak */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500 ease-out"
          style={{
            background: `
              radial-gradient(ellipse ${isMoving ? "120% 85%" : "100% 100%"} at ${
            isMoving ? "60% 40%" : "50% 50%"
          },
                rgba(255,255,255,0.06) 0%, 
                rgba(0,0,0,0.04) 30%, 
                transparent 60%
              )
            `,
            transform: isMoving
              ? "skew(-1.5deg, 0.8deg)"
              : "skew(0deg, 0deg)"
          }}
        />
      </div>

      {/* Partikel kaca mini */}
      {[1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full transition-all duration-600 ease-out"
          style={{
            width: `${10 - i * 2}px`,
            height: `${10 - i * 2}px`,
            left: `${18 + i * 5}px`,
            top: `${18 + i * 2}px`,
            background: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 60%, transparent 80%),
              linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 100%)
            `,
            backdropFilter: "blur(0.8px)",
            border: "0.5px solid rgba(255, 255, 255, 0.08)",
            opacity: isMoving ? 0.28 : 0.14,
            transform: `scale(${isMoving ? 1 : 0.75}) translate3d(0,0,0)`,
            willChange: "transform",
            transitionDelay: `${i * 80}ms`
          }}
        />
      ))}

      {/* Efek ping */}
      {isMoving && (
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            border: "0.5px solid rgba(255,255,255,0.12)",
            animationDuration: "0.7s",
            animationIterationCount: "1"
          }}
        />
      )}
    </div>
  );
}
