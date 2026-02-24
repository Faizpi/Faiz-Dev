import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCloud,
} from "react-icons/fa";
import { useEffect, useState } from "react";


function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="mt-2 text-xs font-mono text-gray-700 dark:text-gray-400">
      <div>
        {time.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </div>
      <div>
        {time.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </div>
  );
}

export default function Intro() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const city = "Curug,Tangerang,ID";
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
        );

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Failed to fetch weather data");
        }

        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        setError(null);
      } catch (err) {
        console.error(err);
        setError("offline");
        setWeather(null);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000);
    return () => clearInterval(interval);
  }, [API_KEY]);

  return (
    <div className="flex items-start gap-4">

      <motion.img
        src={`${process.env.PUBLIC_URL}/Faiz.png`}
        alt="Faiz"
        className="w-24 h-24 rounded-full object-cover border border-gray-300 dark:border-gray-600 shadow-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />


      <div className="pt-[2px]">

        <h1 className="text-lg font-semibold leading-tight text-black dark:text-white">
          Muhammad Faiz Bintang Pratama
        </h1>


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


        <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
          <FaMapMarkerAlt size={14} />
          <span>Curug, Tangerang Regency, Banten, Indonesia</span>
        </div>


        {weather ? (
          <motion.div
            className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2"
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
              alt={weather.desc}
              className="w-4 h-4 opacity-80"
            />
            <span className="capitalize">
              {weather.desc}, {weather.temp}°C
            </span>
          </motion.div>
        ) : error === "offline" ? (
          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <FaCloud size={12} className="opacity-70" />
            <span>Offline — unable to load weather</span>
          </div>
        ) : (
          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            Loading weather...
          </div>
        )}


        <Clock />


        <div className="flex flex-wrap gap-2 mt-3">
          {[
            {
              href: "https://www.linkedin.com/in/faiz-pratama/",
              label: "Connect on LinkedIn ↗",
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
