import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import styles from "@/components/Projects/ProjectDetail.module.scss";

type ProjectPageProps = {
  project: Project;
};

export default function ProjectDetailPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{project.title} - Project Detail</title>
        <meta name="description" content={project.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <div className={styles.page}>
        <div className="container mx-auto px-4">
          <div className={styles.inner}>
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> &nbsp;/&nbsp;{" "}
              <a href="#projects">Projects</a> &nbsp;/&nbsp;{" "}
              <span>{project.title}</span>
            </div>

            <header className={styles.header}>
              <h1 className={styles.title}>{project.title}</h1>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <span>Role:</span>
                  <strong>{project.role}</strong>
                </span>
                <span className={styles.metaItem}>
                  <span>Period:</span>
                  <strong>{project.period}</strong>
                </span>
              </div>
            </header>

            <div className={styles.layout}>
              <section className={styles.media} aria-label="Project preview">
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>
                    Project preview image
                  </div>
                </div>
              </section>

              <aside className={styles.sidebarCard}>
                <h2 className={styles.sectionTitle}>Quick Info</h2>
                <p className={styles.overview}>{project.description}</p>

                <div>
                  <h3 className={styles.sectionTitle}>Tech Stack</h3>
                  <div className={styles.techList}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techItem}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={styles.sectionTitle}>Tags</h3>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.actions}>
                  <button type="button" className={styles.primaryButton}>
                    View Live Demo
                  </button>
                  <button type="button" className={styles.secondaryButton}>
                    View Source Code
                  </button>
                </div>
              </aside>
            </div>

            <section className={styles.content} aria-label="Project details">
              <div>
                <h2 className={styles.sectionTitle}>Overview</h2>
                <p className={styles.overview}>{project.overview}</p>
              </div>

              <div>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <ul className={styles.featureList}>
                  {project.features.map((feature) => (
                    <li key={feature} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/#projects" className={styles.backLink}>
                ← Back to all projects
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (
  context
) => {
  const slugParam = context.params?.slug;

  if (typeof slugParam !== "string") {
    return {
      notFound: true,
    };
  }

  const project = getProjectBySlug(slugParam);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

