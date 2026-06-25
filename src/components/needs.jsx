import React, { useState, useEffect, useRef } from "react";
const pet="/assets/pet.webp";
const weather="/assets/weather.webp";
const c1 = "/assets/c1.png";



export const needs = () => {
    
  return (
    <div>hii</div>
  )
}

export default needs;


export function fadeStyle(inView, delay = 0) {
  return {
    transform: inView ? "translateY(0)" : "translateY(28px)",
    opacity: inView ? 1 : 0,
    transition: `transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.65s ease ${delay}ms`,
  };
}
export function useTypewriter(words, speed = 90, deleteSpeed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, deleteSpeed, pause]);
  return text;
}

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}
export const S = {
  section: {
    padding: "100px 24px",
    fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
  },
  inner: { maxWidth: "1100px", margin: "0 auto" },
  eyebrow: {
    display: "inline-block", fontSize: "11px", fontWeight: 700,
    color: "#7C3AED", letterSpacing: "0.13em", textTransform: "uppercase",
    padding: "5px 14px", background: "#EDE9FE", borderRadius: "20px", marginBottom: "14px",
  },
  h2: {
    fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 800, color: "#0f0f0f",
    letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "14px",
  },
  sub: { fontSize: "15px", color: "#6b7280", lineHeight: 1.65, maxWidth: "520px" },
  card: {
    background: "#fff", border: "1px solid #e5e7eb",
    borderRadius: "16px", padding: "24px",
  },
  gridBg: {
    position: "fixed", inset: 0,
    backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.04) 1px,transparent 1px)",
    backgroundSize: "56px 56px", pointerEvents: "none", zIndex: 0,
  },
};

export const projectsList = [
  {
    id: 1, title: "PetLink", tagline: "Connecting pets with loving homes",
    description: "Full-stack MERN platform enabling users to adopt, sell, or buy pets with real-time listings and JWT authentication.",
    image: pet,
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    category: "Full Stack", live: "#", github: "https://github.com/Harini-1203/petLink",
    accent: "#7C3AED", accentLight: "#EDE9FE", featured: true,
    stats: { "200+ Users": "users", "500+ Listings": "listings", "99% Uptime": "uptime" },
  },
  {
    id: 2, title: "CodeIt Chatbot", tagline: "AI-powered code assistant",
    description: "Intelligent chatbot delivering tailored code snippets for web development, streamlining developer workflows.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    tags: ["React", "OpenAI API", "Node.js", "MongoDB"],
    category: "AI / ML", live: "#", github: "https://github.com/Harini-1203/codeit-chatbot",
    accent: "#0EA5E9", accentLight: "#E0F2FE", featured: true,
    stats: { "1K+ Queries": "queries", "94% Accuracy": "accuracy", "<1s Response": "response" },
  },
  {
    id: 3, title: "E-Mandi", tagline: "Transparent vegetable marketplace",
    description: "Connects farmers directly with buyers, ensuring transparent pricing and cutting out middlemen.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    category: "Full Stack", live: "#", github: "https://github.com/Harini-1203/E-mandi",
    accent: "#10B981", accentLight: "#D1FAE5", featured: false,
    stats: { "50+ Vendors": "vendors", "300+ Products": "products", "2K+ Trades": "trades" },
  },
  {
    id: 4, title: "Weather Vision", tagline: "Real-time weather intelligence",
    description: "Beautiful weather dashboard with 7-day forecasts, location search, and animated weather conditions.",
    image: weather,
    tags: ["React", "OpenWeather API", "Chart.js"],
    category: "Frontend", live: "#", github: "https://github.com/Harini-1203/Weather-update",
    accent: "#F59E0B", accentLight: "#FEF3C7", featured: false,
    stats: { "1M+ Cities": "cities", "98% Accurate": "accuracy", "Live Updates": "live" },
  },
  
];
