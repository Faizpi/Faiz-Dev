import Reveal from "./Reveal";

function Links() {
  const links = [
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
      name: "+62 878-71656326",
      href: "https://wa.me/6287871656326",
    },
    {
      label: "Instagram",
      name: "@faiz_pratama02",
      href: "https://instagram.com/faiz_pratama02",
    },
  ];

  return (
    <section className="space-y-6">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Links</h2>
      </Reveal>

      <div className="space-y-2">
        {links.map((link, i) => (
          <Reveal delay={i * 0.1} key={i}>
            <div className="flex gap-6">
              <span className="text-sm text-gray-500 w-24">{link.label}</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white transition-colors hover:text-blue-400 hover:underline"
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
