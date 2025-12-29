import { ArrowUp, ArrowDown } from "lucide-react";

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

function ScrollButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-full border border-white/30 dark:border-white/20 hover:scale-105 hover:border-white/50 transition-all duration-300 dark:text-white text-gray-900"
        style={glassStyle}
        aria-label="Scroll to top"
      >
        <ArrowUp size={14} />
      </button>
      <button
        onClick={scrollToBottom}
        className="p-2.5 rounded-full border border-white/30 dark:border-white/20 hover:scale-105 hover:border-white/50 transition-all duration-300 dark:text-white text-gray-900"
        style={glassStyle}
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={14} />
      </button>
    </div>
  );
}

export default ScrollButtons;
