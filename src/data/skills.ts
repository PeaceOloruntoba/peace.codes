// src/data/skillsData.ts

export interface Skill {
  name: string;
  iconUrl: string; // Using high-quality, colorful SimpleIcons SVG CDN URLs
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export const skillsData: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
  },
  {
    name: "Go",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg",
  },
  {
    name: "PHP",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg",
  },
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
  },
  {
    name: "Java",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openjdk.svg",
  },
  {
    name: "C++",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg",
  },
  {
    name: "C",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/c.svg",
  },

  // Frameworks & Runtimes
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
  },
  {
    name: "Vue.js",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg",
  },
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
  },
  {
    name: "NestJS",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nestjs.svg",
  },
  {
    name: "Express",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg",
  },
  {
    name: "Fastify",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastify.svg",
  },
  {
    name: "Gin",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/go.svg",
  }, // Gin utilizes Go icon variant
  {
    name: "Echo",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbyte.svg",
  }, // Alternative distinct structural design
  {
    name: "Laravel",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
  },
  {
    name: "Django",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/django.svg",
  },
  {
    name: "Spring Boot",
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/springboot.svg",
  },

  // Specialized Infrastructure & Architecture (from screenshots)
  {
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
  },
  {
    name: "Docker",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
  },
  {
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
  },
  {
    name: "MongoDB",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg",
  },
];
