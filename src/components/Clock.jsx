import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update tiap detik
    return () => clearInterval(interval);
  }, []);

  // Format tanggal: 12 Sep 2025
  const formattedDate = time.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Format jam: 14:32:10
  const formattedTime = time.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="fixed top-4 left-4 z-50 px-3 py-1 rounded-lg bg-black/60 dark:bg-white/70 text-white dark:text-black text-xs sm:text-sm font-mono shadow-md space-y-0.5">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
    </div>
  );
}
