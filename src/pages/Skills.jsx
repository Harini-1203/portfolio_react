import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import SkillSec from "../components/skills/SkillSec";

const html = "/assets/html.png";
const css = "/assets/css.png";
const js = "/assets/js.png";
const tail = "/assets/tailwind-css.svg";
const java = "/assets/java.png";
const express = "/assets/express.png";
const mongo = "/assets/mongo.svg";
const python = "/assets/python.png";
const react = "/assets/react.svg";
const mysql = "/assets/mysql.png";
const git = "/assets/git.png";
const github = "/assets/hithub.png";

const languages = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js }
];

const LibFrame = [
  { name: "React", icon: react },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongo },
  { name: "Tailwind", icon: tail }
];

const databases = [
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongo }
];

const version = [
  { name: "Git", icon: git },
  { name: "GitHub", icon: github }
];

const Skills = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="z-200 w-full flex flex-col items-center justify-center">
      <motion.h1
        className="text-2xl font-bold text-[#8b60f7] mt-5 mb-10 text-center"
        initial={{ opacity: 0, y: isMobile ? 0 : -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30">
        <motion.div
          className="space-y-10"
          initial={{ opacity: isMobile ? 1 : 0.5, x: isMobile ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.7 }}
          transition={{ duration: 0.8 }}
        >
          <SkillSec title="Frontend" skillList={languages} />
          <SkillSec title="Databases" skillList={databases} />
        </motion.div>

        <motion.div
          className="space-y-10"
          initial={{ opacity: isMobile ? 1 : 0.5, x: isMobile ? 0 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.7 }}
          transition={{ duration: 0.8 }}
        >
          <SkillSec title="Libraries & Frameworks" skillList={LibFrame} />
          <SkillSec title="Version Control" skillList={version} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
