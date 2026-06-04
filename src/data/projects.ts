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
    slug: "e-book-platform",
    title: "Ebook Library",
    description:
      "A full-stack e-book platform with React frontend and Node.js backend",
    image: "/projects/ecommerce.jpg",
    tags: ["NextJS", "Node.js", "NestJS", "MySQL", "Tailwind CSS", "ElectronJS"],
    link: "/projects/e-book-platform",
    role: "Full Stack Developer",
    period: "2023",
    overview:
      "A modern e-book experience with product browsing, cart management, secure checkout, and admin tools for managing inventory and orders.",
    features: [
      "Responsive product catalog with advanced filtering and search",
      "Persistent shopping cart and secure checkout flow",
      "Admin dashboard for managing products, orders, and users",
      "Integration with third-party payment gateway",
    ],
    technologies: ["NextJS", "Node.js", "NestJS", "MySQL", "Tailwind CSS", "ElectronJS"],
  },
  {
    id: 2,
    slug: "tour-booking-management",
    title: "Tour Booking Management",
    description:
      "A collaborative tour booking management application with real-time updates",
    image: "/projects/tourbooking.jpg",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "/projects/tour-booking-management",
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
    slug: "paylink-manager",
    title: "PayLink Manager",
    description:
      "A modern portfolio website showcasing design and development skills",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "SCSS"],
    link: "/projects/paylink-manager",
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
    slug: "xedap-vn",
    title: "xedap.vn",
    description:
      "An analytics dashboard with interactive charts and real-time data",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "API"],
    link: "/projects/xedap-vn",
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
  {
    id: 5,
    slug: "xedaptot-com",
    title: "xedaptot.com",
    description:
      "An analytics dashboard with interactive charts and real-time data",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "API"],
    link: "/projects/xedaptot-com",
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
  {
    id: 6,
    slug: "covid-health-dashboard",
    title: "REAL-TIME HEALTH INDICATORS MONITORING SOLUTION FOR COVID-19 PATIENTS",
    description:
      "An analytics dashboard with interactive charts and real-time data",
    image: "/projects/dashboard.jpg",
    tags: ["React", "Chart.js", "API"],
    link: "/projects/covid-health-dashboard",
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

