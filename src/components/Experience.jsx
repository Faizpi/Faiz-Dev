import Reveal from "./Reveal";

function Experience() {
  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Work Experience</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="flex gap-6 items-start">
          {/* Kolom Kiri: Logo di atas, tahun di bawah */}
          <div className="flex flex-col items-center w-28 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/Faiz.png`}
              alt="HMIF Logo"
              className="w-12 h-12 mb-2 object-contain"
            />
            <p className="text-xs text-gray-500 leading-relaxed">
              Mar 2025 –<br />Present
            </p>
          </div>

          {/* Kolom Kanan: Konten */}
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                Design Committee – Informatics Student Association
              </h3>
              <p className="text-xs text-gray-500">
                Sultan Ageng Tirtayasa University · Serang, Banten
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>
                Produced digital content for internal and public organizational publications.
              </li>
              <li>
                Designed visuals for national holidays, campaigns, and tech-related educational content.
              </li>
              <li>
                Documented all organizational activities (photo/video), creating a digital archive.
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
