import styles from "./Skills.module.scss";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "VS Code", "Figma", "Linux", "Webpack", "Jest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container mx-auto px-4">
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.skillsGrid}>
          {skillsData.map((group, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.skillsList}>
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
