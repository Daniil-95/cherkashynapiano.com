"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <span>JANA</span>
            <p>pianist</p>
          </Link>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/biography">Biography</Link>
          <Link href="/repertoire">Repertoire</Link>
          <Link href="/concerts">Concerts</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="social">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
