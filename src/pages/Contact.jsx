import React, { useState } from "react";
import { fadeStyle, useInView, S } from "../components/needs";
import emailjs from "@emailjs/browser";

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_zmhlvgm",
        "template_ey0o8pe",
        { from_name: form.name, from_email: form.email, message: form.message },
        "Xk1t9IH9DkWGC3lk7"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" style={S.inner} ref={ref}>
      {/* Desktop: two-column grid — untouched */}
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

        {/* Left */}
        <div style={fadeStyle(inView, 0)}>
          <span style={S.eyebrow}>Get in touch</span>
          <h2 style={S.h2}>
            Let's build something<br />
            <span style={{ color: "#7C3AED" }}>together</span>
          </h2>
          <p style={{ ...S.sub, marginBottom: "36px" }}>
            I'm actively looking for internship and full-time opportunities.
            Whether you have a role, project idea, or just want to connect — my inbox is open.
          </p>

          <div style={{ marginTop: "32px", padding: "20px", background: "#EDE9FE", borderRadius: "14px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "22px" }}>✅</span>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#7C3AED", marginBottom: "3px" }}>Available for opportunities</div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>Open to full-time roles, internships, and freelance projects starting 2026.</div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={fadeStyle(inView, 140)}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { name: "name",  label: "Your name",     type: "text"  },
              { name: "email", label: "Email address", type: "email", placeholder: "recruiter@company.com" },
            ].map(({ name, label, placeholder, type }) => (
              <div key={name}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>{label}</label>
                <input
                  type={type} value={form[name]}
                  placeholder={placeholder}
                  onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                  required
                  style={{
                    width: "100%", padding: "11px 14px", background: "#fafafa",
                    border: "1.5px solid #e5e7eb", borderRadius: "10px",
                    fontSize: "14px", color: "#0f0f0f", outline: "none",
                    fontFamily: "inherit", transition: "border-color 0.2s", boxSizing: "border-box",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.background = "#fff"; }}
                  onBlur={(e)  => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa"; }}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#374151", marginBottom: "6px", letterSpacing: "0.04em" }}>Message</label>
              <textarea
                value={form.message} placeholder="Tell me about the role or project…"
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                required rows={5}
                style={{
                  width: "100%", padding: "11px 14px", background: "#fafafa",
                  border: "1.5px solid #e5e7eb", borderRadius: "10px",
                  fontSize: "14px", color: "#0f0f0f", outline: "none", resize: "vertical",
                  fontFamily: "inherit", transition: "border-color 0.2s", boxSizing: "border-box",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#7C3AED"; e.currentTarget.style.background = "#fff"; }}
                onBlur={(e)  => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.background = "#fafafa"; }}
              />
            </div>
            <button type="submit" style={{
              padding: "13px 28px", background: sent ? "#10B981" : "#7C3AED",
              color: "#fff", border: "none", borderRadius: "11px",
              fontSize: "14px", fontWeight: 700, cursor: "pointer",
              fontFamily: "inherit", transition: "background 0.3s, transform 0.2s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            }}
              onMouseEnter={(e) => { if (!sent) e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {sent ? "✅ Message Sent!" : "Send Message →"}
            </button>
            <p style={{ fontSize: "11px", color: "#9ca3af", textAlign: "center" }}>
              I usually reply within 24 hours.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        /* ── Mobile (≤ 767px) ── */
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          #contact {
            padding: 40px 16px !important;
            margin: 0 30px !important;
          }
        }

        /* ── Tablet (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-grid {
            gap: 40px !important;
          }
          #contact {
            padding: 48px 32px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
