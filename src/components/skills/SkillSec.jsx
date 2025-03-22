import React, { useRef } from "react";

const SkillSec = ({ title, skillList }) => {
  const carouselRef = useRef(null);

  // Enable horizontal scroll by dragging
  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="max-w-[500px]  bg-gray-50 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h2 className="text-xl font-semibold mb-4 text-[#8b60f7]">{title}</h2>
      <div
        ref={carouselRef}
        onWheel={handleWheel}
        className="flex gap-4 overflow-x-auto scroll-smooth border-box"
      >
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="md:min-w-[100px]  bg-white p-4 rounded-xl shadow-md hover:shadow-xl mb-8 transition-shadow duration-300 group"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-2 text-center text-gray-700 font-medium group-hover:text-[#8b60f7]">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSec;
