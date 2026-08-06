import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

export const PROJECTS = [
  {
    id: 6,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/Yulia APP/thumbnail.png`,
    gallery: [
      `${process.env.PUBLIC_URL}/Yulia APP/detail-project/1.png`,
      `${process.env.PUBLIC_URL}/Yulia APP/detail-project/2.png`,
    ],
    title: "Yulia APP",
    subtitle: "Aplikasi Manajemen Tenaga Alih Daya PLN",
    desc: "Aplikasi Flutter dan Laravel untuk mendukung operasional tenaga alih daya PLN, mulai dari absensi harian, input kegiatan, pengajuan lembur, SPPD atau perjalanan dinas, histori aktivitas, hingga rekap data operasional.",
    tags: ["Flutter", "Laravel", "Rest API"],
  },
  {
    id: 1,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/thumbnail.png`,
    gallery: [
      `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/detail-project/hibiscusefsya1.png`,
      `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/detail-project/2.png`,
      `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/detail-project/3.png`,
      `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/detail-project/4.png`,
      `${process.env.PUBLIC_URL}/Hibiscus Efsya POS/detail-project/5.png`,
    ],
    title: "Hibiscus Efsya Accounting, POS & Inventory App",
    subtitle: "Web & Mobile Accounting, POS, and Inventory Management System",
    desc: "Aplikasi web dan mobile untuk mengelola seluruh proses operasional bisnis dalam satu sistem terintegrasi. Fitur yang tersedia mencakup transaksi penjualan, invoice, pembayaran piutang, pembelian, penerimaan barang, pembayaran hutang, manajemen stok multi-gudang, stock opname, pengelolaan produk, biaya, kas dan bank, serta berbagai laporan akuntansi seperti neraca, laba rugi, arus kas, buku besar, jurnal, dan neraca saldo. Aplikasi ini juga dilengkapi workflow approval multi-role, pencatatan kunjungan sales, batch dan tanggal kedaluwarsa produk, export laporan, serta dokumen siap cetak atau thermal-ready.",
    tags: ["Laravel", "MySQL", "Flutter", "Rest API"],
    link: "https://github.com/Faizpi/",
  },
  {
    id: 2,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/Hibiscusefsya Landingpage/thumbnail.png`,
    gallery: [`${process.env.PUBLIC_URL}/Hibiscusefsya Landingpage/detail-project/1.png`],
    title: "Hibiscusefsya Landingpage",
    subtitle: "Company Profile Landing Page",
    desc: "Landing page resmi Hibiscusefsya yang terintegrasi dengan admin panel CMS untuk mengelola konten website, profil brand, produk unggulan, dan informasi bisnis.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    link: "https://hibiscusefsya.com/",
  },
  {
    id: 3,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/MBK Hibiscusefsya Katalog/thumbnail.png`,
    gallery: [
      `${process.env.PUBLIC_URL}/MBK Hibiscusefsya Katalog/detail-project/1.png`,
      `${process.env.PUBLIC_URL}/MBK Hibiscusefsya Katalog/detail-project/2.png`,
    ],
    title: "MBK Hibiscusefsya Katalog",
    subtitle: "Online Product Catalog",
    desc: "Katalog online produk bodycare Hibiscusefsya yang terhubung dengan admin panel CMS untuk mengelola produk, kategori, dan informasi katalog secara dinamis.",
    tags: ["React", "Tailwind CSS", "Catalog"],
    link: "https://bodycare.hibiscusefsya.com/",
  },
  {
    id: 4,
    year: "2026",
    image: `${process.env.PUBLIC_URL}/Amara Baby Shop/thumbnail.png`,
    title: "Amara Baby Shop",
    subtitle: "Manajemen Inventaris & POS Toko Perlengkapan Bayi",
    desc: "Aplikasi mobile untuk membantu toko perlengkapan bayi mengelola stok, penjualan, dan operasional toko dengan lebih praktis.",
    tags: ["Flutter", "Firebase"],
    link: "https://github.com/Faizpi/babyshop",
  },
  {
    id: 5,
    year: "2025",
    image: `${process.env.PUBLIC_URL}/STB Label Cable Plant 1/thumbnail.png`,
    title: "STB Label Cable Plant 1",
    subtitle: "Industrial Web Application",
    desc: "Aplikasi Web Based untuk memberi label pada kabel automobile dengan fitur barcode scanning dan export data.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
    link: "https://github.com/Faizpi/bunching-label-tugas-akhir",
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
                <a
                  href={`#project-${project.id}`}
                  aria-label={`View details for ${project.title}`}
                  className="w-36 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
                >
                  <div className="aspect-video rounded-lg overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      width="320"
                      height="180"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-[10px] dark:text-gray-500 text-gray-400 text-center mt-1.5">
                    {project.year}
                  </p>
                </a>
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold dark:text-white text-black truncate">
                        <a
                          href={`#project-${project.id}`}
                          className="rounded-sm hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                        >
                          {project.title}
                        </a>
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
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex rounded-sm text-xs font-medium text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    View project details
                  </a>
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
