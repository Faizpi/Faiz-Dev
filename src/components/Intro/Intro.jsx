import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaMapMarkerAlt } from "react-icons/fa";
import Clock from "./Clock";
import WeatherInfo from "./WeatherInfo";
import SocialButtons from "./SocialButtons";

export default function Intro() {
  return (
    <div className="flex items-start gap-4">
    <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 
                    border border-neutral-500/40 shadow-md bg-neutral-200/10">
    <motion.img
        src={`${process.env.PUBLIC_URL}/Faiz.png`}
        alt="Faiz"
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
    />
    </div>

      {/* Info Section */}
      <div className="pt-[2px]">
        {/* Nama */}
        <h1 className="text-lg font-semibold leading-tight text-black dark:text-white">
          Muhammad Faiz Bintang Pratama
        </h1>

        {/* ✅ Typewriter fix (cursorStyle gak aneh) */}
        <p className="text-sm mt-1 leading-tight text-gray-700 dark:text-gray-400">
          <Typewriter
            words={["UI/UX Designer", "Web Developer", "Mobile Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Lokasi */}
        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <FaMapMarkerAlt size={14} />
          <span>Curug, Tangerang Regency, Banten, Indonesia</span>
        </div>

        {/* Cuaca, Jam, Sosmed */}
        <WeatherInfo />
        <Clock />
        <SocialButtons />
      </div>
    </div>
  );
}
