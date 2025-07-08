import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import ScrollButtons from "./components/ScrollButtons";

export default function App() {
  return (
    <div
      className="min-h-screen bg-black text-white font-sans"
      style={{
        backgroundImage: "url('/background.gif')", // pastikan nama file GIF kamu benar
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gelap agar teks tetap terbaca */}
      <div className="bg-black/70 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-4 py-12 space-y-12">
          <Intro />
          <About />
          <GitHubStats />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Links />
        </div>
      </div>

      {/* Tombol scroll up/down */}
      <ScrollButtons />
    </div>
  );
}
