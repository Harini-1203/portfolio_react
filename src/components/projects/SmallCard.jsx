import React, { useState } from "react";
import { useInView, fadeStyle } from "../needs";

function SmallCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  return (
    <div ref={ref} style={{
      borderRadius: "14px", overflow: "hidden", background: "#fff",
      border: `1px solid ${hovered ? project.accent + "50" : "#e5e7eb"}`,
      boxShadow: hovered ? `0 18px 44px ${project.accent}15` : "0 2px 10px rgba(0,0,0,0.04)",
      ...fadeStyle(inView, index * 90),
      transform: `${inView ? "translateY(0)" : "translateY(28px)"} ${hovered ? "scale(1.01) translateY(-6px)" : "scale(1)"}`,
      transition: `transform 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms, opacity 0.5s ease, box-shadow 0.3s, border-color 0.3s`,
      cursor: "pointer", display: "flex", flexDirection: "column",
    }}
      className="small-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: hovered ? `${project.accent}50` : "rgba(0,0,0,0.06)", transition: "background 0.3s" }} 
          className="small-card-body"
        />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", opacity: hovered ? 1 : 0, transition: "opacity 0.25s" }}>
          {[{ href: project.live, label: "↗" }, { href: project.github, label: "{}" }].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
              width: "38px", height: "38px", borderRadius: "50%", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: project.accent, fontSize: "15px", fontWeight: 700, textDecoration: "none",
            }}>{label}</a>
          ))}
        </div>
        <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(255,255,255,0.95)", color: project.accent, fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>
          {project.category}
        </div>
      </div>
      <div style={{ padding: "18px 20px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "10px", fontWeight: 700, color: project.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>
          {project.tagline}</p>
        <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#0f0f0f", marginBottom: "8px", letterSpacing: "-0.01em" }}>
          {project.title}</h3>
        <p style={{ fontSize: "12.5px", color: "#6b7280", lineHeight: "1.6", marginBottom: "13px", flex: 1 }}>
          {project.description.slice(0, 90)}…</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "13px" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "10px", fontWeight: 600, padding: "3px 9px", borderRadius: "20px", background: project.accentLight, color: project.accent }}>{tag}</span>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          /* Full-width card, slightly taller image for thumb-friendliness */
          .small-card{
           width: 80% !important;
           flex-direction: column !important;
           items-align: center !important;
           margin: 0 auto !important;
            z-index: 0 !important;
          }
          .small-card-img {
            height: 160px !important;
          }
          .small-card-body {
            padding: 14px 16px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default SmallCard;
