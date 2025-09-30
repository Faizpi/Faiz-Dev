// src/Skills.jsx
import { useState } from "react";
import Reveal from "./Reveal";

// Asumsi Anda punya komponen Reveal.js atau framer-motion.
// Jika tidak, Anda bisa hapus tag <Reveal> dan </Reveal>.


const categories = [
  // ... (data skills Anda tetap sama)
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    ],
  },
];

// Komponen kecil untuk satu item skill, agar tidak duplikasi kode
const SkillItem = ({ skill }) => (
  <div className="group relative inline-flex w-20 flex-shrink-0 flex-col items-center">
    {/* Icon */}
    <img
      src={skill.icon}
      alt={skill.name}
      className="h-16 w-16 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
    />
    {/* Nama skill di bawah icon */}
    <span className="mt-1 text-xs text-gray-500 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
      {skill.name}
    </span>
    {/* Tooltip yang muncul di atas saat hover */}
    <div className="absolute bottom-16 z-10 hidden whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:flex">
      {skill.name}
    </div>
  </div>
);


export default function Skills() {
  const allSkills = categories.flatMap((cat) => cat.skills);
  const halfwayPoint = Math.ceil(allSkills.length / 2);
  const skillsFirstRow = allSkills.slice(0, halfwayPoint);
  const skillsSecondRow = allSkills.slice(halfwayPoint);

  return (
    <section className="space-y-6">
      {/* Judul dikembalikan seperti semula */}
      <Reveal>
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">Skills</h2>
      </Reveal>

      {/* Animasi skill dibungkus Reveal */}
      <Reveal>
        <div
          className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex flex-col gap-6">
            {/* Baris Pertama */}
            <div className="flex w-max animate-scroll-left gap-6 hover:[animation-play-state:paused]">
              {[...skillsFirstRow, ...skillsFirstRow].map((skill, idx) => (
                <SkillItem key={`first-${idx}`} skill={skill} />
              ))}
            </div>

            {/* Baris Kedua */}
            <div className="flex w-max animate-scroll-right gap-6 hover:[animation-play-state:paused]">
              {[...skillsSecondRow, ...skillsSecondRow].map((skill, idx) => (
                <SkillItem key={`second-${idx}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}