import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Frontend Engineer with 2+ years of experience building scalable
              web applications using ReactJS and NextJS. Experienced in
              architecting production systems including payment platforms,
              booking management systems, and subscription-based digital
              products. Strong in advanced state management (React Query, Redux
              Toolkit), performance optimization, custom hook abstraction, and
              scalable frontend architecture. Focused on building maintainable,
              performance-conscious React applications.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.stat}>
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>8+</h3>
              <p>Clients</p>
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
