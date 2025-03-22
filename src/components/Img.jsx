import React from 'react';

import { motion } from "framer-motion";


const Img = () => {
  return (
    <motion.div 
      whileHover={{scale:1.03}}

      className="relative md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] flex justify-center items-center ">
      {/* Background Shape */}
      <img 
        src="/assets/image.png"
        alt="Background Shape"
        className="absolute w-full h-full object-cover rotate-180 drop-shadow-lg animate-pulse"
      />

      {/* Profile Image (on top of shape) */}
      <img
        src="/assets/p.png"
        alt="Harini"
        className="relative z-10 bottom-25 "
      />
    </motion.div>
  );
};

export default Img;
