import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto px-4">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hello, I'm <span className={styles.highlight}>DUNG NGUYEN</span>
          </h1>
          <p className={styles.subtitle}>Fron end Developer</p>
          <p className={styles.description}>
            I create beautiful and functional web experiences that help
            businesses grow and users succeed.
          </p>

          <div className={styles.ctaButtons}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get In Touch
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dung-nguyen-quang-994a77268/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
