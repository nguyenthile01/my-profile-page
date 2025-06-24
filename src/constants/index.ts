import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  angular,
  javaspring,
  TMA,
  Hitachi,
  rail,
  materialproject,
  qualityproject,
  next,
  Azure
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Angular",
    icon: angular,
  },
  {
    title: "Java",
    icon: javaspring,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: javaspring,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Azure",
    icon: Azure
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Hitachi Digital Service",
    icon: Hitachi,
    iconBg: "#C9CCD7",
    date: "May 2021 - Present",
    points: [
      "Delivered multiple B2B apps using Angular & Spring Boot; improved system performance and security with REST APIs and JWT.",
      "Reduced bugs by 35% and increased coverage to 90%+ using Jest & Playwright.",
      "Mentored junior developers and led code reviews to ensure consistency and scalability.",
      "Enhanced CI/CD process and code quality with ES Lint, cutting review time by 25%. "
    ],
  },
  {
    title: "Software Engineer",
    companyName: "TMA Solutions",
    icon: TMA,
    iconBg: "#C9CCD7",
    date: "Jan 2020 - May 2021",
    points: [
      "Built and optimized an e-commerce site with React/Next.js; increased SEO traffic by 30% and reduced load time by 35%.",
      "Integrated secure payment systems and improved test reliability via Jest (90%+ coverage).",
      "Collaborated with designers and backend teams to deliver full product experience."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Global Rail Data System",
    customerName: "Hitachi A-train",
    description:
      "Built real-time signal analysis system; enhanced system response by 30%. Led team coordination and version control using Git/Azure",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "ngrx",
        color: "blue-text-gradient",
      }
    ],
    image: rail,
    sourceCodeLink: "https://github.com/nguyenthile01?tab=repositories",
  },
  {
    name: "Quality Management System ",
    customerName: "Hitachi Global",
    description:
      "Angular + Spring Boot system for QA evaluation and reporting. Led a sub-team, implemented UI/backend features, reduced support issues by 35%.",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "ngrx",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
    ],
    image: qualityproject,
    sourceCodeLink: "https://github.com/nguyenthile01?tab=repositories",
  },
  {
    name: "Building Materials E-commerce",
    customerName: "",
    description:
      "Developed SEO-optimized, SSR React app; boosted user engagement by 25%.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: materialproject,
    sourceCodeLink: "https://github.com/nguyenthile01?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
