import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Links from "./components/Links";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import GitHubStats from "./components/GitHubStats";
import ScrollButtons from "./components/ScrollButtons";
import BottomNavbar from "./components/BottomNavbar";
import Cursor from "./components/Cursor";
import Carousel from "./components/Carousel";
import ThemeToggle from "./components/ThemeToggle"; 

export default function App() {
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
      {/* Tombol toggle tema */}
      <ThemeToggle />

      {/* Custom Cursor */}
      <Cursor />

      {/* Overlay */}
      <div className="bg-black/70 dark:bg-black/70 bg-white/70 backdrop-blur-sm relative z-10">
        <div className="max-w-md mx-auto px-4 py-12 space-y-20 pb-24">
          <section id="Intro"><Intro /></section>
          <section id="About"><About /></section>
          <section id="GitHubStats"><GitHubStats /></section>
          <section id="Experience"><Experience /></section>

          <section id="Projects">
            <Carousel />
          </section>

          <section id="Skills"><Skills /></section>
          <section id="Links"><Links /></section>
        </div>
      </div>

      {/* Tombol scroll */}
      <ScrollButtons />

      {/* Navbar bawah */}
      <BottomNavbar />
    </div>
  );
}
