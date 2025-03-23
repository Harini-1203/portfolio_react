import React from 'react'
import { motion } from 'framer-motion';

const HomeText = () => {
  return (
    <div className='flex flex-col justify-center md:w-auto w-2/5 lg:pr-50 sm:pr-5 '>
    
      <p class='md:text-4xl text-2xl'>Hello I'm</p>
      <p class='md:text-8xl text-5xl font-bold text-[#8b60f7]'>Harini</p>
      <motion.p 
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='md:text-4xl sm:text-xl font-mono '>-Web Developer</motion.p>
      <div className='w-full flex md:justify-center sm:justify-start items-center'>
        <button className='cursor-pointer border-2 md:w-25 w-20 rounded-lg shadow-2xl bg-[#8b60f7] text-white p-2 md:mt-10 mt-3 hover:bg-[#6b46c1] hover:shadow-xl'>
          <a href='/resume.pdf' download='Harini_Resume.pdf' className='block w-full h-full text-center'>
            Resume
          </a>
        </button>
      </div>
    </div>
  )
}

export default HomeText;
