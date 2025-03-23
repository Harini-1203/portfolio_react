import React, { useState } from "react";
import { FaGithub, FaHandPointUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const ProjectCard = ({ title, desc, images, techstack, github }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0.8, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer relative md:w-8/9  w-[280px] box-content max-h-79 pb-3 overflow-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={images[currentImage] || "https://via.placeholder.com/150"}
          alt={title}
          className="w-full h-40 object-cover"
        />
        {isHovered && images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-indigo-100 text-indigo-500 p-1 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <GrFormPreviousLink size={24} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-100 text-indigo-500 p-1 rounded-full hover:scale-110 transition-transform duration-300"
            >
              <GrFormNextLink size={24} />
            </button>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h1 className="text-xl font-bold text-indigo-600">{title}</h1>

        {/* Description Section */}
        <motion.div className={isHovered ? "hidden" : "block"}>
          <p className="text-gray-600 mt-2">{desc}</p>
        </motion.div>

        {/* Tech Stack & GitHub (Visible on Hover) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className={isHovered ? "block" : "hidden"}
        >
          <div className="mt-3 flex flex-wrap gap-2">
            {techstack.map((tech, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fixed FaHandPointUp Icon (Doesn't Disappear Immediately) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-2 right-2 text-indigo-500"
      >
        <FaHandPointUp size={15} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
