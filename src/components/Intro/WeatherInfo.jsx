import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";

export default function WeatherInfo() {
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

        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        setError(null);
      } catch {
        setError("offline");
        setWeather(null);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000);
    return () => clearInterval(interval);
  }, [API_KEY]);

  if (weather) {
    return (
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
    );
  }

  if (error === "offline") {
    return (
      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
        <FaCloud size={12} className="opacity-70" />
        <span>Offline — unable to load weather</span>
      </div>
    );
  }

  return (
    <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
      Loading weather...
    </div>
  );
}
