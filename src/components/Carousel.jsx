import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

// 🎨 Data Project
const PROJECTS = [
    {
    year: "Ongoing",
    image: {
      src: `${process.env.PUBLIC_URL}/ppf.jpg`
    },
    title: "Faiz-Dev",
    desc: "Personal portfolio website yang menampilkan profil, skill, project, serta informasi kontak secara interaktif dan modern.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    link: "https://github.com/Faizpi/Faiz-Dev",
    platform: "Website",
    },
    {
    year: "2025",
    image: {
      src: `${process.env.PUBLIC_URL}/targetku.jpg`
    },
    title: "TargetKu",
    desc: "Aplikasi mobile untuk mengelola tabungan target secara menyenangkan, efektif dan efisien.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
    link: "https://github.com/Faizpi/", // Ganti dengan link repository Anda
    platform: "GitHub",
    },
    {
    year: "2023",
    image: {
      src: `${process.env.PUBLIC_URL}/kny.jpg`
    },
    title: "Kimetsu no Yaiba Gallery",
    desc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba, dibangun untuk menampilkan gambar dan detail karakter.",
    tags: ["Flutter", "Dart", "Mobile App"],
    link: "https://github.com/Faizpi/", // Ganti dengan link repository Anda
    platform: "GitHub",
  },
  {
    year: "2023",
    image: {
      src: `${process.env.PUBLIC_URL}/livesc.jpg`
    },
    title: "Sports Live Score",
    desc: "Aplikasi mobile untuk melihat skor pertandingan olahraga secara langsung dengan update real-time dari berbagai cabang.",
    tags: ["Flutter", "Dart", "UI/UX"],
    link: "https://github.com/Faizpi/", // Ganti dengan link repository
    platform: "GitHub",
  },
  {
    year: "Ongoing",
    image: {
      src: `${process.env.PUBLIC_URL}/sik1.png`
    },
    title: "Bunching Label Automobile Cable Plant 1",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin bisa export data ke excel atau print view.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
    platform: "GitHub",
  },
  {
    year: "Ongoing",
    image: {
      src: `${process.env.PUBLIC_URL}/sik1.png`
    },
    title: "Bunching Label Automobile Cable Plant 2",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin bisa export data ke excel atau print view.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-cable-plant2",
    platform: "GitHub",
  },
  {
    year: "Ongoing",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "Pendanaan Daerah",
    desc: "Web platform simulasi dana desa menggunakan konsep blockchain dan validasi tahapan.",
    tags: ["MERN", "Tailwind", "Smart UI Flow"],
    link: "https://github.com/Faizpi/KTI-pendanaan_daerah",
    platform: "GitHub",
  },
  {
    year: "2025",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "Bugarin",
    desc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur workout dan plan harian.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN",
    platform: "Figma",
  },
  {
    year: "2025",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "Nusantara Hop",
    desc: "Game platformer edukatif bertema nusantara dan gunung-gunung di Indonesia + Kuis.",
    tags: ["Unity 2D", "C#", "Tilemap"],
    link: "https://github.com/Faizpi/Nusantara-Hop",
    platform: "GitHub",
  },
  {
    year: "2024",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "Taskflow",
    desc: "Task management sederhana berbasis web dengan sistem kategori dan kalender serta notifikasi.",
    tags: ["Laravel", "MySQL"],
    link: "https://github.com/Faizpi/Task-Flow",
    platform: "GitHub",
  },
  {
    year: "2024",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "Mini Games",
    desc: "Web mini-games dashboard dengan login dan logout system.",
    tags: ["PHP", "JavaScript", "MySQL"],
    link: "https://github.com/Faizpi/Login-and-Regist-form-to-Game-Dashboard",
    platform: "GitHub",
  },
  {
    year: "2024",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "PointCademy",
    desc: "Website pembelajaran interaktif berbasis poin dan kuis untuk siswa SD, SMP, dan SMA.",
    tags: ["Html", "Css", "Javascript", "Figma"],
    link: "https://github.com/Faizpi/PointCademy",
    platform: "GitHub",
  },
  {
    year: "2023",
    image: {
      src: `${process.env.PUBLIC_URL}/cat.png`
    },
    title: "K@bel",
    desc: "Aplikasi mobile kantin dengan fitur login seller dan buyer.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir",
    platform: "Figma",
  },
];

// 🧩 Kartu Project
const ProjectCard = ({ item, style }) => (
  <motion.div
    style={style}
    className="relative shrink-0 flex flex-col rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing dark:bg-neutral-900 bg-neutral-100"
  >
    {/* Gambar */}
    <div className="w-full aspect-video overflow-hidden">
      <img
        src={item.image.src}
        alt={item.title}
        className="w-full h-full object-cover"
        draggable="false"
      />
    </div>

    {/* Konten */}
    <div className="flex-grow flex flex-col p-5">
      <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">
        {item.title}
      </h3>
      <p className="text-sm dark:text-gray-300 text-gray-700 mb-4 text-balance">
        {item.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-300 text-neutral-700 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t dark:border-neutral-800 border-neutral-200">
        <span className="text-xs dark:text-gray-400 text-gray-600">
          {item.year}
        </span>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
          >
            {item.platform}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// 🌀 Carousel Utama
export default function ProjectsCarousel({
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
}) {
  const baseWidth = 500;
  const itemWidth = baseWidth * 0.8;
  const GAP = 24;
  const trackItemOffset = itemWidth + GAP;
  const initialOffset = (baseWidth - itemWidth) / 2-42;

  const carouselItems = loop
    ? [...PROJECTS, ...PROJECTS.slice(0, 1)]
    : PROJECTS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Hover pause
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !pauseOnHover) return;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (autoplay && !isHovered && !isDragging) {
      const timer = setInterval(() => nextSlide(), autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, isDragging, currentIndex]);

  const effectiveTransition = isResetting
    ? { duration: 0 }
    : { type: "spring", stiffness: 400, damping: 40 };

  const handleAnimationComplete = () => {
    if (loop && currentIndex === PROJECTS.length) {
      setIsResetting(true);
      x.set(initialOffset);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  // Transformasi untuk efek kedalaman
  const transforms = carouselItems.map((_, index) => {
    const range = [
      -(index + 1) * trackItemOffset,
      -index * trackItemOffset,
      -(index - 1) * trackItemOffset,
    ];
    const relativeX = useMotionValue(x.get() - initialOffset);
    x.onChange((v) => relativeX.set(v - initialOffset));
    const scale = useTransform(relativeX, range, [0.85, 1, 0.85]);
    const opacity = useTransform(relativeX, range, [0.4, 1, 0.4]);
    return { scale, opacity };
  });

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === PROJECTS.length ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = trackItemOffset / 3;
    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      offset < 0 ? nextSlide() : prevSlide();
    }
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <section id="Projects" className="space-y-6 py-6"> {/* spacing atas-bawah konsisten */}
  <Reveal>
    <h2 className="text-sm font-bold dark:text-white text-gray-900 px-4 sm:px-0">
      Projects
    </h2>
  </Reveal>

  {/* Container Carousel */}
  <div
    ref={containerRef}
    className="relative mx-auto group"
    style={{ width: `clamp(300px, 100%, ${baseWidth}px)`, height: "550px" }}
  >
    {/* Track Carousel */}
    <div className="relative h-full overflow-hidden rounded-2xl">
      <motion.div
        className="flex absolute top-0 left-0 h-full"
        drag="x"
        dragConstraints={{
          right: initialOffset,
          left: initialOffset - (carouselItems.length - 1) * trackItemOffset,
        }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x }}
        animate={{ x: initialOffset - currentIndex * trackItemOffset }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ width: itemWidth, marginRight: `${GAP}px` }}
          >
            <Reveal delay={index * 0.05}>
            <ProjectCard
              item={item}
              style={{
                scale: transforms[index].scale,
                opacity: transforms[index].opacity,
              }}
            />
            </Reveal>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Tombol Panah */}
    <button
      aria-label="Previous Slide"
      onClick={prevSlide}
      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full 
        flex items-center justify-center bg-white/50 dark:bg-black/50 
        backdrop-blur-sm text-gray-900 dark:text-white z-20 shadow-md 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>

    <button
      aria-label="Next Slide"
      onClick={nextSlide}
      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full 
        flex items-center justify-center bg-white/50 dark:bg-black/50 
        backdrop-blur-sm text-gray-900 dark:text-white z-20 shadow-md 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <ChevronRight className="w-6 h-6" />
    </button>

    {/* Indikator Titik */}
    <div className="absolute bottom-4 w-full flex justify-center"> {/* jarak bawah konsisten */}
      <div className="flex gap-2 px-3 py-1 bg-gray-100/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-full shadow-md">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300 hover:scale-110"
          >
            {currentIndex % PROJECTS.length === index && (
              <motion.div
                layoutId="active-indicator"
                className="absolute inset-0 rounded-full bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)]"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
