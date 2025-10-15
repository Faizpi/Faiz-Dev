import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function GitHubStats() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // cek kondisi awal
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold text-black dark:text-white">
          GitHub Activity
        </h2>
      </Reveal>

      <div
        className="p-4 rounded-xl shadow-lg max-w-4xl mx-auto space-y-4
                   backdrop-blur-md
                   bg-black/5 dark:bg-white/5
                   border border-gray-400/20 dark:border-white/10"
      >
        <Reveal delay={0.2}>
          <img
            src="https://ghchart.rshah.org/2196f3/Faizpi"
            alt="GitHub Contributions"
            className="w-full rounded-lg"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Reveal delay={0.4}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=Faizpi&show_icons=true&theme=${
                isDark ? "tokyonight" : "default"
              }&hide_border=true&bg_color=00000000&title_color=2196f3&icon_color=2196f3&text_color=${
                isDark ? "ffffff" : "000000"
              }&layout=compact`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </Reveal>

          <Reveal delay={0.6}>
            <img
              src={`https://streak-stats.demolab.com/?user=Faizpi&theme=${
                isDark ? "tokyonight" : "default"
              }&hide_border=true&background=00000000&ring=2196f3&fire=2196f3&currStreakLabel=2196f3`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
