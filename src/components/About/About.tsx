import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a creative developer with over 5 years of experience building
              web applications. My passion is creating intuitive user interfaces
              and robust backend systems that make a real impact.
            </p>
            <p>
              I specialize in React, Next.js, TypeScript, and modern web
              technologies. I love working with teams to solve complex problems
              and deliver exceptional digital experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
