import Reveal from "./Reveal";
import LogoLoop from "./LogoLoop";
import { useLang } from "../context/LanguageContext";
import translations from "../context/translations";


const skillLogos = [

  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML", title: "HTML", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS", title: "CSS", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP", title: "PHP", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "Dart", title: "Dart", width: 128, height: 128 },

  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js", width: 128, height: 128 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express", title: "Express" },
  { src: "https://cdn.simpleicons.org/laravel/FF2D20", alt: "Laravel", title: "Laravel", width: 24, height: 24 },
  { src: "https://cdn.simpleicons.org/tailwindcss/38BDF8", alt: "Tailwind", title: "Tailwind CSS", width: 24, height: 24 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter", title: "Flutter", width: 128, height: 128 },

  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", title: "MySQL", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", title: "MongoDB", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", title: "Git", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", title: "GitHub", width: 128, height: 128 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", title: "Figma", width: 128, height: 128 },
];

export default function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">{t.title}</h2>
      </Reveal>

      <Reveal>
        <LogoLoop
          logos={skillLogos}
          speed={60}
          direction="left"
          logoHeight={30}
          gap={40}
          hoverSpeed={0}
          fadeOut
          scaleOnHover
          className="py-4 sm:py-5"
          ariaLabel="Technical skills"
        />
      </Reveal>
    </section>
  );
}
