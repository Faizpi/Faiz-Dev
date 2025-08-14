import Reveal from "./Reveal";

export default function GitHubStats() {
  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold text-white">GitHub Activity</h2>
      </Reveal>

      {/* Glass Card */}
      <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-4xl mx-auto border border-white/10 space-y-4">

        {/* Contribution Chart */}
        <Reveal delay={0.2}>
          <img
            src="https://ghchart.rshah.org/2196f3/Faizpi"
            alt="GitHub Contributions"
            className="w-full rounded-lg"
          />
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Reveal delay={0.4}>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Faizpi&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=2196f3&icon_color=2196f3&text_color=ffffff&layout=compact"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </Reveal>

          <Reveal delay={0.6}>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Faizpi&theme=tokyonight&hide_border=true&background=00000000&ring=2196f3&fire=2196f3&currStreakLabel=2196f3"
              alt="GitHub Streak"
              className="w-full rounded-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
