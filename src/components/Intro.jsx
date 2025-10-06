import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="mt-2 text-xs font-mono text-gray-700 dark:text-gray-400 space-y-0.5">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="flex items-start gap-4">
      {/* Foto */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/Faiz.png`}
        alt="Faiz"
        className="w-24 h-24 rounded-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Teks dan tombol */}
      <div className="pt-[2px]">
        <h1 className="text-lg font-semibold leading-tight text-black dark:text-white">
          Muhammad Faiz Bintang Pratama
        </h1>

        {/* Typewriter Effect */}
        <p className="text-sm mt-1 leading-tight text-gray-700 dark:text-gray-400">
          <Typewriter
            words={["UI/UX Designer", "Web Developer", "Mobile Developer"]}
            loop={0}
            cursor
            cursorStyle="_*"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Clock */}
        <Clock />

        {/* Tombol actions */}
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            {
              href: "https://www.linkedin.com/in/faiz-pratama/",
              label: "Connect LinkedIn ↗",
              icon: <FaLinkedin size={12} />,
            },
            {
              href: "https://github.com/Faizpi",
              label: "GitHub ↗",
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
          ].map((btn, i) => (
            <motion.a
              key={i}
              href={btn.href}
              target={btn.download ? undefined : "_blank"}
              rel={btn.download ? undefined : "noopener noreferrer"}
              download={btn.download}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 text-xs px-3 py-1 rounded-lg 
                         border border-gray-400/40 dark:border-white/30
                         bg-black/5 dark:bg-white/10 
                         backdrop-blur-md 
                         text-black dark:text-white
                         shadow-lg shadow-black/5 dark:shadow-white/5
                         hover:bg-black/10 dark:hover:bg-white/20 
                         transition-all duration-300"
            >
              {btn.icon} {btn.label}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
