import Reveal from "./Reveal";
import { useLang } from "../context/LanguageContext";
import translations from "../context/translations";

function Links() {
  const { lang } = useLang();
  const t = translations[lang].links;

  const links = [
    {
      label: "CV",
      name: "Download CV",
      href: `${process.env.PUBLIC_URL}/Muhammad Faiz Bintang Pratama - CV.pdf`,
      download: true,
    },
    {
      label: "GitHub",
      name: "@Faizpi",
      href: "https://github.com/Faizpi",
    },
    {
      label: "LinkedIn",
      name: "Muhammad Faiz Bintang Pratama",
      href: "https://www.linkedin.com/in/faiz-pratama/",
    },
    {
      label: "Email",
      name: "faizbintang1244@gmail.com",
      href: "mailto:faizbintang1244@gmail.com",
    },
    {
      label: "WhatsApp",
      name: "+62 87871656326",
      href: "https://wa.me/6287871656326",
    },
    {
      label: "Instagram",
      name: "@faiz_pratama02",
      href: "https://instagram.com/faiz_pratama02",
    },
  ];

  const isExternalLink = (href) => href.startsWith("http");

  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold dark:text-white text-gray-900">
          {t.title}
        </h2>
      </Reveal>

      <div className="space-y-2">
        {links.map((link, i) => (
          <Reveal delay={i * 0.1} key={i}>
            <div className="flex gap-6">

              <span className="text-sm dark:text-gray-400 text-gray-700 w-24">
                {link.label}
              </span>


              <a
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                rel={isExternalLink(link.href) ? "noopener noreferrer" : undefined}
                download={link.download}
                className="rounded-sm text-sm dark:text-white text-gray-900 transition-colors hover:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
              >
                {link.name} ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Links;
