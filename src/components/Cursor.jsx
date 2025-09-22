import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    const updateColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "#fff" : "#000"; 

      dot.style.background = color;
      ring.style.border = `2px solid ${color}`;
    };

    // Titik kecil
    Object.assign(dot.style, {
      position: "fixed",
      width: "6px",
      height: "6px",
      background: "#fff",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });

    // Lingkaran besar
    Object.assign(ring.style, {
      position: "fixed",
      width: "30px",
      height: "30px",
      border: "2px solid #fff",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
      transition: "transform 0.15s ease-out",
    });

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const speed = 0.15;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    const onMouseDown = () => {
      ring.style.transform = "translate(-50%, -50%) scale(0.7)";
    };

    const onMouseUp = () => {
      ring.style.transform = "translate(-50%, -50%) scale(1)";
    };

    // Update warna pertama kali & setiap theme berubah
    updateColors();
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      dot.remove();
      ring.remove();
      observer.disconnect();
    };
  }, []);

  return null;
}
