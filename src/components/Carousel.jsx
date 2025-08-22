import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

//Komponen Reveal (fade + slide + sekali muncul)
const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

//Data Projects
const PROJECTS = [
      {
      year: "Ongoing",
      logo: `${process.env.PUBLIC_URL}/mylogo.png`,
      title: "Bunching Label Automobile Cable Plant 1",
      desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin atau operator bisa export data ke excel atau pdf.",
      stack: "Laravel • Bootsrtap",
      link: "https://github.com/Faizpi/bunching-label-2",
      platform: "GitHub",
    },
    {
      year: "Ongoing",
      logo: `${process.env.PUBLIC_URL}/mylogo.png`,
      title: "Bunching Label Automobile Cable Plant 2",
      desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dan bisa di scan melalui barcode. Terdapat fitur laporan yang memungkinkan admin atau operator bisa export data ke excel atau pdf.",
      stack: "Laravel • Bootsrtap",
      link: "https://github.com/Faizpi/bunching-label-2",
      platform: "GitHub",
    },
    {
      year: "Ongoing",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: (
        <a
          href="https://faizpi.github.io/Faiz-Dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white underline hover:text-blue-400"
        >
          Faiz-Dev
        </a>
      ),
      desc: "Personal portfolio website yang menampilkan profil, skill, project, serta informasi kontak secara interaktif dan modern.",
      stack: "React • Tailwind CSS • Framer Motion • GitHub Pages",
      link: "https://github.com/Faizpi/Faiz-Dev",
      platform: "GitHub",
    },
    {
      year: "Ongoing",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: "Pendanaan Daerah",
      desc: "Web platform simulasi dana desa menggunakan konsep blockchain dan validasi tahapan.",
      stack: "MERN • Tailwind • Smart UI Flow",
      link: "https://github.com/Faizpi/KTI-pendanaan_daerah",
      platform: "GitHub",
    },
    {
      year: "2025",
      logo: "https://cdn.simpleicons.org/figma/FFFFFF",
      title: "Bugarin",
      desc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur workout dan plan harian.",
      stack: "Figma • UI/UX Design • Prototyping • Wireframing",
      link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN?node-id=0-1&t=CHPPLCgQfDHsDayR-1",
      platform: "Figma",
    },
    {
      year: "2025",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: "Nusantara Hop",
      desc: "Game platformer edukatif bertema nusantara dan gunung-gunung di Indonesia + Kuis.",
      stack: "Unity 2D • C# • Tilemap",
      link: "https://github.com/Faizpi/Nusantara-Hop",
      platform: "GitHub",
    },
    {
      year: "2024",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: "Taskflow",
      desc: "Task management sederhana berbasis web dengan sistem kategori dan kalender serta notifikasi.",
      stack: "Laravel • MySQL",
      link: "https://github.com/Faizpi/Task-Flow",
      platform: "Figma",
    },
    {
      year: "2024",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: "Mini Games",
      desc: "Web mini-games dashboard dengan login dan logout system.",
      stack: "PHP • JavaScript • MySQL",
      link: "https://github.com/Faizpi/Login-and-Regist-form-to-Game-Dashboard",
      platform: "GitHub",
    },
    {
      year: "2024",
      logo: "https://cdn.simpleicons.org/github/FFFFFF",
      title: "PointCademy",
      desc: "Website pembelajaran interaktif berbasis poin dan kuis untuk siswa SD, SMP, dan SMA.",
      stack: "Html • Css • Javascript • Figma",
      link: "https://github.com/Faizpi/PointCademy",
      platform: "Github",
    },
    {
      year: "2023",
      logo: "https://cdn.simpleicons.org/figma/FFFFFF",
      title: "K@bel",
      desc: "Aplikasi mobile kantin dengan fitur login seller dan buyer.",
      stack: "Figma • UI/UX Design • Prototyping • Wireframing",
      link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir?node-id=0-1&t=4NR5hczjUVlDKiRl-1",
      platform: "Figma",
    },
];

const GAP = 18;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function ProjectsCarousel({
  baseWidth = 320,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) {
  const containerPadding = 18;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...PROJECTS, PROJECTS[0]] : PROJECTS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);

  // 🔹 Hover pause
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // 🔹 Autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && !isDragging && !isResetting) {
      const timer = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, pauseOnHover, isDragging, isResetting, currentIndex]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 80);
    }
  };

  const rotateTransforms = carouselItems.map((_, index) => {
    const range = [
      -(index + 1) * trackItemOffset,
      -index * trackItemOffset,
      -(index - 1) * trackItemOffset,
    ];
    return useTransform(x, range, [90, 0, -90], { clamp: false });
  });

  // 🔹 Navigasi manual
  const nextSlide = () => {
    if (isDragging) return;
    setCurrentIndex((prev) => {
      if (prev === PROJECTS.length - 1 && loop) return prev + 1;
      if (prev === carouselItems.length - 1) return loop ? 0 : prev;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    if (isDragging) return;
    setCurrentIndex((prev) => {
      if (prev === 0) return loop ? PROJECTS.length - 1 : 0;
      return prev - 1;
    });
  };

  // 🔹 Handle drag
  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 500) {
        setCurrentIndex((prev) => {
          if (prev === 0) return loop ? PROJECTS.length - 1 : 0;
          return prev - 1;
        });
      } else if (offset < 0 || velocity < -500) {
        setCurrentIndex((prev) => {
          if (prev === PROJECTS.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }
    }
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <section id="Projects" className="w-full flex flex-col gap-6">
      {/* Judul kiri */}
      <Reveal>
        <h2 className="text-sm font-bold text-white">Projects</h2>
      </Reveal>

      {/* Wrapper biar carousel center */}
      <div className="flex justify-center">
        <div className="relative flex items-center">
          {/* Tombol kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 text-white hover:text-blue-400 transition-colors duration-200 z-10"
            disabled={!loop && currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Container carousel */}
          <div
            ref={containerRef}
            className="relative overflow-hidden p-4 rounded-[24px] border border-[#222] bg-[#111]"
            style={{ width: `${baseWidth}px` }}
          >
            {/* Track */}
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{ gap: `${GAP}px`, perspective: 1000, x }}
              animate={{ x: -(currentIndex * trackItemOffset) }}
              transition={effectiveTransition}
              onAnimationComplete={handleAnimationComplete}
            >
              {carouselItems.map((item, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <motion.div
                    className="relative shrink-0 flex flex-col items-start justify-between bg-[#1c1c1c] border border-[#333] rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing"
                    style={{ width: itemWidth, rotateY: rotateTransforms[index] }}
                    transition={effectiveTransition}
                  >
                    {/* Logo & Year */}
                    <div className="p-5 flex items-center gap-2">
                      <img src={item.logo} alt={item.title} className="w-8 h-8 object-contain" />
                      <span className="text-xs text-gray-400">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-1 font-bold text-lg text-white">{item.title}</div>
                      <p className="text-sm text-gray-300">{item.desc}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.stack}</p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:underline mt-2 block"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.platform} ↗
                        </a>
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </motion.div>

            {/* Indicators */}
            <div className="flex w-full justify-center mt-4">
              <div className="flex w-[150px] justify-between px-8">
                {PROJECTS.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                      currentIndex % PROJECTS.length === index
                        ? "bg-white"
                        : "bg-[rgba(255,255,255,0.3)]"
                    }`}
                    animate={{ scale: currentIndex % PROJECTS.length === index ? 1.2 : 1 }}
                    onClick={() => setCurrentIndex(index)}
                    transition={{ duration: 0.15 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 text-white hover:text-blue-400 transition-colors duration-200 z-10"
            disabled={!loop && currentIndex === PROJECTS.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
