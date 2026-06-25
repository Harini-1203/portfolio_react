import React, { useRef } from "react";
import { fadeStyle, S,useInView } from "../needs";

const SkillSec = ({ title, skillList }) => {
  const carouselRef = useRef(null);

  // Enable horizontal scroll by dragging
  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  const [ref, inView] = useInView(0.05);

  return (
    <div ref={ref} style={{
              ...S.card,
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              ...fadeStyle(inView,80),
            }} className="md:w-[500px] min-w-[300px] md:mx-0  mx-5  border-[#8b60f7] z-50  border-1 rounded-xl md:py-5 py-0 md:px-5 px-3 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#7C3AED", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "5px" }}
          className="md:text-lg text-sm font-bold text-[#8b60f7] mb-4  pb-2"
      >
                {title}
          
      </h3>
      <div
        className="flex md:gap-4 gap-0 border-box"
      >
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="md:min-w-[80px] md:w-auto w-[50px]  bg-white md:p-4 p-2 rounded-xl shadow-md hover:shadow-xl mb-8 transition-shadow duration-300 group"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="md:w-16 md:h-16 w-8 h-8 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
            />
            <h3 className="mt-2 text-center md:text-auto text-[10px] text-gray-700 font-medium group-hover:text-[#8b60f7]">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSec;
