import React from "react";

import { useRef } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];


function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const sections = NAV_LINKS.map((n) => ({ name: n, el: document.getElementById(n.toLowerCase()) }));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveNav(NAV_LINKS.find((n) => n.toLowerCase() === e.target.id) || "Home");
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(({ el }) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Function to handle smooth scrolling
  return (
    <div className="bg-white max-w-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {/* 🔹 Home Section */}
      <NavBar active={activeNav} setActive={setActiveNav} />
      <div ref={homeRef} className="relative md:h-[calc(100vh)] h-auto  ">
  <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_110%_200px,#d5c5ff,transparent)] z-0"></div>
  <Hero />
</div>

<div ref={aboutRef} className="relative box-border  md:h-screen h-auto w-screen flex items-start justify-center md:pt-20  pt-0">
  <div className="absolute flex bottom-0 left-0 right-100 top-0 bg-[radial-gradient(circle_150px_at_10%_200px,#d5c5ff,transparent)]"></div>
  <About />
</div>

<div ref={skillsRef} className="relative md:h-[calc(110vh)] flex items-start  justify-start border-box lg:pl-40 sm:p-15 pt-20 z-0">
  <div className="absolute inset-0 bg-[radial-gradient(circle_100px_at_90%_85px,#d5c5ff,transparent)]"></div>
  <Skills />
</div>

<div ref={projectsRef} className="relative min-h-screen flex items-center justify-center pt-20">
  <div className="relative bottom-0 left-0 right-0 top-20 bg-[radial-gradient(circle_800px_at_0%_200px,#d5c5ff,transparent)]"></div>
  <Projects />
</div>

<div ref={contactRef} className="relative min-h-screen flex items-center justify-center pt-20">
  <Contact />
</div>



    </div>
  );
}

export default App;
