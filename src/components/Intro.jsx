import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from "react-icons/fa";

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
        <h1
          className="text-lg font-semibold hover-text-shine leading-tight"
          data-text="Muhammad Faiz Bintang Pratama"
        >
          Muhammad Faiz Bintang Pratama
        </h1>

        <p className="text-sm text-gray-400 mt-1 leading-tight">
          <Typewriter
            words={['UI/UX Designer', 'Web Developer']}
            loop={0}
            cursor
            cursorStyle="_*"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Tombol actions */}
        <div className="flex flex-wrap gap-2 mt-2">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/faiz-pratama/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-xs px-3 py-1 border border-white/30 rounded-lg 
                       bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 
                       text-white hover:bg-white/20 transition-all duration-300"
          >
            <FaLinkedin size={12} /> Connect LinkedIn ↗
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Faizpi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-xs px-3 py-1 border border-white/30 rounded-lg 
                       bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 
                       text-white hover:bg-white/20 transition-all duration-300"
          >
            <FaGithub size={12} /> GitHub ↗
          </motion.a>

          {/* Download CV */}
          <motion.a
            href={`${process.env.PUBLIC_URL}/Muhammad Faiz Bintang Pratama - CV.pdf`}
            download
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-xs px-3 py-1 border border-white/30 rounded-lg 
                       bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 
                       text-white hover:bg-white/20 transition-all duration-300"
          >
            <FaFileAlt size={12} /> Download CV ↗
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:faizbintang1244@gmail.com"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-xs px-3 py-1 border border-white/30 rounded-lg 
                       bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 
                       text-white hover:bg-white/20 transition-all duration-300"
          >
            <FaEnvelope size={12} /> Email Me ↗
          </motion.a>
        </div>
      </div>
    </div>
  );
}
