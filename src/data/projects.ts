export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  role: string;
  period: string;
  overview: string;
  features: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with React frontend and Node.js backend",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/projects/e-commerce-platform",
    role: "Full Stack Developer",
    period: "2023",
    overview:
      "A modern e-commerce experience with product browsing, cart management, secure checkout, and admin tools for managing inventory and orders.",
    features: [
      "Responsive product catalog with advanced filtering and search",
      "Persistent shopping cart and secure checkout flow",
      "Admin dashboard for managing products, orders, and users",
      "Integration with third-party payment gateway",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "SCSS"],
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates",
    image: "/projects/taskapp.jpg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "/projects/task-management-app",
    role: "Frontend Developer",
    period: "2023",
    overview:
      "A Kanban-style task management tool that helps teams organize work, track progress, and collaborate in real time.",
    features: [
      "Board and column-based task organization (To Do / In Progress / Done)",
      "Real-time updates across clients using Firebase",
      "Drag-and-drop interaction for reordering tasks",
      "Per-task activity history and comments",
    ],
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern portfolio website showcasing design and development skills",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "SCSS"],
    link: "/projects/portfolio-website",
    role: "Frontend Developer",
    period: "2024",
    overview:
      "A personal portfolio site designed to highlight projects, skills, and experience with a focus on clean UI and smooth interactions.",
    features: [
      "Single-page layout with smooth scrolling navigation",
      "Featured projects section with individual detail pages",
      "Contact form for direct communication",
      "Fully responsive design across mobile, tablet, and desktop",
    ],
    technologies: ["Next.js", "TypeScript", "SCSS Modules", "Tailwind CSS"],
  },
  {
    id: 4,
    slug: "data-dashboard",
    title: "Data Dashboard",
    description:
      "An analytics dashboard with interactive charts and real-time data",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "API"],
    link: "/projects/data-dashboard",
    role: "Frontend Engineer",
    period: "2024",
    overview:
      "An analytics dashboard that visualizes key business metrics through interactive charts and tables.",
    features: [
      "Multiple dashboards with customizable widgets",
      "Interactive charts with filtering and drill-down capabilities",
      "Real-time metric updates from external APIs",
      "Dark theme optimized for long analytic sessions",
    ],
    technologies: ["React", "Chart.js", "REST APIs", "SCSS"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

