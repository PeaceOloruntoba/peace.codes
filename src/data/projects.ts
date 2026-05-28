// src/data/projectsData.ts

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  imageFallback: string; // Used to display initials if project images aren't loaded
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Kunibi Fashion Software",
    description:
      "A comprehensive SaaS platform built for professional fashion designers to streamline client management, store body measurements, catalog internal notes, and manage complex design lifecycles. Features an interactive Design Board to draw patterns alongside an AI Pattern Enhancer & Generator powered by Google Gemini AI.",
    techStack: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Gemini AI API",
      "Node.js",
    ],
    liveUrl: "https://kunibi.vercel.app",
    imageFallback: "KF",
  },
  {
    id: 2,
    title: "BunziMeal Planner",
    description:
      "An intelligent, cross-platform AI-driven meal planning and nutritional ecosystem. It features a personalized AI Nutritionist and AI Dietician that dynamically generates automated weekly meal schedules, builds optimized shopping lists, manages real-time pantry inventory, and executes detailed health and diet tracking tailored to custom user preferences.",
    techStack: [
      "TypeScript",
      "React Native",
      "Expo",
      "OpenAI API",
      "Node.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://bunzimeal-planner.vercel.app",
    imageFallback: "BM",
  },
  {
    id: 3,
    title: "Nikita Restaurant AI",
    description:
      "A highly scalable, cross-platform enterprise application built for the hospitality industry. It empowers independent restaurants to maximize commercial growth by deploying custom-trained, localized AI systems backed by a highly performance-optimized backend infrastructure to automate personalized guest interactions.",
    techStack: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "OpenAI API",
      "MongoDB",
    ],
    liveUrl: "https://nikita-theta.vercel.app",
    imageFallback: "NR",
  },
  {
    id: 4,
    title: "MyFarmSight",
    description:
      "A robust, production-ready agricultural supply chain ecosystem built completely from scratch and successfully deployed to production. This comprehensive platform consists of full-scale web modules linked seamlessly with native Android and iOS mobile applications published on the Google Play Store and Apple App Store.",
    techStack: [
      "TypeScript",
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    liveUrl: "https://myfarmsight.com",
    imageFallback: "MF",
  },
  {
    id: 5,
    title: "Nigeria States Free API",
    description:
      "An open-source developer tool providing a public, highly performant REST API to fetch comprehensive geographical information about Nigeria, including all states and their respective Local Government Areas (LGAs). Currently scaling the core datasets to safely map out population indices, total landmass calculations, and regional socio-political data points.",
    techStack: ["TypeScript", "Node.js", "Firebase", "Serverless Functions"],
    liveUrl: "https://nigeria-states-free-api.vercel.app",
    githubUrl: "https://github.com/PeaceOloruntoba",
    imageFallback: "NG",
  },
  {
    id: 6,
    title: "Esther Ekoko Portfolio",
    description:
      "A premium, lightning-fast digital portfolio website designed and optimized for modern web presence. Built leveraging advanced Next.js server architectural patterns and utility-first Tailwind CSS classes, backed by comprehensive programmatic Search Engine Optimization (SEO) mapping for pristine discoverability.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Semantic SEO",
      "Meta Optimization",
    ],
    liveUrl: "https://esther-ekoko.vercel.app",
    imageFallback: "EE",
  },
];
