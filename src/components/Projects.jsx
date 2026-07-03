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
    subtitle: "POS System Web & Mobile Application",
    desc: "Aplikasi Web dan Mobile untuk mengelola sistem point of sale mulai dari penjualan, pembelian, biaya, kunjungan, invoice, export data excel dan pdf, dll.",
    tags: ["Laravel", "Bootstrap", "MySQL", "Flutter", "Rest API"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 7,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/amara.png`,
    title: "Amara Baby Shop",
    subtitle: "Manajemen Inventaris & POS Toko Perlengkapan Bayi",
    desc: "Aplikasi mobile untuk membantu toko perlengkapan bayi mengelola stok, penjualan, dan operasional toko dengan lebih praktis.",
    tags: ["Flutter", "Firebase"],
    link: "https://github.com/Faizpi/babyshop",
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

      <ul className="space-y-8">
        {PROJECTS.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={index * 0.08}>
              <article className="flex gap-4 items-start">
                <div className="w-36 shrink-0">
                  <div className="aspect-video rounded-lg overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      width="320"
                      height="180"
                      loading="lazy"
                      decoding="async"
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
                          aria-label={`Open ${project.title} repository`}
                          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
                        >
                          <ArrowUpRight
                            size={14}
                            aria-hidden="true"
                            className="dark:text-gray-400 text-gray-600 shrink-0"
                          />
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
              </article>
            </Reveal>
          </li>
        ))}
      </ul>


      <Reveal delay={PROJECTS.length * 0.08 + 0.1}>
        <div className="pt-6">
          <p className="text-xs dark:text-gray-500 text-gray-600">
            Ingin melihat lebih banyak project saya? Silakan akses portofolio
            lengkap di sini:{" "}
              <a
                href="https://github.com/Faizpi/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
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
