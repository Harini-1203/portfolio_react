import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { S } from '../components/needs';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

function useTypewriter(words, speed = 90, deleteSpeed = 55, pause = 1400) {
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

function useInView(threshold = 0.12) {
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

function fadeStyle(inView, delay = 0) {
  return {
    transform: inView ? "translateY(0)" : "translateY(28px)",
    opacity: inView ? 1 : 0,
    transition: `transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.65s ease ${delay}ms`,
  };
}

const socialLinks = [
  { href: "https://www.linkedin.com/in/marka-harini1203/", icon: <FaLinkedin />, label: "LinkedIn", color: "#0A66C2" },
  { href: "https://leetcode.com/u/harini_marka/",          icon: <FaCode />,      label: "LeetCode", color: "#FFA116" },
  { href: "https://github.com/Harini-1203",                 icon: <FaGithub />,    label: "GitHub",   color: "#333"    },
];

function FloatingSocials() {
  return (
    <div style={{
      position: "fixed",
      right: "24px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0",
     
    }}
    className="floating-socials-wrap"
    >
      {/* top line */}
      <div style={{
        width: "1.5px",
        height: "60px",
        background: "linear-gradient(to bottom, transparent, #c4b5fd)",
        marginBottom: "8px",
      }} />

      {socialLinks.map(({ href, icon, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1.5px solid #ede9fe",
            color: "#7C3AED",
            fontSize: "18px",
            margin: "5px 0",
            boxShadow: "0 4px 16px rgba(124,58,237,0.10)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, border-color 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(-4px) scale(1.12)";
            e.currentTarget.style.color = color;
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow = `0 8px 24px ${color}33`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0) scale(1)";
            e.currentTarget.style.color = "#7C3AED";
            e.currentTarget.style.borderColor = "#ede9fe";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(124,58,237,0.10)";
          }}
        >
          {icon}
        </a>
      ))}

      {/* bottom line */}
      <div style={{
        width: "1.5px",
        height: "60px",
        background: "linear-gradient(to bottom, #c4b5fd, transparent)",
        marginTop: "8px",
      }} />
    </div>
  );
}

function Hero() {
  const typed = useTypewriter(["MERN Stack Developer", "Java Programmer", "DSA Enthusiast", "Problem Solver"]);
  const [ref, inView] = useInView(0.05);

  return (
    <>
      <FloatingSocials />

      <section
        id="home"
        style={{
          ...S.section,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: "transparent",
          position: "relative",
          paddingTop: "80px",
        }}
      >
        <div
          ref={ref}
          className="hero-inner"
          style={{
            ...S.inner,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* ── Left ── */}
          <div>
            <div style={{ ...fadeStyle(inView, 0), marginBottom: "18px" }}>
              <span style={{ ...S.eyebrow }}>👋 Welcome to my portfolio</span>
            </div>

            <div style={fadeStyle(inView, 80)}>
              <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "4px" }}>Hello, I'm</p>
              <h1 style={{
                fontSize: "clamp(38px, 6vw, 72px)",
                fontWeight: 900,
                color: "#0f0f0f",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "12px",
              }}>
                Harini <span style={{ color: "#7C3AED" }}>Marka</span>
              </h1>
            </div>

            <div style={{ ...fadeStyle(inView, 160), marginBottom: "20px" }}>
              <div style={{
                fontSize: "clamp(15px, 2.2vw, 22px)",
                fontWeight: 600,
                color: "#374151",
                minHeight: "32px",
              }}>
                <span style={{ color: "#7C3AED" }}>{typed}</span>
                <span style={{ animation: "blink 1s step-start infinite", color: "#7C3AED" }}>|</span>
              </div>
            </div>

            <div style={fadeStyle(inView, 220)}>
              <p style={{ ...S.sub, marginBottom: "32px" }}>
                Final-year IT student at IARE, passionate about building real-world MERN applications.
                Strong in Java, DSA, and full-stack web development. Open to internships &amp; full-time roles.
              </p>
            </div>

            <div style={{
              ...fadeStyle(inView, 280),
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
            className="hero-buttons"
            >
              <a
                href="#projects"
                style={{
                  padding: "13px 28px",
                  background: "#7C3AED",
                  color: "#fff",
                  borderRadius: "11px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "transform 0.2s, opacity 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View My Work ↓
              </a>
              <a
                href="#contact"
                style={{
                  padding: "13px 28px",
                  background: "transparent",
                  color: "#374151",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: "11px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.color = "#7C3AED"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.color = "#374151"; }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* ── Right — avatar blob ── */}
          <div style={{
            ...fadeStyle(inView, 100),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>
            <div style={{ position: "relative", width: "360px", height: "420px" }}>
              {/* Blob */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #EDE9FE 0%, #c4b5fd 50%, #ddd6fe 100%)",
                borderRadius: "60% 40% 50% 60% / 50% 60% 40% 55%",
                animation: "morph 8s ease-in-out infinite",
              }} />

              {/* Avatar */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "320px",
                height: "380px",
                borderRadius: "50% 50% 0 0",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(160deg, #c4b5fd 0%, #8b5cf6 100%)",
                  borderRadius: "50% 50% 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ fontSize: "150px" }}>👩🏻‍💻</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes blink   { 50% { opacity: 0; } }
        @keyframes morph   {
          0%, 100% { border-radius: 60% 40% 50% 60% / 50% 60% 40% 55%; }
          50%       { border-radius: 40% 60% 60% 40% / 60% 40% 55% 45%; }
        }
        @keyframes float   {
          0%, 100% { transform: translateY(0);    }
          50%       { transform: translateY(-8px); }
        }

        /* ── Responsive ── */

        /* Tablet */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-inner > div:last-child {
            display: flex !important;
            justify-content: center !important;
          }
          .hero-inner > div:last-child > div {
            width: 280px !important;
            height: 330px !important;
          }
          .hero-inner > div:last-child > div > div:first-child {
            /* inner avatar */
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          section#home {
            padding-top: 64px !important;
            padding-bottom: 32px !important;
          }
          .hero-inner {
            gap: 32px !important;
            
          }
          .hero-buttons{
            margin: 15px 20px !important;

          }
          .hero-inner > div:last-child > div {
            width: 180px !important;
            height: 200px !important;
          }
          .hero-inner > div:last-child > div > div:nth-child(2) {
            width: 160px !important;
            height: 180px !important;
          }
            .floating-socials-wrap {
            right: 5px !important;
          }
          .floating-socials-wrap a {
            width: 24px !important;
            height: 24px !important;
            font-size: 15px !important;
          }
          /* Shrink floating social bar on small screens */
          /* Fixed socials: hide long line segments, tighten */
        }

        /* Hide fixed socials on very small screens to avoid overlap */
        @media (max-width: 480px) {
          .floating-socials-wrap {
            right: 5px !important;
          }
          .floating-socials-wrap a {
            width: 24px !important;
            height: 24px !important;
            font-size: 15px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
}

export default Hero;
