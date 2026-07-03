import { useState } from "react";
import Reveal from "./Reveal";
import { GraduationCap, Users, Briefcase, Award } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import translations from "../context/translations";

export default function Experience() {
  const { lang } = useLang();
  const t = translations[lang].experience;

  const tabs = [
    {
      name: "Work Experience",
      label: t.tabWorkExperience,
      icon: <Briefcase size={20} />,
      tabId: "experience-work-tab",
      panelId: "experience-work-panel",
    },
    {
      name: "Education",
      label: t.tabEducation,
      icon: <GraduationCap size={20} />,
      tabId: "experience-education-tab",
      panelId: "experience-education-panel",
    },
    {
      name: "Organizations",
      label: t.tabOrganizations,
      icon: <Users size={20} />,
      tabId: "experience-organizations-tab",
      panelId: "experience-organizations-panel",
    },
    {
      name: "Awards",
      label: t.tabAwards,
      icon: <Award size={20} />,
      tabId: "experience-awards-tab",
      panelId: "experience-awards-panel",
    },
  ];

  const [activeTab, setActiveTab] = useState("Work Experience");

  const certifications = [
    {
      year: "May 2026",
      logo: `${process.env.PUBLIC_URL}/idccamp.png`,
      institution: "AI Multi-platform App Developer Expert",
      subtitle: "IDCamp Indosat Ooredoo Hutchison",
      skills: ["Flutter", "AI", "Multi-platform"],
    },
    {
      year: "May 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Back-End Pemula dengan JavaScript",
      subtitle: "Dicoding Indonesia",
      skills: ["Back-End Web Development"],
    },
    {
      year: "Apr 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Fundamental Aplikasi Web dengan React",
      subtitle: "Dicoding Indonesia",
      skills: ["Web Application Development", "React.js"],
    },
    {
      year: "Apr 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Membuat Aplikasi Web dengan React",
      subtitle: "Dicoding Indonesia",
      skills: ["React.js"],
    },
    {
      year: "Apr 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Membuat Front-End Web untuk Pemula",
      subtitle: "Dicoding Indonesia",
      skills: ["Front-End Development"],
    },
    {
      year: "Mar 2026",
      logo: `${process.env.PUBLIC_URL}/idccamp.png`,
      institution: "AI Multi-platform App Developer Intermediate",
      subtitle: "IDCamp Indosat Ooredoo Hutchison",
      skills: ["Flutter", "AI", "Multi-platform"],
    },
    {
      year: "Mar 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Dasar Pemrograman JavaScript",
      subtitle: "Dicoding Indonesia",
      skills: ["JavaScript"],
    },
    {
      year: "Feb 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Dasar Pemrograman Web",
      subtitle: "Dicoding Indonesia",
      skills: ["Web Development"],
    },
    {
      year: "Feb 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Dasar Cloud dan Gen AI di AWS",
      subtitle: "Dicoding Indonesia",
      skills: ["Generative AI", "Cloud Computing"],
    },
    {
      year: "Feb 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      subtitle: "Dicoding Indonesia",
      skills: ["Logic Programming"],
    },
    {
      year: "Feb 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      subtitle: "Dicoding Indonesia",
      skills: ["Software Engineers"],
    },
    {
      year: "Feb 2026",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Fundamental Aplikasi Flutter",
      subtitle: "Dicoding Indonesia",
      skills: ["Flutter", "Mobile Application Development"],
    },
    {
      year: "Oct 2025",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Membuat Aplikasi Flutter untuk Pemula",
      subtitle: "Dicoding Indonesia",
      skills: ["Flutter", "Responsive"],
    },
    {
      year: "Sep 2025",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Belajar Dasar AI",
      subtitle: "Dicoding Indonesia",
      skills: ["Machine Learning", "Deep Learning"],
    },
    {
      year: "Sep 2025",
      logo: `${process.env.PUBLIC_URL}/dicoding.png`,
      institution: "Memulai Pemrograman dengan Dart",
      subtitle: "Dicoding Indonesia",
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
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">

      <div className="flex md:flex-col gap-4 md:w-10" role="tablist" aria-label="Experience sections">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            id={tab.tabId}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.name}
            aria-controls={tab.panelId}
            aria-label={tab.label}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center p-2 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-black ${activeTab === tab.name
              ? "bg-white/10 dark:text-white text-black"
              : "dark:text-gray-400 text-gray-700 hover:dark:text-white hover:text-black hover:bg-white/5"
              }`}
            title={tab.label}
          >
            {tab.icon}
          </button>
        ))}
      </div>


      <div className="flex-1 min-h-[200px]">

        {/* ── WORK EXPERIENCE ── */}
        {activeTab === "Work Experience" && (
          <section
            id="experience-work-panel"
            role="tabpanel"
            aria-labelledby="experience-work-tab"
            className="space-y-8"
          >
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">{t.sectionWorkExperience}</h2>
            </Reveal>
            {t.work.map((item, i) => (
              <Reveal key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-28 text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/${item.logo}`}
                      alt={item.alt}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 mb-2 object-contain rounded-full bg-white p-1"
                    />
                    <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                      {item.period}
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold dark:text-white text-black">
                        {item.title}
                      </h3>
                      <p className="text-xs dark:text-gray-400 text-gray-700">
                        {item.company}
                      </p>
                    </div>
                    {item.bullets.length > 0 && (
                      <ul className="list-disc list-outside text-sm dark:text-gray-400 text-gray-700 space-y-1 pl-4">
                        {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] rounded-full dark:bg-white/10 bg-black/10 dark:text-gray-300 text-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </section>
        )}

        {/* ── EDUCATION ── */}
        {activeTab === "Education" && (
          <section
            id="experience-education-panel"
            role="tabpanel"
            aria-labelledby="experience-education-tab"
            className="space-y-8"
          >
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">{t.sectionEducation}</h2>
            </Reveal>
            {t.education.map((item, i) => (
              <Reveal key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-28 text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/${item.logo}`}
                      alt={item.alt}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 mb-2 object-contain rounded-full bg-white p-1"
                    />
                    <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                      {item.period}
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold dark:text-white text-black">
                        {item.title}
                      </h3>
                      <p className="text-xs dark:text-gray-400 text-gray-700">
                        {item.institution}
                      </p>
                    </div>
                    {item.bullets.length > 0 && (
                      <ul className="list-disc list-outside text-sm dark:text-gray-400 text-gray-700 space-y-1 pl-4">
                        {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </section>
        )}

        {/* ── ORGANIZATIONS ── */}
        {activeTab === "Organizations" && (
          <section
            id="experience-organizations-panel"
            role="tabpanel"
            aria-labelledby="experience-organizations-tab"
            className="space-y-8"
          >
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">{t.sectionOrganizations}</h2>
            </Reveal>
            {t.organizations.map((item, i) => (
              <Reveal key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-28 text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/${item.logo}`}
                      alt={item.alt}
                      width="48"
                      height="48"
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 mb-2 object-contain rounded-full"
                    />
                    <p className="text-xs dark:text-gray-400 text-gray-700 leading-relaxed mt-auto">
                      {item.period}
                    </p>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold dark:text-white text-black">
                        {item.title}
                      </h3>
                      <p className="text-xs dark:text-gray-400 text-gray-700">
                        {item.institution}
                      </p>
                    </div>
                    {item.bullets.length > 0 && (
                      <ul className="list-disc list-outside text-sm dark:text-gray-400 text-gray-700 space-y-1 pl-4">
                        {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </section>
        )}

        {/* ── AWARDS / CERTIFICATIONS ── */}
        {activeTab === "Awards" && (
          <section
            id="experience-awards-panel"
            role="tabpanel"
            aria-labelledby="experience-awards-tab"
            className="space-y-8"
          >
            <Reveal>
              <h2 className="text-sm font-bold dark:text-white text-black">{t.sectionCertifications}</h2>
            </Reveal>
            {certifications.map((item, i) => (
              <Reveal delay={i * 0.1} key={i}>
                <div className="flex gap-6 items-start">
                  <div className="flex flex-col items-center w-28 text-center">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      width="40"
                      height="40"
                      loading="lazy"
                      decoding="async"
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
