// src/Skills.jsx
import Reveal from "./Reveal";
import LogoLoop from "./LogoLoop";

// Skills data converted to LogoLoop format
const skillLogos = [
  // Programming Languages
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", title: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS", title: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP", title: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "Dart", title: "Dart" },
  // Frameworks & Libraries
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express", title: "Express" },
  { src: "https://cdn.simpleicons.org/laravel/FF2D20", alt: "Laravel", title: "Laravel" },
  { src: "https://cdn.simpleicons.org/tailwindcss/38BDF8", alt: "Tailwind", title: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter", title: "Flutter" },
  // Databases & Tools
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", title: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", title: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", title: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", title: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", title: "Figma" },
];

export default function Skills() {
  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">Skills</h2>
      </Reveal>

      <Reveal>
        <LogoLoop
          logos={skillLogos}
          speed={60}
          direction="left"
          logoHeight={28}
          gap={32}
          hoverSpeed={0}
          fadeOut
          ariaLabel="Technical skills"
        />
      </Reveal>
    </section>
  );
}
