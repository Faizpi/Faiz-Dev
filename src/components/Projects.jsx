import Reveal from "./Reveal"; 

function Projects() {
  const projects = [
    {
      year: "Ongoing",
      logo: "/logos/pendanaan.png",
      title: "Pendanaan Daerah",
      desc: "Web platform simulasi dana desa menggunakan konsep blockchain dan validasi tahapan.",
      stack: "MERN • Tailwind • Smart UI Flow",
      link: "https://github.com/Faizpi/pendanaan-daerah",
      platform: "GitHub",
    },
    {
      year: "2025",
      logo: "/logos/bugarin.png",
      title: "Bugarin",
      desc: "Aplikasi mobile pelatihan dan kebugaran dengan fitur hitung kalori dan plan harian.",
      stack: "React Native • Firebase • Expo",
      link: "https://github.com/Faizpi/bugarin",
      platform: "GitHub",
    },
    {
      year: "2025",
      logo: "/Game.png",
      title: "Mini Games",
      desc: "Web mini-games arcade buatan sendiri dengan leaderboard dan logout system.",
      stack: "PHP • JavaScript • MySQL • Tailwind",
      link: "https://github.com/Faizpi/mini-games",
      platform: "GitHub",
    },
    {
      year: "2025",
      logo: "/logos/nusantara.png",
      title: "Nusantara Hop",
      desc: "Game platformer edukatif bertema nusantara dan gunung-gunung di Indonesia + Kuis.",
      stack: "Unity 2D • C# • Tilemap",
      link: "https://github.com/Faizpi/nusantara-hop",
      platform: "GitHub",
    },
    {
      year: "2024",
      logo: "/logos/taskflow.png",
      title: "Taskflow",
      desc: "Task management sederhana berbasis web dengan sistem kategori dan progres bar.",
      stack: "React • Zustand • Tailwind • Vite",
      link: "https://figma.com/file/xxxxx/Taskflow",
      platform: "Figma",
    },
    {
      year: "2024",
      logo: "/logos/pointcademy.png",
      title: "PointCademy",
      desc: "Website pembelajaran interaktif berbasis poin dan kuis untuk siswa SD, SMP, dan SMA.",
      stack: "Laravel • Vue • Bootstrap",
      link: "https://figma.com/file/xxxxx/PointCademy",
      platform: "Figma",
    },
    {
      year: "2024",
      logo: "/logos/barca.png",
      title: "FC Barcelona",
      desc: "Website tribute interaktif bertema FC Barcelona dengan embed Spotify dan jadwal.",
      stack: "HTML • CSS • PHP • Spotify API",
      link: "https://github.com/Faizpi/fc-barcelona",
      platform: "GitHub",
    },
    {
      year: "2023",
      logo: "/logos/kabel.png",
      title: "K@bel",
      desc: "Simulasi jaringan kabel berbasis web untuk edukasi dasar topologi dan transmisi data.",
      stack: "Next.js • SVG • DiagramJS",
      link: "https://github.com/Faizpi/kabel-network-simulator",
      platform: "GitHub",
    },
  ];

  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Side Projects</h2>
      </Reveal>
      

      {projects.map((project, i) => (
        <Reveal delay={i * 0.07} key={i}>
          <div className="grid grid-cols-12 gap-4 items-start py-3">
            {/* Tahun */}
            <div className="col-span-2 text-xs text-gray-500 pt-1">{project.year}</div>

            {/* Logo */}
            <div className="col-span-2">
              <img
                src={project.logo}
                alt={project.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Detail */}
            <div className="col-span-8 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline"
                  >
                    ↗ {project.platform}
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-400">{project.desc}</p>
              <p className="text-xs text-gray-500">{project.stack}</p>
            </div>
          </div>
        </Reveal>
      ))}

      {/* Link ke Drive */}
      <Reveal delay={projects.length * 0.13}>
        <div className="pt-6">
          <p className="text-xs text-gray-500">
            Ingin melihat lebih banyak project saya? Silakan akses portofolio lengkap saya dalam bentuk PDF di sini:{" "}
            <a
              href="https://drive.google.com/drive/folders/xxxxx"
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
  );
}

export default Projects;
