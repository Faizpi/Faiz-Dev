import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Experience from "./components/Experience";
import Links from "./components/Links";
import Intro from "./components/Intro/Intro"; 
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import ScrollButtons from "./components/ScrollButtons";
import BottomNavbar from "./components/BottomNavbar";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ThemeToggle from "./components/ThemeToggle"; 

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
    window.scrollTo(0, 0);
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
  };

  return (
    <div
      className="min-h-screen font-sans relative dark:bg-black dark:text-white bg-white text-black"
      style={{
        backgroundImage: "url('/background.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "none",
      }}
    >
      <ThemeToggle />
      <Cursor />

      <div className="bg-black/70 dark:bg-black/70 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="max-w-md mx-auto px-4 py-12 space-y-20 pb-24">
          <AnimatePresence mode="wait">
            {selectedProjectId ? (
              <ProjectDetailPage 
                key="project-detail"
                projectId={selectedProjectId} 
                onBack={handleBackToProjects} 
              />
            ) : (
              <>
                <section id="Intro"><Intro /></section>
                <section id="About"><About /></section>
                <section id="GitHubStats"><GitHubStats /></section>
                <section id="Experience"><Experience /></section>
                <section id="Projects">
                  <Projects onProjectClick={handleProjectClick} />
                </section>
                <section id="Skills"><Skills /></section>
                <section id="Links"><Links /></section>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ScrollButtons />
      <BottomNavbar />
    </div>
  );
}
