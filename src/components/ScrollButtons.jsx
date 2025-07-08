import { ArrowUp, ArrowDown } from "lucide-react";

function ScrollButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <button
        onClick={scrollToTop}
        className="bg-white text-black p-2 rounded-full shadow hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp size={14} />
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-white text-black p-2 rounded-full shadow hover:scale-110 transition-transform"
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={14} />
      </button>
    </div>
  );
}

export default ScrollButtons;
