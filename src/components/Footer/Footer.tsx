import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Portfolio</h3>
            <p>Full Stack Developer crafting beautiful digital experiences.</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
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
          </div>

          <div className={styles.section}>
            <h4>Social Links</h4>
            <div className={styles.socials}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS, and SCSS.</p>
        </div>
      </div>
    </footer>
  );
}
