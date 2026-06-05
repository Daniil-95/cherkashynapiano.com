"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">
            <h3 className="footer-logo">
              IRINA
            </h3>

            <p className="footer-description">
              Classical pianist performing solo recitals,
              chamber music and concert appearances
              across Europe.
            </p>
          </div>

          <div className="footer-menu">
            <h4>Navigation</h4>

            <Link href="/">Home</Link>
            <Link href="/biography">Biography</Link>
            <Link href="/repertoire">Repertoire</Link>
            <Link href="/concerts">Concerts</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/media">Media</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>

            <a href="mailto:irina@example.com">
              irina@example.com
            </a>

            <span>
              Prague, Czech Republic
            </span>
          </div>

          <div className="footer-social">
            <h4>Follow me</h4>

            <div className="footer-social-links">

              <a href="#" aria-label="YouTube">
                <Image
                  src="/images/logos/youtube-logo.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>

              <a href="#" aria-label="Instagram">
                <Image
                  src="/images/logos/instagram-logo.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>

            </div>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {currentYear} Irina Cherkashyna. All rights reserved.
          </span>

          <button
            type="button"
            className="footer-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>

        </div>

      </div>
    </footer>
  );
}