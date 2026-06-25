// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "32px 24px", background: "#0f0f0f", fontFamily: "'Inter',-apple-system,sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontSize: "16px", fontWeight: 800, color: "#fff" }}>Harini<span style={{ color: "#a78bfa" }}>.</span></span>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>Designed & built by Harini Marka · 2025</p>
        <div style={{ display: "flex", gap: "16px" }}>
          {[["GitHub", "https://github.com/harinimarka"], ["LinkedIn", "https://linkedin.com"]].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; }}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;