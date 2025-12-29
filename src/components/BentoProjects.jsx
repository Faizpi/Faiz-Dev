import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

// 🧩 Masonry Card Component (Pinterest Style)
const MasonryCard = ({ project, index, onDragStart, onDragOver, onDrop, onClick, isDragging }) => {
  // Variasi tinggi berdasarkan konten untuk efek masonry
  const getAspectRatio = () => {
    switch (project.size) {
      case "large": return "aspect-[3/4]";
      case "medium": return "aspect-[4/3]";
      default: return "aspect-square";
    }
  };

  return (
    <motion.div
      layout
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isDragging ? 0.4 : 1, 
        y: 0,
        scale: isDragging ? 0.95 : 1,
        rotate: isDragging ? 2 : 0
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        delay: index * 0.03 
      }}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
      onClick={() => onClick(project)}
      className="break-inside-avoid mb-3 group cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: 'none' }}
    >
      <div className={`relative rounded-2xl overflow-hidden 
        dark:bg-neutral-900 bg-neutral-100
        hover:ring-2 hover:ring-blue-500/50 
        transition-all duration-300 transform hover:scale-[1.02]
        ${isDragging ? 'ring-2 ring-blue-400 shadow-2xl' : ''}`}
      >
        {/* Image Container */}
        <div className={`relative ${getAspectRatio()} overflow-hidden`}>
          <img
            src={project.image.src}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-110 pointer-events-none"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Year Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium 
            rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 pointer-events-none">
            {project.year}
          </span>

          {/* Drag Indicator - Visible on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
              </div>
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
                <div className="w-1 h-1 rounded-full bg-white/60"></div>
              </div>
            </div>
          </div>

          {/* Link Icon */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-3 right-3 p-2 rounded-full 
                bg-black/40 backdrop-blur-md text-white border border-white/10
                opacity-0 group-hover:opacity-100 transition-all duration-300
                hover:bg-white/20 hover:scale-110"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
            <h3 className="font-bold text-white text-base leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-gray-300 line-clamp-2 mb-2">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] rounded-full 
                    bg-white/15 backdrop-blur-sm text-white/90"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-0.5 text-[10px] rounded-full 
                  bg-white/15 backdrop-blur-sm text-white/90">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 🌐 Main Bento Grid Component
export default function ProjectsBento({ onProjectClick }) {
  const [projects, setProjects] = useState(PROJECTS);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Drag handlers
  const handleDragStart = useCallback((e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
    // Set custom drag image (optional - makes it look better)
    const dragImage = e.currentTarget.cloneNode(true);
    dragImage.style.opacity = "0.5";
    e.dataTransfer.setDragImage(dragImage, 0, 0);
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

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
  }, []);

  // Handle project click - navigate to detail page
  const handleProjectClick = useCallback((project) => {
    if (onProjectClick) {
      onProjectClick(project.id);
    }
  }, [onProjectClick]);

  return (
    <section className="space-y-6 py-6">
      <Reveal>
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-bold dark:text-white text-gray-900">
            Projects
          </h2>
          <span className="text-xs dark:text-gray-500 text-gray-400">
            {projects.length} projects
          </span>
        </div>
      </Reveal>

      {/* Masonry Grid (Pinterest Style) */}
      <Reveal>
        <div className="columns-2 gap-3">
          {projects.map((project, index) => (
            <MasonryCard
              key={project.id}
              project={project}
              index={index}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={handleProjectClick}
              isDragging={draggedIndex === index}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
