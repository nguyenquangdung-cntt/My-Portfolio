import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../public/images/logo-tranparent.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} alt="Logo" className="w-14 h-14" />
              <h1 className="text-xl font-bold text-white">NGUYEN QUANG DUNG</h1>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
