import { useState } from "react";
import Reveal from "./Reveal";
import { GraduationCap, Users, Briefcase, Mic, Award } from "lucide-react";

export default function Experience() {
  const tabs = [
    { name: "Work Experience", icon: <Briefcase size={20} /> },
    { name: "Education", icon: <GraduationCap size={20} /> },
    { name: "Organizations", icon: <Users size={20} /> },
    { name: "Speaker", icon: <Mic size={20} /> },
    { name: "Awards", icon: <Award size={20} /> },
  ];
  const [activeTab, setActiveTab] = useState("Work Experience");

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="flex md:flex-col gap-4 md:w-10">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
              activeTab === tab.name
                ? "bg-white/10 dark:text-white text-black"
                : "dark:text-gray-400 text-gray-700 hover:dark:text-white hover:text-black hover:bg-white/5"
            }`}
            title={tab.name}
          >
            {tab.icon}
          </button>
        ))}
      </div>

      {/* Konten */}
      <div className="flex-1 min-h-[200px]">
        {/* Education */}
        {activeTab === "Education" && (
          <section className="space-y-8">
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">Education</h2>
            </Reveal>
            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center w-28 text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/Untirta.png`}
                    alt="Untirta"
                    className="w-10 h-10 mb-2 object-contain rounded-full bg-white p-1"
                  />
                  <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                    2023 –<br />Present
                  </p>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold dark:text-white text-black">
                      S1 Informatika
                    </h3>
                    <p className="text-xs dark:text-gray-400 text-gray-700">
                      Universitas Sultan Ageng Tirtayasa · Cilegon, Banten
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-justify dark:text-gray-400 text-gray-700 space-y-1">
                    <li>GPA 3.87 / 4.00</li>
                    <li>Focused on Software Engineering and Web Development</li>
                    <li>Active in organizational activities and projects</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* Organizations */}
        {activeTab === "Organizations" && (
          <section className="space-y-8">
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">Organizations</h2>
            </Reveal>
            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center w-28 text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/HMIF.png`}
                    alt="HMIF Logo"
                    className="w-12 h-12 mb-2 object-contain"
                  />
                  <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                    Mar 2025 –<br />Present
                  </p>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold dark:text-white text-black">
                      Communications and Information Department – Informatics Student Association
                    </h3>
                    <p className="text-xs dark:text-gray-400 text-gray-700">
                      Sultan Ageng Tirtayasa University · Cilegon, Banten
                    </p>
                  </div>
                    <ul className="list-disc list-outside text-sm dark:text-gray-400 text-gray-700 space-y-1 pl-4">
                      <li>Produced digital content for internal and public organizational publications.</li>
                      <li>Designed visuals for national holidays, campaigns, and tech-related educational content.</li>
                      <li>Documented all organizational activities (photo/video), creating a digital archive.</li>
                    </ul>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* Work Experience */}
        {activeTab === "Work Experience" && (
          <section className="space-y-8">
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">Work Experience</h2>
            </Reveal>
            <Reveal>
              <div className="flex gap-6 items-start">
                <div className="flex flex-col items-center w-28 text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/SIK.png`}
                    alt="Sumi Indo Kabel Logo"
                    className="w-10 h-10 mb-2 object-contain rounded-full"
                  />
                  <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                    Aug 2025 –<br />Present
                  </p>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold dark:text-white text-black">
                      IT Department – Internship
                    </h3>
                    <p className="text-xs dark:text-gray-400 text-gray-700">
                      PT Sumi Indo Kabel Tbk · Tangerang, Banten
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-justify dark:text-gray-400 text-gray-700 space-y-1">
                    <p>Developed Website System STB Label for Automobile Cable Plant 1 using Laravel.</p>
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* Speaker */}
        {activeTab === "Speaker" && (
          <Reveal>
            <p className="dark:text-gray-400 text-gray-700">Belum ada data speaker.</p>
          </Reveal>
        )}

        {/* Awards */}
        {activeTab === "Awards" && (
          <section className="space-y-8">
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">Certifications & Trainings</h2>
            </Reveal>
            {[
              {
                year: "Februari 2025",
                logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
                institution: "AWS",
                degree: "Fundamentals of Analytics on AWS",
                desc: "Data lakes, data analytics, and AWS analytics services.",
              },
              {
                year: "Januari 2025",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "Udemy",
                degree: "The Complete 2024 Web Development Bootcamp",
                desc: "HTML, CSS, JS, Node.js, MongoDB, Express.js, React.js, APIs, deployment.",
              },
              {
                year: "Januari 2025",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "Udemy",
                degree: "Front-End Web Developer Bootcamp",
                desc: "Frontend mastery using modern tools and best practices.",
              },
              {
                year: "Desember 2024",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "Udemy",
                degree: "Basics of Database Design & Development",
                desc: "Relational databases, ERD, normalization, SQL.",
              },
            ].map((item, i) => (
              <Reveal delay={i * 0.2} key={i}>
                <div className="grid grid-cols-12 gap-4 items-start py-2">
                  <div className="col-span-2 text-xs dark:text-gray-400 text-gray-700 pt-2">
                    {item.year}
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-10 h-10 object-contain rounded-full bg-white p-1"
                    />
                  </div>
                  <div className="col-span-8 space-y-1">
                    <h3 className="text-sm font-semibold dark:text-white text-black">
                      {item.institution}
                    </h3>
                    <p className="text-xs dark:text-gray-400 text-gray-700">{item.degree}</p>
                    <p className="text-xs dark:text-gray-400 text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
