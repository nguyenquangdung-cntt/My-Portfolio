import styles from "./Projects.module.scss";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with React frontend and Node.js backend",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    image: "/projects/taskapp.jpg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing design and development skills",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "SCSS"],
    link: "#",
  },
  {
    id: 4,
    title: "Data Dashboard",
    description:
      "An analytics dashboard with interactive charts and real-time data",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>Featured Projects</h2>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
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
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} className={styles.link}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
