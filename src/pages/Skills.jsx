import React from "react";
import { motion } from "framer-motion";
import SkillSec from "../components/skills/SkillSec";
import { useRef, useState, useEffect } from 'react';
import { fadeStyle, useInView, S } from "../components/needs";

const html    = "/assets/html.png";
const css     = "/assets/css.png";
const js      = "/assets/js.png";
const tail    = "/assets/tailwind-css.svg";
const java    = "/assets/java.png";
const express = "/assets/express.png";
const mongo   = "/assets/mongo.svg";
const python  = "/assets/python.png";
const react   = "/assets/react.svg";
const mysql   = "/assets/mysql.png";
const git     = "/assets/git.png";
const github  = "/assets/hithub.png";

const languages = [
  { name: "Java",       icon: java   },
  { name: "Python",     icon: python },
  { name: "HTML",       icon: html   },
  { name: "CSS",        icon: css    },
  { name: "JavaScript", icon: js     },
];

const LibFrame = [
  { name: "React",      icon: react   },
  { name: "Express.js", icon: express },
  { name: "MongoDB",    icon: mongo   },
  { name: "Tailwind",   icon: tail    },
];

const databases = [
  { name: "MySQL",   icon: mysql },
  { name: "MongoDB", icon: mongo },
];

const version = [
  { name: "Git",    icon: git    },
  { name: "GitHub", icon: github },
];

const Skills = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <div ref={ref} id="skills" className="z-200 w-full flex flex-col items-center justify-center">

      {/* Section heading — original */}
      <div style={{ textAlign: "center" }}
        className="md:mb-20 mb-5 skills-heading"
      >
        <div style={{ ...fadeStyle(inView, 0), display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={S.eyebrow}>What I work with</span>
          <h2 style={{ ...S.h2, textAlign: "center" }}>
            Skills & <span style={{ color: "#7C3AED" }}>Expertise</span>
          </h2>
          <p style={{ ...S.sub, textAlign: "center" }}>
            A blend of frontend craft, backend logic, and strong CS fundamentals.
          </p>
        </div>
      </div>

      {/* Desktop: 2-col grid — original md:grid-cols-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-30 gap-0 skills-grid">
        <div
          className="space-y-10"
          style={{ ...fadeStyle(inView, 0), display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <SkillSec title="Languages & Tools" skillList={languages} />
          <SkillSec title="Databases"          skillList={databases} />
        </div>

        <div
          className="space-y-10"
          style={{ ...fadeStyle(inView, 1), display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <SkillSec title="Libraries & Frameworks" skillList={LibFrame} />
          <SkillSec title="Version Control"        skillList={version} />
        </div>
      </div>

      <style>{`
        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          #skills {
            padding: 40px 16px !important;
          }
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            width: 100% !important;
          }
          #skills h2 {
            font-size: clamp(24px, 7vw, 36px) !important;
          }
        }

        /* ── Tablet (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .skills-grid {
            gap: 20px !important;
            padding: 0 24px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Skills;
