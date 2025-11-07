import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";

export default function SocialButtons() {
  const buttons = [
    {
      href: "https://www.linkedin.com/in/faiz-pratama/",
      label: "Connect ↗",
      icon: <FaLinkedin size={12} />,
    },
    {
      href: "https://github.com/Faizpi",
      label: "View GitHub ↗",
      icon: <FaGithub size={12} />,
    },
    {
      href: `${process.env.PUBLIC_URL}/Muhammad Faiz Bintang Pratama - CV.pdf`,
      label: "Download CV ↗",
      icon: <FaFileAlt size={12} />,
      download: true,
    },
    {
      href: "mailto:faizbintang1244@gmail.com",
      label: "Email Me ↗",
      icon: <FaEnvelope size={12} />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-2 mt-3">
      {buttons.map((btn, i) => (
        <motion.a
          key={i}
          href={btn.href}
          target={btn.download ? undefined : "_blank"}
          rel={btn.download ? undefined : "noopener noreferrer"}
          download={btn.download}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-start gap-2 text-xs px-3 py-1 rounded-lg
                     border border-gray-400/40 dark:border-white/30
                     bg-black/5 dark:bg-white/10 
                     backdrop-blur-md
                     text-black dark:text-white
                     shadow-lg shadow-black/5 dark:shadow-white/5
                     hover:bg-black/10 dark:hover:bg-white/20 
                     transition-all duration-300
                     flex-1 basis-[48%] h-8"
        >
          {btn.icon} {btn.label}
        </motion.a>
      ))}
    </div>
  );
}
