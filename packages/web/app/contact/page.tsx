"use client";

import { useState } from "react";
import { sendContactMessage } from "@/lib/strapi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await sendContactMessage(formData);

    if (success) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } else {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", marginBottom: "60px" }}>Get in Touch</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "30px" }}>Contact</h3>
            <div style={{ marginBottom: "20px" }}>
              <p style={{ color: "#d4af37", marginBottom: "5px" }}>Email</p>
              <a
                href="mailto:info@cherkashynapiano.com"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                info@cherkashynapiano.com
              </a>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <p style={{ color: "#d4af37", marginBottom: "5px" }}>Location</p>
              <p style={{ color: "#ccc" }}>Prague, Czech Republic</p>
            </div>
            <div>
              <p style={{ color: "#d4af37", marginBottom: "10px" }}>Follow Me</p>
              <div style={{ display: "flex", gap: "15px" }}>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#d4af37", textDecoration: "none" }}
                >
                  YouTube
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#d4af37", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  color: "#fff",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  color: "#fff",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  color: "#fff",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="cta-button"
              style={{
                width: "100%",
                opacity: isSubmitting ? 0.5 : 1,
              }}
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE →"}
            </button>
            {submitStatus === "success" && (
              <p style={{ color: "#4CAF50", marginTop: "15px", textAlign: "center" }}>
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p style={{ color: "#f44336", marginTop: "15px", textAlign: "center" }}>
                Error sending message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
