// src/data/testimonialsData.ts

export interface TestimonialItem {
  id: number;
  clientName: string;
  role: string;
  company: string;
  testimonialText: string;
  avatarUrl?: string; // Add your custom client image paths here later
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    clientName: "John Doe",
    role: "Founder & CEO",
    company: "Upwork Client",
    testimonialText:
      "Peace is an exceptional software engineer. He stepped in and delivered clean, highly maintainable TypeScript code ahead of schedule. His ability to work independently while keeping communication flawless makes him a highly valued team asset.",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    role: "Product Manager",
    company: "Tech StartUp",
    testimonialText:
      "Working with Peace was a fantastic experience. He completely developed our mobile tracking application from scratch to production with zero supervision. His deep technical knowledge across backend systems and cross-platform mobile frameworks is highly impressive.",
  },
  {
    id: 3,
    clientName: "Alex Johnson",
    role: "Chief Technology Officer",
    company: "LogicPoint Partner",
    testimonialText:
      "An absolute professional polyglot developer. Peace integrated complex AI functionalities using Gemini and OpenAI APIs into our ecosystem with ease. He handles tight production deadlines gracefully and brings great positive energy to our engineering squad.",
  },
];
