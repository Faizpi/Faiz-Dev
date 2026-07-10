import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, Tablet } from "lucide-react";
import Reveal from "./Reveal";

const MOCKUP_SIZES = [
  { label: "Desktop experience", icon: Monitor, aspectRatio: "aspect-[16/10]" },
  { label: "Tablet experience", icon: Tablet, aspectRatio: "aspect-[4/3]" },
  { label: "Mobile experience", icon: Smartphone, aspectRatio: "aspect-[9/16] max-w-[13rem] mx-auto" },
];

function MockupPlaceholder({ project, label, icon: Icon, aspectRatio }) {
  const imageUrl = `https://placehold.co/1200x800/374151/E5E7EB?text=${encodeURIComponent(
    `${project.title}\n${label}`
  )}`;

  return (
    <figure className="space-y-3">
      <div
        className={`overflow-hidden rounded-xl border border-black/10 bg-gray-700 shadow-sm dark:border-white/10 ${aspectRatio}`}
      >
        <img
          src={imageUrl}
          alt={`${project.title} ${label} mockup placeholder`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
        <Icon size={13} aria-hidden="true" />
        {label}
      </figcaption>
    </figure>
  );
}

export default function ProjectDetail({ project }) {
  return (
    <main id="main-content" className="relative z-10 bg-white/70 backdrop-blur-sm dark:bg-black/70">
      <div className="mx-auto max-w-md space-y-10 px-4 py-12 pb-24">
        <Reveal>
          <a
            href="#Projects"
            className="inline-flex items-center gap-2 rounded-sm text-xs text-gray-600 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:text-gray-400"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to projects
          </a>
        </Reveal>

        <Reveal delay={0.06}>
          <header className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {project.year} · Case study
            </p>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-black dark:text-white">
                {project.title}
              </h1>
              <p className="text-sm text-gray-700 dark:text-gray-300">{project.subtitle}</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Visit project
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </header>
        </Reveal>

        <section aria-labelledby="gallery-heading" className="space-y-6">
          <Reveal delay={0.12}>
            <h2 id="gallery-heading" className="text-sm font-bold text-black dark:text-white">
              Interface gallery
            </h2>
          </Reveal>
          {MOCKUP_SIZES.map((mockup, index) => (
            <Reveal key={mockup.label} delay={0.16 + index * 0.06}>
              <MockupPlaceholder project={project} {...mockup} />
            </Reveal>
          ))}
        </section>
      </div>
    </main>
  );
}
