import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';
const pet = "/assets/pet.webp";
const chat = "/assets/chatbot.webp";
const emandi = "/assets/emandi.jpeg";
const mhc = "/assets/MHC.webp";
const w = "/assets/weather.webp";
const note = "/assets/NoteKeeper.webp";
const pet1 = "/assets/pet1.png";
const pet2 = "/assets/pet2.png";
const c1 = "/assets/c1.png";
const c2 = "/assets/c2.jpg";
const m1 = "/assets/m1.png";
const m2 = "/assets/m2.png";
const w1 = "/assets/w1.png";
const mh1 = "/assets/mh1.png";
const mh2 = "/assets/mh2.png";
import { motion } from "framer-motion";






const projectsList = [
  {
    title: "PetLink",
    img: [pet,pet1,pet2],
    desc: "PetLink connects pets with loving homes by enabling users to adopt, sell, or buy pets, promoting responsible ownership through a secure online platform.",
    techstack: ["ReactJS", "ExpressJs", "MongoDB"],
    github: "https://github.com/yourusername/petlink"
  },
  {
    title: "CodeIt-Chatbot",
    img: [chat,c1,c2],
    desc: "The CodeIt Chatbot provides instant, tailored code snippets for web development, enhancing efficiency and streamlining the coding process.",
    techstack: ["ReactJS", "NLTK"],
    github: "https://github.com/yourusername/codeit-chatbot"
  },
  {
    title: "E-mandi",
    img: [emandi,m1,m2],
    desc: "E-MANDI is an online platform promoting transparent vegetable trading, connecting buyers and sellers to ensure fair pricing and combat inflation.",
    techstack: ["ReactJS", "ExpressJs", "MongoDB"],
    github: "https://github.com/yourusername/e-mandi"
  },
  {
    title: "Mental Health Chatbot",
    img: [mhc,mh1,mh2],
    desc: "A chatbot offering initial mental health support via AI and connecting users to expert therapists.",
    techstack: ["ReactJS", "Streamlit", "Gemini-API Integration"],
    github: "https://github.com/yourusername/mental-health-chatbot"
  },
  {
    title: "Weather Forecast",
    img: [w,w1],
    desc: "A project that retrieves and displays real-time weather forecasts by city using an external API.",
    techstack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/weather-forecast"
  },
  {
    title: "NoteKeeper",
    img: [note],
    desc: "Allows users to create, edit, organize, and manage personal notes efficiently.",
    techstack: ["ReactJS"],
    github: "https://github.com/yourusername/notekeeper"
  }
];

const Projects = () => {

  return (
    <div className='z-200'>
    <motion.h1
        className="z-700 text-2xl font-bold text-[#8b60f7] mt-5 mb-10 text-center"
        // initial={{ opacity: 0, y:-20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ amount: 0.5 }}
        // transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
    <div id="projects" className="z-100 max:w-screen flex border-box grid grid-cols-1 md:grid-cols-2 text-sm lg:grid-cols-3 md:px-40 px-10 gap-20 p-5">
      {projectsList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          desc={project.desc}
          images={project.img}
          techstack={project.techstack}
          github={project.github}
        />
      ))}
    </div>
    </div>
  );
};

export default Projects;
