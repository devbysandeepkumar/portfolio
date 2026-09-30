export const siteConfig = {
  name: "Sandeep Kumar",
  shortName: "devbysandeep",
  title: "Sandeep Kumar — Full Stack & AI Engineer",
  description:
    "Portfolio of Sandeep Kumar, a full stack and AI engineer building web apps, LLM features and cloud-deployed products with React, Next.js, Node.js, LangChain and AWS.",
  email: "devbysandeepkumar@gmail.com",
  location: "Available worldwide · Remote",
  socials: [
    { label: "GitHub", href: "https://github.com/devbysandeepkumar" },
    { label: "LinkedIn", href: "https://in.linkedin.com/in/devbysandeep" },
    { label: "Email", href: "mailto:devbysandeepkumar@gmail.com" },
  ],
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "GSAP",
  "Lenis",
  "LangChain",
  "LangGraph",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "Microservices",
  "REST APIs",
  "Google Auth",
  "AWS",
  "AWS ECR",
  "AWS ECS",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "CI/CD",
];

export const stackGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "REST APIs"],
  },
  {
    label: "AI & LLM",
    items: ["LangChain", "LangGraph", "Tavily", "RAG & agents"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "AWS ECR", "AWS ECS", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export const tools = ["VS Code", "GitHub", "Docker"];

export const services = [
  {
    number: "01",
    title: "Frontend engineering",
    description:
      "Production React and Next.js apps with typed, testable components and motion that never gets in the way.",
    points: ["App Router & server components", "Design systems in Tailwind", "GSAP & Lenis motion work"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Node.js and Express services with MongoDB, Redis and REST APIs — built for scale and real-time data.",
    points: ["REST & microservices", "MongoDB & Redis", "Socket.IO live data"],
  },
  {
    number: "03",
    title: "AI & LLM features",
    description:
      "LangChain and LangGraph pipelines that add real search, retrieval and agent behaviour to a product.",
    points: ["RAG & tool-calling agents", "Tavily & web search", "Prompt evaluation & guardrails"],
  },
  {
    number: "04",
    title: "Cloud & delivery",
    description:
      "Containerised deploys with Docker and Kubernetes, images pushed to ECR and released on ECS via CI/CD.",
    points: ["Docker & Kubernetes", "AWS ECR / ECS releases", "GitHub Actions CI/CD"],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  tech: string[];
  href?: string;
  year: string;
  image?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "coffee",
    name: "Coffee",
    summary:
      "Coffee recipe site with AI powered search, built on LangChain agents and smooth scroll animation.",
    description:
      "A recipe explorer for coffee drinks: browse step-by-step recipes, or ask the built-in assistant to search for you. React and Tailwind power the interface, LangChain and LangGraph run the search agent with Tavily for live web results, and GSAP with Lenis handle page transitions and scroll. Deployed as a static build on GitHub Pages.",
    tech: ["React", "Tailwind CSS", "LangChain", "LangGraph", "Tavily", "GSAP", "Lenis"],
    href: "https://coffee.devbysandeep.in/",
    image: "/images/coffee-screenshot.png",
    images: ["/images/coffee-screenshot.png"],
    year: "2026",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Dr APJ Abdul Kamal Technical University",
    period: "2018 — 2022",
  },
  {
    degree: "Full Stack Development in Coding",
    school: "Sheriyans Coding School",
    period: "2023",
  },
];
