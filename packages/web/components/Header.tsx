"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-logo">
        <Link href="/">
          <span className="header-logo-main">
            IRINA
          </span>

          <span className="header-logo-sub">
            Pianist
          </span>
        </Link>
      </div>

      <nav className="header-nav">
        <Link href="/">Home</Link>
        <Link href="/biography">Biography</Link>
        <Link href="/repertoire">Repertoire</Link>
        <Link href="/concerts">Concerts</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="header-social">
        <a href="https://www.youtube.com/@FourhandsPiano" aria-label="YouTube">
          <Image src="/images/logos/youtube-logo.svg" alt="YouTube" width={24} height={24}/>
        </a>

        <a href="https://www.instagram.com/cherkashynairina?igsh=MWY3bWNvZWFnYXM4ZA%3D%3D" aria-label="Instagram">
          <Image src="/images/logos/instagram-logo.svg" alt="Instagram" width={24} height={24}/>
        </a>
      </div>
    </header>
  );
}