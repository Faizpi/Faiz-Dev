import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

export default function Intro() {
  return (
    <div className="flex items-start gap-4">
      {/* Foto */}
      <motion.img
        img src={`${process.env.PUBLIC_URL}/Faiz.png`} alt="Faiz"
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

      <motion.a
        href={`${process.env.PUBLIC_URL}/Muhammad Faiz Bintang Pratama - CV.pdf`}
        download
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="inline-block text-xs px-3 py-1 border border-white/30 rounded-lg 
                  bg-white/10 backdrop-blur-md shadow-lg shadow-white/5 
                  text-white hover:bg-white/20 transition-all duration-300 mt-2"
      >
        Download CV ↗
      </motion.a>

      </div>
    </div>
  );
}
