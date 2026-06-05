"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <Link href="/">
          <span className="site-header__logo-main">IRINA</span>
          <span className="site-header__logo-sub">Pianist</span>
        </Link>
      </div>

      <nav className="site-header__nav">
        <Link href="/">Home</Link>
        <Link href="/biography">Biography</Link>
        <Link href="/repertoire">Repertoire</Link>
        <Link href="/concerts">Concerts</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="site-header__social">
        <a href="#" aria-label="YouTube">
          <Image src="/images/logos/youtube-logo.svg" alt="YouTube" width={24} height={24}/>
        </a>

        <a href="#" aria-label="Instagram">
          <Image src="/images/logos/instagram-logo.svg" alt="Instagram" width={24} height={24}/>
        </a>
      </div>
    </header>
  );
}
