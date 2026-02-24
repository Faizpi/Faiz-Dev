import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';


const PROJECTS = [
  {
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/ppf.jpg` },
    title: "Faiz-Dev",
    desc: "Personal portfolio website yang menampilkan profil, skill, project, serta informasi kontak secara interaktif dan modern.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    link: "https://github.com/Faizpi/Faiz-Dev",
    platform: "Website",
    id: 1,
  },
  {
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/targetku.jpg` },
    title: "TargetKu",
    desc: "Aplikasi mobile untuk mengelola tabungan target secara menyenangkan, efektif dan efisien.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    id: 2,
  },
  {
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/kny.jpg` },
    title: "Kimetsu no Yaiba Gallery",
    desc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba.",
    tags: ["Flutter", "Dart", "Mobile App"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    id: 3,
  },
  {
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/livesc.jpg` },
    title: "Sports Live Score",
    desc: "Aplikasi mobile untuk melihat skor pertandingan olahraga secara langsung.",
    tags: ["Flutter", "Dart", "UI/UX"],
    link: "https://github.com/Faizpi/",
    platform: "GitHub",
    id: 4,
  },
  {
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/sik1.png` },
    title: "Bunching Label Plant 1",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
    platform: "GitHub",
    id: 5,
  },
  {
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/sik1.png` },
    title: "Bunching Label Plant 2",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile Plant 2.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-cable-plant2",
    platform: "GitHub",
    id: 6,
  },
  {
    year: "Ongoing",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Pendanaan Daerah",
    desc: "Web platform simulasi dana desa menggunakan konsep blockchain.",
    tags: ["MERN", "Tailwind", "Smart UI Flow"],
    link: "https://github.com/Faizpi/KTI-pendanaan_daerah",
    platform: "GitHub",
    id: 7,
  },
  {
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Bugarin",
    desc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur workout.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN",
    platform: "Figma",
    id: 8,
  },
  {
    year: "2025",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Nusantara Hop",
    desc: "Game platformer edukatif bertema nusantara dan gunung-gunung Indonesia + Kuis.",
    tags: ["Unity 2D", "C#", "Tilemap"],
    link: "https://github.com/Faizpi/Nusantara-Hop",
    platform: "GitHub",
    id: 9,
  },
  {
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Taskflow",
    desc: "Task management sederhana berbasis web dengan sistem kategori dan kalender serta notifikasi.",
    tags: ["Laravel", "MySQL"],
    link: "https://github.com/Faizpi/Task-Flow",
    platform: "GitHub",
    id: 10,
  },
  {
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "Mini Games",
    desc: "Web mini-games dashboard dengan login dan logout system.",
    tags: ["PHP", "JavaScript", "MySQL"],
    link: "https://github.com/Faizpi/Login-and-Regist-form-to-Game-Dashboard",
    platform: "GitHub",
    id: 11,
  },
  {
    year: "2024",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "PointCademy",
    desc: "Website pembelajaran interaktif berbasis poin dan kuis untuk siswa SD, SMP, dan SMA.",
    tags: ["Html", "Css", "Javascript", "Figma"],
    link: "https://github.com/Faizpi/PointCademy",
    platform: "GitHub",
    id: 12,
  },
  {
    year: "2023",
    image: { src: `${process.env.PUBLIC_URL}/cat.png` },
    title: "K@bel",
    desc: "Aplikasi mobile kantin dengan fitur login seller dan buyer.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir",
    platform: "Figma",
    id: 13,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };


function CarouselItem({ item, index, itemWidth, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className="relative shrink-0 flex flex-col rounded-xl overflow-hidden cursor-grab active:cursor-grabbing dark:bg-neutral-900 bg-neutral-100 shadow-lg"
      style={{
        width: itemWidth,
        height: '100%',
        rotateY: rotateY,
      }}
      transition={transition}
    >

      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={item.image.src}
          alt={item.title}
          className="w-full h-full object-cover"
          draggable="false"
        />
      </div>


      <div className="flex-grow flex flex-col p-3">
        <h3 className="text-sm font-bold dark:text-white text-gray-900 mb-1 line-clamp-1">
          {item.title}
        </h3>
        <p className="text-xs dark:text-gray-300 text-gray-700 mb-2 line-clamp-2">
          {item.desc}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-300 text-neutral-700 px-1.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 2 && (
            <span className="text-[10px] dark:bg-neutral-800 bg-neutral-200 dark:text-neutral-300 text-neutral-700 px-1.5 py-0.5 rounded-full">
              +{item.tags.length - 2}
            </span>
          )}
        </div>


        <div className="flex justify-between items-center mt-auto pt-2 border-t dark:border-neutral-800 border-neutral-200">
          <span className="text-[10px] dark:text-gray-400 text-gray-600">
            {item.year}
          </span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-0.5 text-xs text-blue-400 hover:underline"
            >
              {item.platform}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}


export default function Carousel({
  items = PROJECTS,
  baseWidth = 400,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) {
  const containerPadding = 16;
  const itemWidth = 280;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
        right: 0
      }
    };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <section id="Projects" className="space-y-6 py-6">
      <Reveal>
        <h2 className="text-sm font-bold dark:text-white text-gray-900 px-4 sm:px-0">
          Projects
        </h2>
      </Reveal>


      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-[24px] border border-neutral-800 dark:border-neutral-700 mx-auto"
        style={{
          width: `${baseWidth}px`,
          height: '420px',
          padding: `${containerPadding}px`
        }}
      >
        <motion.div
          className="flex"
          drag={isAnimating ? false : 'x'}
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x,
            height: '100%'
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item?.id ?? index}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>


        <div className="flex w-full justify-center absolute bottom-4 left-0 right-0">
          <div className="flex gap-1.5">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === index
                  ? 'w-6 bg-blue-500'
                  : 'w-1.5 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                  }`}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1
                }}
                onClick={() => setPosition(loop ? index + 1 : index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
