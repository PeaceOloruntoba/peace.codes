export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  locationStatus: string;
  duration: string;
  logoUrl: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer & CTO",
    company: "Bunzi Tech",
    locationStatus: "Fully Remote",
    duration: "May 2023 - Present",
    logoUrl: "/images/logos/logo-bunzi.png",
    achievements: [
      "Steer the technical vision and product roadmap, orchestrating full-stack development using Flutter, JavaScript, TypeScript, Python, and PHP.",
      "Architect and integrate advanced AI systems and multi-currency digital payment infrastructures safely scaling consumer transactions.",
      "Manage cross-functional teams of engineers, implementing rigorous code review standards and agile sprint methodologies to maximize product velocity.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "LogicPointNG",
    locationStatus: "Remote",
    duration: "March 2026 - Present",
    logoUrl: "https://www.logicpointng.com/assets/Logicpoint-Logo-m2IqMg1T.svg",
    achievements: [
      "Design and maintain scalable enterprise Customer Relationship Management (CRM) tools utilizing PHP and Node.js backend architectures.",
      "Optimize complex relational database schemas and API endpoints to significantly minimize system response latencies and eliminate operational bottlenecks.",
    ],
  },
  {
    id: 3,
    role: "Fullstack Mobile Software Engineer (Contract)",
    company: "CharisBlueWeb",
    locationStatus: "Solo Remote",
    duration: "Nov 2025 - May 2026",
    logoUrl: "https://charisblueweb.com/assets/images/resources/logo.png",
    achievements: [
      "Engineered a production-ready agricultural supply chain ecosystem completely from scratch, delivering the frontend web interface, mobile app, and backend.",
      "Utilized strict TypeScript end-to-end to manage real-time inventory tracking, location mapping features, and vendor checkout pipelines entirely as a solo engineer.",
    ],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "MarketIN AI",
    locationStatus: "Fully Remote",
    duration: "Jan 2025 - Jan 2026",
    logoUrl: "/images/logos/logo-marketin.png",
    achievements: [
      "Developed responsive, complex web dashboards using React and TypeScript for data-intensive workflows.",
      "Collaborated heavily within an engineering squad to design and deploy AI-driven analytics backend microservices using Python and Django.",
    ],
  },
  {
    id: 5,
    role: "Junior Software Engineer",
    company: "Viviane Health Ltd",
    locationStatus: "Remote",
    duration: "Sept 2025 - Dec 2025",
    logoUrl: "/images/logos/logo-viviane.png",
    achievements: [
      "Contributed to core product features at the intersection of HealthTech and FinTech utilizing PHP and the Laravel framework.",
      "Integrated secure third-party health insurance portals and financial billing APIs in compliance with strictly regulated industry data frameworks.",
    ],
  },
  {
    id: 6,
    role: "Fullstack Software Developer Intern",
    company: "Business Codes and Technology (BCT)",
    locationStatus: "Hybrid",
    duration: "March 2024 - September 2024",
    logoUrl: "/images/logos/logo-bct.png",
    achievements: [
      "Built multi-platform frontend architectures leveraging full JavaScript/TypeScript ecosystems alongside React and React Native Expo.",
      "Maintained modular server logic, executing clean code practices within a collaborative team environment to deploy scalable web and mobile solutions.",
    ],
  },
  {
    id: 7,
    role: "Fullstack Developer",
    company: "EasingLife Group of Companies (Ghana)",
    locationStatus: "Fully Remote",
    duration: "Dec 2022 - Dec 2024",
    logoUrl: "https://easinglife.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.527c17a9.png&w=96&q=75",
    achievements: [
      "Spearheaded web application ecosystems, custom E-commerce web engines, food delivery channels, and high-performance CMS platforms.",
      "Engineered robust frontend and server structures using modern TypeScript, core JavaScript, and PHP, resulting in stable cross-border platform functionality.",
    ],
  },
  {
    id: 8,
    role: "Android Developer Intern",
    company: "Trusoft Ltd",
    locationStatus: "Lagos, NG",
    duration: "July 2023 - Sept 2023",
    logoUrl: "/images/logos/logo-trusoft.png",
    achievements: [
      "Engineered embedded terminal software using C/C++ on specialized Linux-based Prolin OS tailored explicitly for Pax mobile hardware.",
      "Co-developed point-of-collection fintech applications used securely across Nigeria for financial cash collection and merchant remittance.",
      "Collaborated as a proactive engineering squad member to handle low-level device drivers and hardware abstraction layer integrations smoothly.",
    ],
  },
];
