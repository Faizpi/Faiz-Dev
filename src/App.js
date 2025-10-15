import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
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
        {/* 🧠 Helmet SEO untuk seluruh halaman */}
        <Helmet>
          <title>Portfolio of Muhammad Faiz Bintang Pratama</title>
          <meta
            name="description"
            content="Faiz-Dev | Portfolio Website of Muhammad Faiz Bintang Pratama - Web, Mobile & UI/UX Developer showcasing creative digital projects and designs."
          />
          <link rel="canonical" href="https://faizpratama.me/" />

          {/* Open Graph */}
          <meta property="og:title" content="Faiz-Dev | Portfolio Website" />
          <meta
            property="og:description"
            content="Portfolio website of Muhammad Faiz Bintang Pratama showcasing projects in Web, Mobile, and UI/UX Design."
          />
          <meta property="og:url" content="https://faizpratama.me/" />
          <meta property="og:image" content="/Faiz.png" />
        </Helmet>

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
            <section id="Projects"><Carousel /></section>
            <section id="Skills"><Skills /></section>
            <section id="Links"><Links /></section>
          </div>
        </div>

        {/* Tombol scroll */}
        <ScrollButtons />

        {/* Navbar bawah */}
        <BottomNavbar />
      </div>
    </HelmetProvider>
  );
}
