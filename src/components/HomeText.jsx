import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { S } from './needs';


const HomeText = () => {
  const [ref, inView] = useInView(0.05);
    const typed = useTypewriter(["MERN Stack Developer", "Java Programmer", "DSA Enthusiast", "Problem Solver"]);

  return (
    <div>
          <div style={{ ...fadeStyle(inView, 0), marginBottom: "18px" }}>
            <span style={{ ...S.eyebrow }}>👋 Welcome to my portfolio</span>
          </div>
          <div style={fadeStyle(inView, 80)}>
            <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "4px" }}>Hello, I'm</p>
            <h1 style={{ fontSize: "clamp(44px,6vw,72px)", fontWeight: 900, color: "#0f0f0f", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "12px" }}>
              Harini <span style={{ color: "#7C3AED" }}>Marka</span>
            </h1>
          </div>
          <div style={{ ...fadeStyle(inView, 160), marginBottom: "20px" }}>
            <div style={{ fontSize: "clamp(16px,2.2vw,22px)", fontWeight: 600, color: "#374151", minHeight: "32px" }}>
              <span style={{ color: "#7C3AED" }}>{typed}</span>
              <span style={{ animation: "blink 1s step-start infinite", color: "#7C3AED" }}>|</span>
            </div>
          </div>
          <div style={fadeStyle(inView, 220)}>
            <p style={{ ...S.sub, marginBottom: "32px" }}>
              Final-year IT student at IARE, passionate about building real-world MERN applications.
              Strong in Java, DSA, and full-stack web development. Open to internships & full-time roles.
            </p>
          </div>
          <div style={{ ...fadeStyle(inView, 280), display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <a href="#projects" style={{
              padding: "13px 28px", background: "#7C3AED", color: "#fff", borderRadius: "11px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s, opacity 0.2s",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View My Work ↓
            </a>
            <a href="#contact" style={{
              padding: "13px 28px", background: "transparent", color: "#374151",
              border: "1.5px solid #e5e7eb", borderRadius: "11px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none", transition: "all 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.color = "#7C3AED"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#374151"; }}
            >
              Get in Touch
            </a>
          </div>
          {/* Social + stats */}
          <div style={fadeStyle(inView, 340)}>
            <div style={{ display: "flex", gap: "32px", paddingTop: "24px", borderTop: "1px solid #f0eeff" }}>
              {[["5+", "Projects Built"], ["8.5", "CGPA"], ["1", "Internship"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#7C3AED" }}>{val}</div>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default HomeText;
