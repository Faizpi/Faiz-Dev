import Reveal from "./Reveal";

function About() {
  return (
    <section className="space-y-4">
      <Reveal>
        <h2 className="text-sm font-bold dark:text-white text-black">About</h2>
      </Reveal>
      
      {/* Cukup gunakan 'flex-row' agar selalu berdampingan */}
      <div className="flex flex-row items-center gap-6"> {/* Jarak (gap) bisa disesuaikan */}
        
        {/* Kolom Teks */}
        <div className="flex-1">
          <Reveal delay={0.2}>
            <p className="text-justify text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              Informatics student at Sultan Ageng Tirtayasa University (GPA: 3.87), a versatile developer passionate about both web and mobile development. Skilled in building interactive and user-friendly applications, with a strong drive to keep learning and adapting to new technologies. Dedicated to crafting impactful digital solutions that blend functionality, performance, and great user experience.  
            </p>
          </Reveal>
        </div>

        {/* Kolom Gambar */}
        <div className="flex-shrink-0">
          <Reveal delay={0.2}>
            <img
              src={`${process.env.PUBLIC_URL}/Faiz2.png`}
              alt="Foto Faiz"
              className="
                w-32 h-[200px] rounded-lg object-cover
                grayscale blur-sm
                hover:grayscale-0 hover:blur-0
                transition-all duration-300 ease-in-out
              "
            />
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}

export default About;