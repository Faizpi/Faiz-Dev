import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    year: "2025",
    image: `${process.env.PUBLIC_URL}/sik1.png`,
    title: "Bunching Label Plant 1",
    subtitle: "Industrial Web Application",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dengan fitur barcode scanning dan export data.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
  },
  {
    id: 4,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/hibiscusefsya1.png`,
    title: "Hibiscus Efsya POS",
    subtitle: "POS System Web Application",
    desc: "Aplikasi Web Based untuk mengelola sistem point of sale mulai dari penjualan, pembelian, biaya, kunjungan, invoice, export data excel dan pdf, dll.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 10,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/hibiscusefsya1.png`,
    title: "Hibiscus Efsya POS Mobile App",
    subtitle: "POS System Mobile Application",
    desc: "Aplikasi Mobile untuk mengelola sistem point of sale mulai dari penjualan, pembelian, biaya, kunjungan, invoice, export data excel dan pdf, dll.",
    tags: ["Flutter", "Rest API"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 7,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/amara.png`,
    title: "Amara Baby Shop",
    subtitle: "Manajemen Inventaris & POS Toko Perlengkapan Bayi",
    desc: "Aplikasi mobile yang cocok untuk menjadi solusi lengkap untuk mengelola stok, penjualan, dan bisnis multi-warung Anda.",
    tags: ["Flutter", "Firebase"],
    link: "https://github.com/Faizpi/babyshop",
  },
  {
    id: 2,
    year: "2025",
    image: `${process.env.PUBLIC_URL}/targetku.jpg`,
    title: "TargetKu",
    subtitle: "Savings Management App",
    desc: "Aplikasi mobile untuk mengelola tabungan target secara menyenangkan, efektif dan efisien dengan gamification.",
    tags: ["Flutter", "Firebase"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 3,
    year: "2023",
    image: `${process.env.PUBLIC_URL}/kny.jpg`,
    title: "Kimetsu no Yaiba Gallery",
    subtitle: "Anime Character Gallery",
    desc: "Aplikasi mobile galeri karakter dari anime Kimetsu no Yaiba dengan detail info dan UI yang terinspirasi anime.",
    tags: ["Flutter"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 9,
    year: "2025",
    image: `${process.env.PUBLIC_URL}/cat.png`,
    title: "Nusantara Hop",
    subtitle: "Educational Platformer Game",
    desc: "Game platformer edukatif bertema nusantara dan gunung-gunung Indonesia dengan fitur kuis.",
    tags: ["Unity 2D", "C#", "Tilemap"],
    link: "https://github.com/Faizpi/Nusantara-Hop",
  },
  {
    id: 8,
    year: "2025",
    image: `${process.env.PUBLIC_URL}/figma.png`,
    title: "Bugarin",
    subtitle: "Fitness App Design",
    desc: "Desain aplikasi mobile pelatihan dan kebugaran dengan fitur workout dan plan harian.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/GWSnsK9ECzJ7fct4MomEcZ/BUGARIN",
  },
  {
    id: 13,
    year: "2023",
    image: `${process.env.PUBLIC_URL}/figma.png`,
    title: "K@bel",
    subtitle: "Canteen App Design",
    desc: "Desain aplikasi mobile kantin dengan fitur login seller dan buyer untuk transaksi digital.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Wireframing"],
    link: "https://www.figma.com/design/3tysDmv7A60w33iGLOGwtT/Kantin_jawir",
  },
];

function Projects() {
  return (
    <section className="space-y-8">
      <Reveal>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold dark:text-white text-black">Projects</h2>
          <span className="text-xs dark:text-gray-500 text-gray-400">
            {PROJECTS.length} projects
          </span>
        </div>
      </Reveal>

      {PROJECTS.map((project, index) => (
        <Reveal key={project.id} delay={index * 0.08}>
          <div className="flex gap-4 items-start">
            <div className="w-36 shrink-0">
              <div className="aspect-video rounded-lg overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] dark:text-gray-500 text-gray-400 text-center mt-1.5">
                {project.year}
              </p>
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold dark:text-white text-black truncate">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight size={14} className="dark:text-gray-400 text-gray-600 shrink-0" />
                    </a>
                  )}
                </div>
                <p className="text-xs dark:text-gray-400 text-gray-700">
                  {project.subtitle}
                </p>
              </div>
              <p className="text-xs dark:text-gray-400 text-gray-700 text-justify leading-relaxed">
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

      <Reveal delay={PROJECTS.length * 0.08 + 0.1}>
        <div className="pt-6">
          <p className="text-xs dark:text-gray-500 text-gray-600">
            Ingin melihat lebih banyak project saya? Silakan akses portofolio
            lengkap di sini:{" "}
            <a
              href="https://github.com/Faizpi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Github ↗
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
