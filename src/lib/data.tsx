import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

import LogoJavascript from "../../public/images/logos/icon-javascript.svg";
import LogoTypescript from "../../public/images/logos/icon-typescript.svg";
import LogoPython from "../../public/images/logos/icon-python.svg";
import LogoDjango from "../../public/images/logos/icon-django.svg";
import LogoFastApi from "../../public/images/logos/icon-fastapi.svg";
import LogoFlask from "../../public/images/logos/icon-flask.svg";
import LogoPHP from "../../public/images/logos/icon-php.svg";
import LogoLaravel from "../../public/images/logos/icon-laravel.svg";
import LogoSymphony from "../../public/images/logos/icon-symphony.svg";
import LogoGo from "../../public/images/logos/icon-go.svg";
import LogoJava from "../../public/images/logos/icon-django.svg";
import LogoCSharp from "../../public/images/logos/icon-django.svg";
import LogoReact from "../../public/images/logos/icon-react.svg";
import LogoNextjs from "../../public/images/logos/icon-nextjs.svg";
import LogoNodejs from "../../public/images/logos/icon-nodejs.svg";
import LogoExpress from "../../public/images/logos/icon-express.svg";
import LogoExpressLight from "../../public/images/logos/icon-express-light.svg";
import LogoNest from "../../public/images/logos/icon-nest.svg";
import LogoSocket from "../../public/images/logos/icon-socket.svg";
import LogoSocketLight from "../../public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "../../public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "../../public/images/logos/icon-mongodb.svg";
import LogoSass from "../../public/images/logos/icon-sass.svg";
import LogoTailwindcss from "../../public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "../../public/images/logos/icon-figma.svg";
import LogoCypress from "../../public/images/logos/icon-cypress.svg";
import LogoCypressLight from "../../public/images/logos/icon-cypress-light.svg";
import LogoStorybook from "../../public/images/logos/icon-storybook.svg";
import LogoGit from "../../public/images/logos/icon-git.svg";
import LogoMarketIn from "../../public/images/logos/logo.png";

import LogoUpwork from "../../public/images/logos/logo-bunzi.png";
import LogoGreenApex from "../../public/images/logos/logo-bct.png";
import LogoGreenApexLight from "../../public/images/logos/logo-bct.png";
import LogoDotnpixel from "../../public/images/logos/logo-trusoft.png";
import LogoDotnpixelLight from "../../public/images/logos/logo-trusoft.png";

import ProjectNikita from "../../public/images/nikita.png";
import ProjectKunibi from "../../public/images/kunibi.jpeg";
import ProjectEsther from "../../public/images/esther.jpeg";

import AvatarKrisztian from "../../public/images/avatar-krisztian.png";
import AvatarEugen from "../../public/images/avatar-eugen.png";
import AvatarDummy from "../../public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/PeaceOloruntoba",
  GITHUB_REPO: "https://github.com/PeaceOloruntoba/peace.codes",
  TWITTER: "https://twitter.com/PeaceEdgeTech",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/PeaceOloruntoba",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/PeaceEdgeTech",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/peacecodes22",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/peasca-inc/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  // Additional languages and frameworks
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Django",
    logo: LogoDjango,
    url: "https://www.djangoproject.com/",
  },
  {
    label: "FastAPI",
    logo: LogoFastApi,
    url: "https://fastapi.tiangolo.com/",
  },
  {
    label: "Flask",
    logo: LogoFlask,
    url: "https://flask.palletsprojects.com/",
  },
  {
    label: "PHP",
    logo: LogoPHP,
    url: "https://www.php.net/",
  },
  {
    label: "Laravel",
    logo: LogoLaravel,
    url: "https://laravel.com/",
  },
  {
    label: "Symfony",
    logo: LogoSymphony,
    url: "https://symfony.com/",
  },
  {
    label: "Go",
    logo: LogoGo,
    url: "https://go.dev/",
  },
  {
    label: "Gin (Go)",
    url: "https://gin-gonic.com/",
  },
  {
    label: "Echo (Go)",
    url: "https://echo.labstack.com/",
  },
  {
    label: "Java",
    url: "https://www.oracle.com/java/",
  },
  {
    label: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
  },
  {
    label: "C#",
    url: "https://dotnet.microsoft.com/languages/csharp",
  },
  {
    label: ".NET",
    url: "https://dotnet.microsoft.com/",
  },
  {
    label: "ASP.NET Core",
    url: "https://learn.microsoft.com/aspnet/core",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMarketIn,
    logoAlt: "MarketIN logo",
    position: "Software Engineer",
    startDate: new Date(2025, 0),
    currentlyWorkHere: true,
    summary: [
      "Worked on mobile app using Flutter, Dart, React Native, Expo.",
      "Worked on web app, including JavaScript, Node, React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  {
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "Full Stack Developer",
    startDate: new Date(2023, 4),
    currentlyWorkHere: true,
    summary: [
      "Worked on mobile app using Flutter, Dart, React Native, Expo.",
      "Worked on web app, including JavaScript, Node, React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  {
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: "Greenapex logo",
    position: "Software Developer Intern",
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 8),
    summary: [
      "worked on various live projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects.",
    ],
  },
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: "Dotnpixel logo",
    position: "Android Developer Intern",
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 8),
    summary: [
      "Worked as a mobile developer (C / C++).",
      "Built a POS system using C and C++",
      "Designed applications on Prolin OS. (Linux)",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Kunibi Software",
    description:
      "A platform for fashion designers and stylists, as well as users and customers getting their wears and new trend styles easily in a few simple clicks.",
    url: "https://kunibi.vercel.app",
    previewImage: ProjectKunibi,
    technologies: [
      "React",
      "JavaScript",
      "Zustand",
      "Tailwindcss",
      "Express.js",
      "MongoDB",
      "Styled Components",
      "Context API",
      "Vercel",
      "Render",
    ],
  },
  {
    name: "Nikita Restaurant AI",
    description:
      "A cross-platform software for restaurants to help you grow your business and leverage on the use of personalized trained AI, backed with scalable back-end infrastructure. and AI system",
    url: "https://nikita-theta.vercel.app",
    previewImage: ProjectNikita,
    technologies: [
      "React",
      "Node.js",
      "JavaScript",
      "Tailwindcss",
      "Material UI",
      "Zustand",
      "React Native",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Expo Go",
      "Nativewind",
      "Open API",
      "Vercel",
      "Render",
    ],
  },
  {
    name: "Esther Ekoko Portfolio",
    description:
      "A platform for renting a flat or room in Nigeria. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://esther-ekoko.vercel.app",
    previewImage: ProjectEsther,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "React Query",
      "Vercel",
    ],
  },
  {
    name: "Nigeria States API",
    description:
      "A platform for renting a flat or room in Nigeria. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://nigeria-states-free-api.onrender.com/",
    previewImage: ProjectEsther,
    technologies: [
      "JavaScript",
      "Node.js",
      "Firebase",
      "Express",
      "Nodemon",
      "Render",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Peace and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Peace was extremely easy and pleasant to work with and he truly cares about the project being a success. Peace has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
