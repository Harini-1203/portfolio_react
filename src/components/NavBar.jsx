import { useEffect, useState } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener("scroll", close, { once: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [menuOpen]);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #f0eeff" : "none",
        transition: "all 0.3s ease",
        padding: "0 32px",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", height: "64px", justifyContent: "space-between" }}>

          {/* Logo */}
          <span style={{ fontSize: "18px", fontWeight: 800, color: "#7C3AED", letterSpacing: "-0.02em" }}>
            Harini<span style={{ color: "#0f0f0f" }}>.</span>
          </span>

          {/* ── Desktop nav (hidden on mobile via CSS) ── */}
          <div className="nav-desktop" style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                style={{
                  padding: "7px 16px", borderRadius: "8px", border: "none",
                  background: active === link ? "#EDE9FE" : "transparent",
                  color: active === link ? "#7C3AED" : "#6b7280",
                  fontSize: "13px", fontWeight: active === link ? 700 : 500,
                  cursor: "pointer", transition: "all 0.2s ease", fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { if (active !== link) { e.currentTarget.style.background = "#f9f7ff"; e.currentTarget.style.color = "#7C3AED"; } }}
                onMouseLeave={(e) => { if (active !== link) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#6b7280"; } }}
              >
                {link}
              </button>
            ))}
            <a href="/resume.pdf" style={{
              marginLeft: "8px", padding: "8px 18px", background: "#7C3AED",
              color: "#fff", borderRadius: "9px", fontSize: "13px", fontWeight: 700,
              textDecoration: "none", transition: "opacity 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.86"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Resume ↗
            </a>
          </div>

          {/* ── Hamburger (shown on mobile only via CSS) ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              display: "none", /* shown via CSS on mobile */
              flexDirection: "column", justifyContent: "center", alignItems: "center",
              gap: "5px", width: "40px", height: "40px",
              background: "transparent", border: "none", cursor: "pointer", padding: "4px",
            }}
          >
            {/* Three bars → X when open */}
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#7C3AED", borderRadius: "2px",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#7C3AED", borderRadius: "2px",
              transition: "opacity 0.25s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "2px", background: "#7C3AED", borderRadius: "2px",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className="nav-mobile-menu"
        style={{
          display: "none", /* shown via CSS on mobile */
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #f0eeff",
          flexDirection: "column",
          padding: "12px 24px 20px",
          gap: "4px",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "transform 0.25s ease, opacity 0.25s ease",
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            style={{
              width: "100%", textAlign: "left",
              padding: "12px 16px", borderRadius: "10px", border: "none",
              background: active === link ? "#EDE9FE" : "transparent",
              color: active === link ? "#7C3AED" : "#374151",
              fontSize: "15px", fontWeight: active === link ? 700 : 500,
              cursor: "pointer", fontFamily: "inherit",
              transition: "background 0.15s, color 0.15s",
            }}
          >
            {link}
          </button>
        ))}
        <a
          href="/resume.pdf"
          style={{
            marginTop: "8px", padding: "12px 16px",
            background: "#7C3AED", color: "#fff", borderRadius: "10px",
            fontSize: "14px", fontWeight: 700, textDecoration: "none",
            textAlign: "center", display: "block",
          }}
        >
          Resume ↗
        </a>
      </div>

      <style>{`
        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .nav-desktop    { display: none !important; }
          .nav-hamburger  { display: flex !important; }
          .nav-mobile-menu { display: flex !important; }

          nav { padding: 0 16px !important; }
        }

        /* ── Tablet (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          nav { padding: 0 20px !important; }
          .nav-desktop { gap: 2px !important; }
          .nav-desktop button { padding: 7px 10px !important; font-size: 12px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
