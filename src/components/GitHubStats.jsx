import Reveal from "./Reveal";
export default function GitHubStats() {
  return (
    <section className="space-y-4">
      <Reveal>
      <h2 className="text-sm font-bold text-white">GitHub Activity</h2>
      </Reveal>
      <div className="flex justify-center">
        <Reveal delay={0.2}>
        <img
          src="https://ghchart.rshah.org/2196f3/Faizpi"
          alt="GitHub Contributions"
          className="w-full max-w-sm"
        />
        </Reveal>
      </div>
    </section>
  );
}
