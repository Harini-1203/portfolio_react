import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "../components/needs";
import { projectsList } from "../components/needs";
import SmallCard from '../components/projects/SmallCard';

const Projects = () => {
  return (
    <div className='' id="projects">
      <motion.h1
        className="md:text-4xl text-2xl font-bold text-[#7C3AED] md:mt-5 mt-0 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      {/* Desktop: 3-col grid via Tailwind (lg:grid-cols-3 md:grid-cols-2) — kept exactly */}
      <div
        id="projects-grid"
        className="z-100 max:w-screen flex border-box grid grid-cols-1 md:grid-cols-2 text-sm lg:grid-cols-3 md:px-40 px-10 md:gap-20 gap-10 p-5 projects-grid"
      >
        {projectsList.map((project, index) => (
          <SmallCard
            project={project}
            index={index}
            key={project.id}
          />
        ))}
      </div>

      <style>{`
        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            gap: 20px !important;
          }
        }

        /* ── Tablet (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            gap: 24px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
