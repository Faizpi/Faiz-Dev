import { useState } from "react";
import Reveal from "./Reveal";
import { 
  Globe, 
  Smartphone, 
  Gamepad2, 
  Palette,
  ArrowUpRight 
} from "lucide-react";

// 🎨 Data Project dengan kategori
const PROJECTS = {
  "Web Development": [
    {
      id: 1,
      year: "Ongoing",
      logo: `${process.env.PUBLIC_URL}/Faiz.png`,
      title: "Faiz-Dev",
      subtitle: "Personal Portfolio Website",
      desc: "Personal portfolio website yang menampilkan profil, skill, project, serta informasi kontak secara interaktif dan modern.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
      link: "https://github.com/Faizpi/Faiz-Dev",
    },
    {
      id: 5,
      year: "Ongoing",
      logo: `${process.env.PUBLIC_URL}/SIK.png`,
      title: "Bunching Label Plant 1",
      subtitle: "Industrial Web Application",
      desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dengan fitur barcode scanning dan export data.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
    },
    {
      id: 6,
      year: "Ongoing",
      logo: `${process.env.PUBLIC_URL}/SIK.png`,
      title: "Bunching Label Plant 2",
      subtitle: "Industrial Web Application",
      desc: "Aplikasi Web Based untuk memberi label pada kabel automobile Plant 2 dengan fitur laporan dan print view.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      link: "https://github.com/Faizpi/bunching-label-cable-plant2",
    },
    {
      id: 10,
      year: "2024",
      logo: `${process.env.PUBLIC_URL}/cat.png`,
      title: "Taskflow",
      subtitle: "Task Management System",
      desc: "Task management sederhana berbasis web dengan sistem kategori, kalender, dan notifikasi.",
      tags: ["Laravel", "MySQL"],
      link: "https://github.com/Faizpi/Task-Flow",
    },
    {
      id: 11,
      year: "2024",
      logo: `${process.env.PUBLIC_URL}/cat.png`,
      title: "Mini Games",
      subtitle: "Web Gaming Platform",
      desc: "Web mini-games dashboard dengan login dan logout system serta koleksi game browser.",
      tags: ["PHP", "JavaScript", "MySQL"],
      link: "https://github.com/Faizpi/Login-and-Regist-form-to-Game-Dashboard",
    },
  ],
  "Mobile App": [
    {
      id: 7,
      year: "2026",
      logo: `${process.env.PUBLIC_URL}/amara.png`,
      title: "Amara Baby Shop",
      subtitle: "Manajemen Inventaris & POS Toko Perlengkapan Bayi",
      desc: "Aplikasi mobile yang cocok untuk menjadi solusi lengkap untuk mengelola stok, penjualan, dan bisnis multi-warung Anda.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
      link: "https://github.com/Faizpi/babyshop",
    },
    {
      id: 2,
      year: "2025",
      logo: `${process.env.PUBLIC_URL}/targetku.jpg`,
      title: "TargetKu",
      subtitle: "Savings Management App",
      desc: "Aplikasi mobile untuk mengelola tabungan target secara menyenangkan, efektif dan efisien dengan gamification.",
      tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
      link: "https://github.com/Faizpi/",
    },
    {
      id: 3,
      year: "2023",
      logo: `${process.env.PUBLIC_URL}/kny.jpg`,
      title: "Kimetsu no Yaiba Gallery",
      subtitle: "Anime Character Gallery",
      desc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba dengan detail info dan UI yang terinspirasi anime.",
      tags: ["Flutter", "Dart", "Mobile App"],
      link: "https://github.com/Faizpi/",
    },
    {
      id: 4,
      year: "2023",
      logo: `${process.env.PUBLIC_URL}/livesc.jpg`,
      title: "Sports Live Score",
      subtitle: "Real-time Sports App",
      desc: "Aplikasi mobile untuk melihat skor pertandingan olahraga secara langsung dengan update real-time.",
      tags: ["Flutter", "Dart", "UI/UX"],
      link: "https://github.com/Faizpi/",
    },
  ],
  "Game Development": [
    {
      id: 9,
      year: "2025",
      logo: `${process.env.PUBLIC_URL}/cat.png`,
      title: "Nusantara Hop",
      subtitle: "Educational Platformer Game",
      desc: "Game platformer edukatif bertema nusantara dan gunung-gunung Indonesia dengan fitur kuis.",
      tags: ["Unity 2D", "C#", "Tilemap"],
      link: "https://github.com/Faizpi/Nusantara-Hop",
    },
  ],
  "UI/UX Design": [
    {
      id: 8,
      year: "2025",
      logo: `${process.env.PUBLIC_URL}/bugarin.png`,
      title: "Bugarin",
      subtitle: "Fitness App Design",
      desc: "Desain aplikasi mobile pelatihan dan kebugaran dengan fitur workout dan plan harian.",
      tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
      link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN",
    },
    {
      id: 13,
      year: "2023",
      logo: `${process.env.PUBLIC_URL}/k@bel.png`,
      title: "K@bel",
      subtitle: "Canteen App Design",
      desc: "Desain aplikasi mobile kantin dengan fitur login seller dan buyer untuk transaksi digital.",
      tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
      link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir",
    },
  ],
};

const tabs = [
  { name: "Web Development", icon: <Globe size={20} /> },
  { name: "Mobile App", icon: <Smartphone size={20} /> },
  { name: "Game Development", icon: <Gamepad2 size={20} /> },
  { name: "UI/UX Design", icon: <Palette size={20} /> },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("Web Development");

  const currentProjects = PROJECTS[activeTab] || [];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="flex md:flex-col gap-4 md:w-10">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
              activeTab === tab.name
                ? "bg-white/10 dark:text-white text-black"
                : "dark:text-gray-400 text-gray-700 hover:dark:text-white hover:text-black hover:bg-white/5"
            }`}
            title={tab.name}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-[200px]">
        <section className="space-y-8">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold dark:text-white text-black">{activeTab}</h2>
              <span className="text-xs dark:text-gray-500 text-gray-400">
                {currentProjects.length} projects
              </span>
            </div>
          </Reveal>

          {currentProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div 
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center w-28 text-center">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-12 h-12 mb-2 object-cover rounded-full"
                  />
                  <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                    {project.year}
                  </p>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold dark:text-white text-black">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={14} className="dark:text-gray-400 text-gray-600" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs dark:text-gray-400 text-gray-700">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-sm dark:text-gray-400 text-gray-700 text-justify">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-full 
                          dark:bg-white/10 bg-black/10 dark:text-gray-300 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          {currentProjects.length === 0 && (
            <Reveal>
              <p className="dark:text-gray-400 text-gray-700">No projects in this category yet.</p>
            </Reveal>
          )}

          {/* Link ke Drive */}
          <Reveal delay={currentProjects.length * 0.1 + 0.1}>
            <div className="pt-6">
              <p className="text-xs dark:text-gray-500 text-gray-600">
                Ingin melihat lebih banyak project saya? Silakan akses portofolio
                lengkap saya dalam bentuk PDF di sini:{" "}
                <a
                  href="https://bit.ly/Faiz-Pratama-Portofolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Google Drive Portfolio ↗
                </a>
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

export default Projects;
