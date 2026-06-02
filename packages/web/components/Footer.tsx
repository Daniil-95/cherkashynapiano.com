"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JANA NOVÁKOVÁ</h3>
            <p>Classical Pianist</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@cherkashynapiano.com</p>
            <p>Phone: +420 123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Jana Nováková. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
