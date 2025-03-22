import React from "react";
import { motion } from "framer-motion";

const NavBar = ({ homeRef, aboutRef, skillsRef, projectsRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = 0; // Adjust this value for proper alignment
      const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const buttonProps = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    transition: { type: "spring", stiffness: 400, damping: 20 },
    className: "hover:text-[#6126f6] cursor-pointer",
  };

  return (
    <div className="flex z-300 bg-opacity-100 bg-color-white fixed top-0 w-full justify-around py-3 pt-4 backdrop-blur-xs text-gray-800 text-l font-semibold z-200">
      <div className="w-1/3 flex justify-even text-[#6126f6] font-bold">
        Portfolio
      </div>

      <div className="flex justify-around w-1/2">
        <motion.button {...buttonProps} onClick={() => scrollToSection(homeRef)}>
          Home
        </motion.button>
        <motion.button {...buttonProps} onClick={() => scrollToSection(aboutRef)}>
          About
        </motion.button>
        <motion.button {...buttonProps} onClick={() => scrollToSection(skillsRef)}>
          Skills
        </motion.button>
        <motion.button {...buttonProps} onClick={() => scrollToSection(projectsRef)}>
          Projects
        </motion.button>
      </div>
    </div>
  );
};

export default NavBar;
