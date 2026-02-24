import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function GitHubStats() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {

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

  const theme = isDark ? "dark" : "light";

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
            src={`https://ghchart.rshah.org/${isDark ? "2196f3" : "2563eb"}/Faizpi`}
            alt="GitHub Contributions"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4">
          <Reveal delay={0.4}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=Faizpi&show_icons=true&hide_border=true&bg_color=${isDark ? "00000000" : "ffffff00"}&title_color=2196f3&icon_color=2196f3&text_color=${isDark ? "ffffff" : "1f2937"}&rank_icon=github`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.6}>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=Faizpi&hide_border=true&background=${isDark ? "00000000" : "ffffff00"}&ring=2196f3&fire=2196f3&currStreakLabel=${isDark ? "ffffff" : "1f2937"}&sideLabels=${isDark ? "ffffff" : "1f2937"}&currStreakNum=${isDark ? "ffffff" : "1f2937"}&sideNums=${isDark ? "ffffff" : "1f2937"}&dates=${isDark ? "9ca3af" : "6b7280"}`}
              alt="GitHub Streak"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
