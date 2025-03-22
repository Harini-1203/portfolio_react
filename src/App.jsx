import React from "react";

import { useRef } from "react";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to handle smooth scrolling
  

  return (
    <div className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {/* 🔹 Home Section */}
      <NavBar 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        skillsRef={skillsRef} 
        projectsRef={projectsRef} 
      />
      <div ref={homeRef} className="relative h-[calc(100vh-63px)] ">
  <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_110%_200px,#d5c5ff,transparent)] z-0"></div>
  <Home />
</div>

<div ref={aboutRef} className="relative box-border  h-screen w-screen flex items-start justify-center pt-20">
  <div className="absolute flex bottom-0 left-0 right-100 top-0 bg-[radial-gradient(circle_150px_at_10%_200px,#d5c5ff,transparent)]"></div>
  <About />
</div>

<div ref={skillsRef} className="relative md:h-[calc(110vh)] flex items-start  justify-start border-box lg:pl-40 sm:p-15 pt-20 z-0">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_0%_10px,#d5c5ff,transparent)]"></div>
  <Skills />
</div>

<div ref={projectsRef} className="relative min-h-screen flex items-center justify-center pt-20">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_200px,#d5c5ff,transparent)]"></div>
  <Projects />
</div>

    </div>
  );
}

export default App;
