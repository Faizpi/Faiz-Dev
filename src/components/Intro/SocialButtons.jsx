import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";

const glassStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  boxShadow: `
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
  `,
};

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
          className="flex items-center justify-start gap-2 text-xs px-3 py-1 rounded-xl
                     border border-white/30 dark:border-white/20
                     text-black dark:text-white
                     hover:border-white/50 
                     transition-all duration-300
                     flex-1 basis-[48%] h-8"
          style={glassStyle}
        >
          {btn.icon} {btn.label}
        </motion.a>
      ))}
    </div>
  );
}
