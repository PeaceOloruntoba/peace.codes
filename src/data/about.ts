export interface AboutContent {
  headline: string;
  subheadline: string;
  paragraphs: string[];
  mainTools: string[];
  additionalFrameworks: string[];
  locationStatus: string;
  githubUrl: string;
}

export const aboutContent: AboutContent = {
  headline: "Peace Oloruntoba 👋",
  subheadline:
    "Driven Software Engineer Building Scalable, Cross-Platform Solutions",
  paragraphs: [
    "While my foundation is built strictly in engineering rather than design, I bring a developer's precision to crafting functional, performant digital experiences. My core technical strengths lie in TypeScript, PHP, and Go, which I leverage as my primary tools to build robust backend systems and intuitive frontends.",
    "I am truly a polyglot engineer, equally comfortable working across frontend, backend, and mobile application development. Since starting my journey in 2021, I have successfully applied my skills in areas ranging from AI integration to blockchain applications. My versatility allows me to operate effectively as a focused lone ranger or a collaborative, communicative team player, thriving in the unique environments offered by both fast-paced startups and grown companies.",
    "Academically, I hold a B.Sc. in Computer Science with a Second Class Upper distinction. My background is well-suited to complex problem-solving and architectural design. I'm currently based in Lagos, Nigeria, but I am actively seeking and open to global remote opportunities.",
  ],
  mainTools: [
    "TypeScript",
    "PHP",
    "Go",
    "Python",
    "C",
    "C++",
    "Java",
    "JavaScript",
  ],
  additionalFrameworks: [
    "React",
    "Next.js",
    "Vue",
    "Node.js",
    "Express",
    "Nest.js",
    "Django",
    "Laravel",
  ],
  locationStatus: "Lagos, Nigeria | Open to Global Remote Roles",
  githubUrl: "https://github.com/PeaceOloruntoba",
};
