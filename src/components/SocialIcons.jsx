import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/marka-harini1203/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://leetcode.com/u/harini_marka/", icon: <FaCode />, label: "LeetCode" },
    { href: "https://github.com/Harini-1203", icon: <FaGithub />, label: "GitHub" },
  ];

  return (
    <div className="flex flex-col md:w-auto w-1/5 justify-center lg:ml-35 md:pr-30 px-10 md:px-20 gap-6 mt-4 text-2xl text-gray-800">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6126f6] transition-transform transform hover:scale-110"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
