import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

function ProjectGallery({ project }) {
  if (!project.gallery?.length) {
    return (
      <p className="rounded-lg border border-dashed border-black/10 px-4 py-8 text-center text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
        Project images belum tersedia.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {project.gallery.map((image, index) => (
        <figure key={`${image}-${index}`} className="space-y-2">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
            <img
              src={image}
              alt={`${project.title} project image ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="text-center text-[11px] text-gray-500 dark:text-gray-400">
            {project.title} · Image {index + 1}
          </figcaption>
        </figure>
      ))}
    </div>
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
              {project.year} · Project details
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
              Project images
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <ProjectGallery project={project} />
          </Reveal>
        </section>
      </div>
    </main>
  );
}
