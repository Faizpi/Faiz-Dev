import React, { useEffect, useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Links from "./components/Links";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills";

import ScrollButtons from "./components/ScrollButtons";
import BottomNavbar from "./components/BottomNavbar";
import Cursor from "./components/Cursor";
import Projects, { PROJECTS } from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import ThemeToggle from "./components/ThemeToggle";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    const match = window.location.hash.match(/^#project-(\d+)$/);
    return match ? Number(match[1]) : null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const match = window.location.hash.match(/^#project-(\d+)$/);
      setSelectedProjectId(match ? Number(match[1]) : null);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const selectedProject = PROJECTS.find(({ id }) => id === selectedProjectId);

  return (
    <LanguageProvider>
      <div
        className="min-h-screen font-sans relative dark:bg-black dark:text-white bg-white text-black"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg dark:focus:bg-black dark:focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeToggle />
        <Cursor />

        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <>
            <main
              id="main-content"
              className="bg-black/70 dark:bg-black/70 bg-white/70 backdrop-blur-sm relative z-10"
            >
              <div className="max-w-md mx-auto space-y-20 px-4 py-12 pb-24">
                <section id="Intro" aria-label="Introduction"><Intro /></section>
                <section id="About" aria-label="About"><About /></section>
                <section id="Experience" aria-label="Experience"><Experience /></section>
                <section id="Projects" aria-label="Projects">
                  <Projects />
                </section>
                <section id="Skills" aria-label="Skills"><Skills /></section>
                <section id="Links" aria-label="Links"><Links /></section>
              </div>
            </main>
            <ScrollButtons />
            <BottomNavbar />
          </>
        )}
      </div>
    </LanguageProvider>
  );
}
