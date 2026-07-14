import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { useLang } from "../../context/LanguageContext";
import translations from "../../context/translations";

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
  const { lang } = useLang();
  const t = translations[lang].intro;

  const buttons = [
    {
      href: `${process.env.PUBLIC_URL}/Muhammad Faiz Bintang Pratama - CV.pdf`,
      label: t.downloadCV,
      icon: <FaFileAlt size={12} aria-hidden="true" />,
      download: true,
    },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-2 mt-3">
      {buttons.map((btn, i) => (
        <motion.a
          key={i}
          href={btn.href}
          target={btn.external ? "_blank" : undefined}
          rel={btn.external ? "noopener noreferrer" : undefined}
          download={btn.download}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-start gap-2 text-xs px-3 py-1 rounded-xl
                     border border-white/30 dark:border-white/20
                     text-black dark:text-white
                     hover:border-white/50 
                     transition-all duration-300
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black
                      w-full h-8"
          style={glassStyle}
        >
          {btn.icon} {btn.label}
        </motion.a>
      ))}
    </div>
  );
}
