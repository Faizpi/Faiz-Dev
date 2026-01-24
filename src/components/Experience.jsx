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
                  <ul className="list-disc list-outside text-sm dark:text-gray-400 text-gray-700 space-y-1 pl-4">
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
                    className="w-12 h-12 mb-2 object-contain rounded-full"
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
                year: "Oct 2025",
                logo: `${process.env.PUBLIC_URL}/dicoding.png`,
                institution: "Belajar Membuat Aplikasi Flutter untuk Pemula",
                subtitle: "Dicoding Academy",
                skills: ["Flutter", "Responsive"],
              },
              {
                year: "Sep 2025",
                logo: `${process.env.PUBLIC_URL}/dicoding.png`,
                institution: "Belajar Dasar AI",
                subtitle: "Dicoding Academy",
                skills: ["Machine Learning", "Deep Learning"],
              },
              {
                year: "Sep 2025",
                logo: `${process.env.PUBLIC_URL}/dicoding.png`,
                institution: "Memulai Pemrograman dengan Dart",
                subtitle: "Dicoding Academy",
                skills: ["Dart", "Object-Oriented Programming (OOP)"],
              },
              {
                year: "Feb 2025",
                logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
                institution: "Fundamentals of Analytics on AWS",
                subtitle: "Amazon Web Services (AWS)",
                skills: ["Data Lakes", "Data Analytics", "AWS Services"],
              },
              {
                year: "Jan 2025",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "The Complete 2024 Web Development Bootcamp",
                subtitle: "Udemy",
                skills: ["HTML", "CSS", "JavaScript", "Node.js", "React.js"],
              },
              {
                year: "Jan 2025",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "Front-End Web Developer Bootcamp",
                subtitle: "Udemy",
                skills: ["Frontend Development", "Modern Tools", "Best Practices"],
              },
              {
                year: "Dec 2024",
                logo: `${process.env.PUBLIC_URL}/Udemy.png`,
                institution: "Basics of Database Design & Development",
                subtitle: "Udemy",
                skills: ["Database", "ERD", "Normalization", "SQL"],
              },
            ].map((item, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-28 text-center">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-10 h-10 mb-2 object-contain rounded-full bg-white p-1"
                    />
                    <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                      {item.year}
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold dark:text-white text-black">
                        {item.institution}
                      </h3>
                      <p className="text-xs dark:text-gray-400 text-gray-700">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[10px] rounded-full dark:bg-white/10 bg-black/10 dark:text-gray-300 text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
