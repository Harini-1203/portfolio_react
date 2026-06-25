import React from 'react'
import { FaCloud, FaLightbulb, FaLaptopCode } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { useInView, fadeStyle, S } from '../components/needs';

const About = () => {
  const [ref, inView] = useInView(0.05);

  return (
    <div id="about" className='flex md:w-screen w-auto h-inherit md:p-0 px-10 md:p-10 justify-center md:justify-start'>

      {/* Profile image — hidden on mobile, shown md+ */}
      <div className='md:w-2/3 w-80 md:relative absolute md:left-0 lg:top-49 bottom-0 left-45 right-0 about-img-wrap'>
        <img src="/assets/po.png" alt="profile" />
      </div>

      <div className='lg:w-6/7 w-auto relative right-0 md:right-30 text-justify about-content'>

        <h2 className="md:text-2xl md:px-0 px-10 text-xl font-bold text-[#7C3AED] pb-5">
          <Typewriter
            words={['Passionate Developer', 'Tech Enthusiast']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={65}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h2>

        <h4 className='text-gray-500 md:text-lg text-xs md:px-0 px-10'>
          I'm a full-stack developer with a strong foundation in MERN stack, Python, and Java.
          I enjoy building efficient, user-friendly applications and solving real-world problems
          with technology. Passionate about innovation, I continuously learn and refine my skills
          to create impactful digital solutions.
        </h4>

        {/* Skill icons */}
        <div className='flex md:px-0 px-10 p-5 about-skills-row'>
          <div className="flex flex-col items-center border-r-1 pr-10 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaLaptopCode className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-sm text-gray-600 mt-2">MERN Stack</span>
          </div>
          <div className="flex flex-col items-center px-10 border-r-1 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaCloud className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-sm text-gray-600 mt-2">Java Full-Stack</span>
          </div>
          <div className="flex flex-col items-center px-10 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaLightbulb className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-sm text-gray-600 mt-2">Problem Solving</span>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 md:px-0 px-10">
          <h3 className="text-xl font-bold text-[#7C3AED] mb-4">Education</h3>

          <div className="relative pl-6 border-l-4 border-indigo-500">
            <motion.div
              className="absolute w-4 h-4 bg-indigo-500 rounded-full left-[-10px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            />
            <motion.p
              className="md:text-lg text-s font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              B.Tech (2022-2026)
            </motion.p>
            <motion.p
              className="text-gray-600 md:text-lg text-s"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Institute of Aeronautical Engineering
            </motion.p>
          </div>

          {/* Stats */}
          <div ref={ref} style={fadeStyle(inView, 340)}>
            <div style={{ display: "flex", gap: "32px", paddingTop: "24px", borderTop: "1px solid #f0eeff", flexWrap: "wrap" }}>
              {[["5+", "Projects Built"], ["8.5", "CGPA"], ["1", "Internship"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#7C3AED" }}>{val}</div>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Mobile-only overrides (≤ 767px) ── */
        @media (max-width: 767px) {
          #about {
            flex-direction: column !important;
            align-items: center !important;
            padding: 40px 16px !important;
            width: 100vw !important;
            box-sizing: border-box;
          }
          .about-img-wrap {
            position: relative !important;
            width: 160px !important;
            left: auto !important;
            bottom: auto !important;
            margin: 0 auto 24px auto !important;
            display: flex !important;
            justify-content: center !important;
          }
          .about-img-wrap img {
            width: 140px !important;
            height: 140px !important;
            object-fit: cover !important;
            border-radius: 50% !important;
          }
          .about-content {
            width: 100% !important;
            right: 0 !important;
            text-align: center !important;
            padding: 0 !important;
          }
          .about-content h4,
          .about-content h2 {
            padding-left: 0 !important;
            padding-right: 0 !important;
            font-size: 14px !important;
          }
          .about-skills-row {
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .about-skills-row > div {
            padding: 0 12px !important;
          }
        }

        /* ── Tablet (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          #about {
            padding: 40px 24px !important;
            width: 100vw !important;
            box-sizing: border-box;
          }
          .about-img-wrap {
            width: 220px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default About;
