import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";


export const PROJECTS = [
  {
    id: 1,
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/ppf.jpg` },
    title: "Faiz-Dev",
    desc: "Personal portfolio website yang menampilkan profil, skill, project, serta informasi kontak secara interaktif dan modern.",
    fullDesc: "Faiz-Dev adalah personal portfolio website yang dibangun dengan React dan Tailwind CSS. Website ini menampilkan profil profesional, skill teknis, project-project yang telah dikerjakan, serta informasi kontak secara interaktif dan modern. Dilengkapi dengan animasi smooth menggunakan Framer Motion dan dark/light mode toggle.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    link: "https://github.com/Faizpi/Faiz-Dev",
    platform: "Website",
    features: ["Dark/Light Mode", "Responsive Design", "Smooth Animations", "Interactive UI"],
    size: "large",
  },
  {
    id: 2,
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/targetku.jpg` },
    title: "TargetKu",
    desc: "Aplikasi mobile untuk mengelola tabungan target secara menyenangkan, efektif dan efisien.",
    fullDesc: "TargetKu adalah aplikasi mobile yang membantu pengguna mengelola target tabungan dengan cara yang menyenangkan dan gamified. Pengguna dapat membuat multiple target, melacak progress, dan mendapatkan achievement ketika mencapai target.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    features: ["Target Management", "Progress Tracking", "Firebase Integration", "Beautiful UI"],
    size: "medium",
  },
  {
    id: 3,
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/kny.jpg` },
    title: "Kimetsu no Yaiba Gallery",
    desc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba.",
    fullDesc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba, dibangun untuk menampilkan gambar dan detail karakter. Fitur meliputi browsing karakter, detail info, dan UI yang terinspirasi dari anime.",
    tags: ["Flutter", "Dart", "Mobile App"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    features: ["Character Gallery", "Detail View", "Anime-inspired UI"],
    size: "small",
  },
  {
    id: 4,
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/livesc.jpg` },
    title: "Sports Live Score",
    desc: "Aplikasi mobile untuk melihat skor pertandingan olahraga secara langsung.",
    fullDesc: "Aplikasi mobile untuk melihat skor pertandingan olahraga secara langsung dengan update real-time dari berbagai cabang olahraga. Mendukung berbagai liga dan kompetisi.",
    tags: ["Flutter", "Dart", "UI/UX"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    features: ["Real-time Updates", "Multiple Sports", "Live Scores"],
    size: "small",
  },
  {
    id: 5,
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/sik1.png` },
    title: "Bunching Label Plant 1",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile.",
    fullDesc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin bisa export data ke excel atau print view. Digunakan untuk manajemen label di Plant 1.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
    platform: "GitHub",
    features: ["Barcode Scanning", "Export Excel", "Print View", "Admin Dashboard"],
    size: "medium",
  },
  {
    id: 6,
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/sik1.png` },
    title: "Bunching Label Plant 2",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile Plant 2.",
    fullDesc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin bisa export data ke excel atau print view. Digunakan untuk manajemen label di Plant 2.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-cable-plant2",
    platform: "GitHub",
    features: ["Barcode Scanning", "Export Excel", "Print View", "Admin Dashboard"],
    size: "small",
  },
  {
    id: 7,
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Pendanaan Daerah",
    desc: "Web platform simulasi dana desa menggunakan konsep blockchain.",
    fullDesc: "Web platform simulasi dana desa menggunakan konsep blockchain dan validasi tahapan. Proyek ini bertujuan untuk meningkatkan transparansi pengelolaan dana desa dengan teknologi modern.",
    tags: ["MERN", "Tailwind", "Smart UI Flow"],
    link: "https://github.com/Faizpi/KTI-pendanaan_daerah",
    platform: "GitHub",
    features: ["Blockchain Concept", "Multi-stage Validation", "Transparency Dashboard"],
    size: "large",
  },
  {
    id: 8,
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Bugarin",
    desc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur workout.",
    fullDesc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur workout dan plan harian. Desain UI/UX yang modern dan user-friendly untuk memotivasi pengguna dalam berolahraga.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN",
    platform: "Figma",
    features: ["Workout Plans", "Daily Schedule", "Progress Tracking", "Modern UI"],
    size: "medium",
  },
  {
    id: 9,
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Nusantara Hop",
    desc: "Game platformer edukatif bertema nusantara dan gunung-gunung Indonesia.",
    fullDesc: "Game platformer edukatif bertema nusantara dan gunung-gunung di Indonesia + Kuis. Pemain akan menjelajahi berbagai level yang terinspirasi dari keindahan alam Indonesia sambil belajar.",
    tags: ["Unity 2D", "C#", "Tilemap"],
    link: "https://github.com/Faizpi/Nusantara-Hop",
    platform: "GitHub",
    features: ["Educational Content", "Platformer Gameplay", "Indonesian Theme", "Quiz Mode"],
    size: "small",
  },
  {
    id: 10,
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Taskflow",
    desc: "Task management sederhana berbasis web dengan sistem kategori.",
    fullDesc: "Task management sederhana berbasis web dengan sistem kategori dan kalender serta notifikasi. Membantu pengguna mengorganisir tugas sehari-hari dengan efisien.",
    tags: ["Laravel", "MySQL"],
    link: "https://github.com/Faizpi/Task-Flow",
    platform: "GitHub",
    features: ["Task Categories", "Calendar View", "Notifications", "Simple UI"],
    size: "small",
  },
  {
    id: 11,
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Mini Games",
    desc: "Web mini-games dashboard dengan login dan logout system.",
    fullDesc: "Web mini-games dashboard dengan login dan logout system. Koleksi game sederhana yang bisa dimainkan langsung di browser dengan sistem akun pengguna.",
    tags: ["PHP", "JavaScript", "MySQL"],
    link: "https://github.com/Faizpi/Login-and-Regist-form-to-Game-Dashboard",
    platform: "GitHub",
    features: ["Multiple Games", "User Authentication", "Score Tracking"],
    size: "small",
  },
  {
    id: 12,
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "PointCademy",
    desc: "Website pembelajaran interaktif berbasis poin dan kuis.",
    fullDesc: "Website pembelajaran interaktif berbasis poin dan kuis untuk siswa SD, SMP, dan SMA. Gamification dalam pembelajaran untuk meningkatkan engagement siswa.",
    tags: ["Html", "Css", "Javascript", "Figma"],
    link: "https://github.com/Faizpi/PointCademy",
    platform: "GitHub",
    features: ["Point System", "Quiz Mode", "Multi-level Education", "Interactive Learning"],
    size: "medium",
  },
  {
    id: 13,
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "K@bel",
    desc: "Aplikasi mobile kantin dengan fitur login seller dan buyer.",
    fullDesc: "Aplikasi mobile kantin dengan fitur login seller dan buyer. Memudahkan transaksi di kantin sekolah atau kampus dengan sistem digital.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir",
    platform: "Figma",
    features: ["Seller Dashboard", "Buyer Interface", "Order Management", "Digital Payment"],
    size: "small",
  },
];

export default function ProjectDetailPage({ projectId, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = PROJECTS.findIndex(p => p.id === projectId);
    if (index !== -1) setCurrentIndex(index);
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = PROJECTS[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < PROJECTS.length - 1;

  const goToPrev = () => {
    if (hasPrev) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (hasNext) setCurrentIndex(currentIndex + 1);
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onBack();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >

      <Reveal>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 
            hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Projects
        </button>
      </Reveal>


      <Reveal delay={0.1}>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={project.image.src}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1.5 text-xs font-medium rounded-full 
              bg-blue-500/90 text-white backdrop-blur-sm">
              {project.platform}
            </span>
          </div>
        </div>
      </Reveal>


      <div className="space-y-6">

        <Reveal delay={0.2}>
          <div>
            <h1 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>
        </Reveal>


        <Reveal delay={0.3}>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold dark:text-white text-gray-900">
              Deskripsi
            </h2>
            <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm">
              {project.fullDesc || project.desc}
            </p>
          </div>
        </Reveal>


        {project.features && (
          <Reveal delay={0.4}>
            <div className="space-y-3">
              <h2 className="text-sm font-semibold dark:text-white text-gray-900 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Fitur Utama
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm dark:text-gray-300 text-gray-700
                      p-3 rounded-xl dark:bg-neutral-900/50 bg-neutral-100/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}


        <Reveal delay={0.5}>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold dark:text-white text-gray-900">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full 
                    dark:bg-neutral-800 bg-neutral-200 
                    dark:text-neutral-300 text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>


        {project.link && (
          <Reveal delay={0.6}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm
                transition-colors w-full justify-center"
            >
              {project.platform === "GitHub" ? (
                <Github className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
              Lihat di {project.platform}
            </a>
          </Reveal>
        )}


        <Reveal delay={0.7}>
          <div className="flex items-center justify-between pt-6 border-t dark:border-neutral-800 border-neutral-200">
            <button
              onClick={goToPrev}
              disabled={!hasPrev}
              className={`flex items-center gap-2 text-sm transition-colors
                ${hasPrev
                  ? "dark:text-gray-300 text-gray-700 hover:text-blue-500"
                  : "dark:text-gray-700 text-gray-300 cursor-not-allowed"}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Sebelumnya
            </button>

            <span className="text-xs dark:text-gray-500 text-gray-400">
              {currentIndex + 1} / {PROJECTS.length}
            </span>

            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`flex items-center gap-2 text-sm transition-colors
                ${hasNext
                  ? "dark:text-gray-300 text-gray-700 hover:text-blue-500"
                  : "dark:text-gray-700 text-gray-300 cursor-not-allowed"}`}
            >
              Selanjutnya
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </motion.div>
  );
}
