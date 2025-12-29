import { ArrowUp, ArrowDown } from "lucide-react";
import GlassSurface from "./GlassSurface";

function ScrollButtons() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <GlassSurface
        borderRadius={9999}
        brightness={48}
        opacity={0.9}
        blur={14}
        backgroundOpacity={0.08}
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={scrollToTop}
      >
        <div className="p-2.5 dark:text-white text-gray-900">
          <ArrowUp size={14} />
        </div>
      </GlassSurface>
      <GlassSurface
        borderRadius={9999}
        brightness={48}
        opacity={0.9}
        blur={14}
        backgroundOpacity={0.08}
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={scrollToBottom}
      >
        <div className="p-2.5 dark:text-white text-gray-900">
          <ArrowDown size={14} />
        </div>
      </GlassSurface>
    </div>
  );
}

export default ScrollButtons;
