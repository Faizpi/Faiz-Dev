import Reveal from "./Reveal";

function Experience() {
  return (
    <section className="space-y-8">
      <Reveal>
        <h2 className="text-sm font-bold text-white">Work Experience</h2>
      </Reveal>

      {/* Experience 1 (Sumi Indo Kabel) */}
      <Reveal delay={0.2}>
        <div className="flex gap-6 items-start">
          {/* Kolom Kiri */}
          <div className="flex flex-col items-center w-28 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/SIK.png`}
              alt="Sumi Indo Kabel Logo"
              className="w-10 h-10 mb-2 object-contain rounded-full"
            />
            <p className="text-xs text-gray-500 leading-relaxed mt-auto">
              Aug 2025 –<br />Present
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-3 flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                IT Department – Internship
              </h3>
              <p className="text-xs text-gray-500">
                PT Sumi Indo Kabel Tbk · Tangerang, Banten
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Assisted in daily IT operational tasks and troubleshooting.</li>
              <li>Helped maintain hardware, software, and network systems.</li>
              <li>Provided technical support for internal departments.</li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Experience 2 (Design Committee) */}
      <Reveal delay={0.4}>
        <div className="flex gap-6 items-start">
          {/* Kolom Kiri */}
          <div className="flex flex-col items-center w-28 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/HMIF.png`}
              alt="HMIF Logo"
              className="w-12 h-12 mb-2 object-contain"
            />
            <p className="text-xs text-gray-500 leading-relaxed mt-auto">
              Mar 2025 –<br />Present
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-3 flex-1">
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">
                Design Committee – Informatics Student Association
              </h3>
              <p className="text-xs text-gray-500">
                Sultan Ageng Tirtayasa University · Serang, Banten
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              <li>Produced digital content for internal and public organizational publications.</li>
              <li>Designed visuals for national holidays, campaigns, and tech-related educational content.</li>
              <li>Documented all organizational activities (photo/video), creating a digital archive.</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
