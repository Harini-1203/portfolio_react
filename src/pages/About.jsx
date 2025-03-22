import React from 'react'
import { FaCloud, FaLightbulb,FaCode, FaCodeBranch, FaConnectdevelop, FaLaptopCode } from 'react-icons/fa';
import { Fa0 } from 'react-icons/fa6';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";



const About = () => {
  return (
    // <></>

    <div  className='flex w-screen w-screen h-inherit justify-start'>
      <div className='lg:w-2/3 sm:w-3/4 relative lg:top-49 sm:top-50 sm:mr-5 '>
        <img src="/assets/po.png" alt="profile"  ></img>/
      </div>

      <div className='lg:w-6/7 sm:w-1/2 relative right-30 text-justify pd-10'>
      <div className=''>
      <h2 className="text-2xl font-bold text-[#8b60f7] pb-5 mt-10">
      <Typewriter
        words={['Passionate Developer', 'Tech Enthusiast']}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={65}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </h2>        <h4>I'm a full-stack developer with a strong foundation in MERN stack, Python, and Java. I enjoy building efficient, user-friendly applications and solving real-world problems with technology. Passionate about innovation, I continuously learn and refine my skills to create impactful digital solutions.</h4>
        <div className='flex  p-5'>
        <div className="flex flex-col items-center border-r-1 pr-10 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaLaptopCode className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-sm text-gray-600 mt-2">MERN Stack</span>
        </div>
        <div className="flex flex-col items-center px-10 border-r-1 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaCloud className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110"/>
            <span className="text-sm text-gray-600 mt-2">Cloud & DevOps</span>
          </div>
          
          <div className="flex flex-col items-center px-10 transition-transform duration-300 hover:scale-102 cursor-pointer">
            <FaLightbulb className="text-3xl text-indigo-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-sm text-gray-600 mt-2">Problem Solving</span>
          </div>  
        </div>

        <div className="mt-10">
      {/* Heading slides in from bottom */}
      <h3
        className="text-xl font-bold text-[#8b60f7] mb-4"
      >
        Education
      </h3>

      <div className="relative pl-6 border-l-4 border-indigo-500">
        {/* Dot fades in */}
        <motion.div
          className="absolute w-4 h-4 bg-indigo-500 rounded-full left-[-10px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        {/* Degree info fades in */}
        <motion.p
          className="text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          B.Tech (2022-2026)

        </motion.p>


        {/* College name fades in */}
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Institute of Aeronautical Engineering
        </motion.p>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          CGPA-8.7
        </motion.p>
      </div>
    </div>
  
        
        </div>
        
      </div>
      
    </div>
  )
}

export default About;