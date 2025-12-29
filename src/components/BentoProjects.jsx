import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

// 🎨 Data Project
const PROJECTS = [
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

// 📦 Project Detail Modal
const ProjectDetail = ({ project, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl 
          dark:bg-neutral-900 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full 
            dark:bg-neutral-800 bg-neutral-100 dark:hover:bg-neutral-700 hover:bg-neutral-200
            transition-colors"
        >
          <X className="w-5 h-5 dark:text-white text-gray-900" />
        </button>

        {/* Navigation Arrows */}
        {hasPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
              dark:bg-neutral-800/80 bg-white/80 backdrop-blur-sm
              dark:hover:bg-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 dark:text-white text-gray-900" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
              dark:bg-neutral-800/80 bg-white/80 backdrop-blur-sm
              dark:hover:bg-neutral-700 hover:bg-neutral-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 dark:text-white text-gray-900" />
          </button>
        )}

        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={project.image.src}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/90 text-white">
              {project.platform}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-2">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Description */}
          <p className="dark:text-gray-300 text-gray-700 leading-relaxed">
            {project.fullDesc || project.desc}
          </p>

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-sm font-semibold dark:text-white text-gray-900 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Fitur Utama
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm dark:text-gray-300 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold dark:text-white text-gray-900 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full 
                    dark:bg-neutral-800 bg-neutral-100 
                    dark:text-neutral-300 text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                bg-blue-500 hover:bg-blue-600 text-white font-medium
                transition-colors"
            >
              {project.platform === "GitHub" ? (
                <Github className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
              Lihat di {project.platform}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🧩 Bento Card Component
const BentoCard = ({ project, index, onDragStart, onDragOver, onDrop, onClick }) => {
  const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-2 row-span-1",
    small: "col-span-1 row-span-1",
  };

  return (
    <motion.div
      layout
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        delay: index * 0.05 
      }}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onClick={() => onClick(project)}
      className={`${sizeClasses[project.size] || "col-span-1 row-span-1"} 
        relative group rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing
        dark:bg-neutral-900 bg-neutral-100 
        hover:ring-2 hover:ring-blue-500/50 
        transition-all duration-300`}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={project.image.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        {/* Year Badge */}
        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium 
          rounded-full bg-white/20 backdrop-blur-sm text-white">
          {project.year}
        </span>

        {/* Link Icon */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 p-2 rounded-full 
              bg-white/20 backdrop-blur-sm text-white
              opacity-0 group-hover:opacity-100 transition-opacity
              hover:bg-white/30"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}

        {/* Title & Tags */}
        <div className="space-y-2">
          <h3 className={`font-bold text-white leading-tight
            ${project.size === "large" ? "text-xl" : "text-base"}`}>
            {project.title}
          </h3>
          
          {(project.size === "large" || project.size === "medium") && (
            <p className="text-xs text-gray-300 line-clamp-2">
              {project.desc}
            </p>
          )}

          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, project.size === "large" ? 4 : 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] rounded-full 
                  bg-white/10 backdrop-blur-sm text-white/80"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > (project.size === "large" ? 4 : 2) && (
              <span className="px-2 py-0.5 text-[10px] rounded-full 
                bg-white/10 backdrop-blur-sm text-white/80">
                +{project.tags.length - (project.size === "large" ? 4 : 2)}
              </span>
            )}
          </div>
        </div>

        {/* Hover Instruction */}
        <div className="absolute inset-0 flex items-center justify-center 
          bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-white text-sm font-medium">Klik untuk detail</span>
        </div>
      </div>
    </motion.div>
  );
};

// 🌐 Main Bento Grid Component
export default function ProjectsBento() {
  const [projects, setProjects] = useState(PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Drag handlers
  const handleDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const handleDrop = useCallback((e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    setProjects((prev) => {
      const newProjects = [...prev];
      const [draggedItem] = newProjects.splice(draggedIndex, 1);
      newProjects.splice(dropIndex, 0, draggedItem);
      return newProjects;
    });
    setDraggedIndex(null);
  }, [draggedIndex]);

  // Modal navigation
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleNextProject = useCallback(() => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < projects.length - 1) {
      setSelectedProject(projects[currentIndex + 1]);
    }
  }, [projects, selectedProject]);

  const handlePrevProject = useCallback(() => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(projects[currentIndex - 1]);
    }
  }, [projects, selectedProject]);

  const currentIndex = selectedProject 
    ? projects.findIndex(p => p.id === selectedProject.id) 
    : -1;

  return (
    <section className="space-y-6 py-6">
      <Reveal>
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold dark:text-white text-gray-900">
            Projects
          </h2>
          <span className="text-xs dark:text-gray-500 text-gray-400">
            Drag untuk pindahkan
          </span>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <Reveal>
        <div className="grid grid-cols-2 auto-rows-[120px] gap-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <BentoCard
                key={project.id}
                project={project}
                index={index}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleProjectClick}
              />
            ))}
          </AnimatePresence>
        </div>
      </Reveal>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={handleCloseDetail}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
            hasNext={currentIndex < projects.length - 1}
            hasPrev={currentIndex > 0}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
