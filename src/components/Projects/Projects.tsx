import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>Featured Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <div className={styles.placeholder}>
                  <p>Project Image</p>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.link} className={styles.link}>
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
