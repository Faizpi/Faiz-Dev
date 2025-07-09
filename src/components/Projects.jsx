import Reveal from "./Reveal";

function Projects() {
  const projects = [
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

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "github":
        return "https://cdn.simpleicons.org/github/FFFFFF";
      case "figma":
        return "https://cdn.simpleicons.org/figma/FFFFFF";
      default:
        return null;
    }
  };

  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Projects</h2>
      </Reveal>

      {projects.map((project, i) => (
        <Reveal delay={i * 0.07} key={i}>
          <div className="grid grid-cols-12 gap-4 items-start py-3">
            {/* Tahun */}
            <div className="col-span-2 text-xs text-gray-500 pt-1">
              {project.year}
            </div>

            {/* Logo */}
            <div className="col-span-2">
              <img
                src={project.logo}
                alt={
                  typeof project.title === "string" ? project.title : "Project"
                }
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Detail */}
            <div className="col-span-8 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-white">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:underline"
                  >
                    {project.platform} ↗
                    <img
                      src={getPlatformIcon(project.platform)}
                      alt={project.platform}
                      className="w-4 h-4"
                    />
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
  );
}

export default Projects;
