export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: "In Development" | "Completed" | "Concept";
  description: string;
  longDescription: string;
  technologies: string[];
  accent: string;
  motif: "agriculture" | "healthcare" | "chatbot";
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "agrisentinel-ai",
    title: "AgriSentinel AI",
    subtitle: "AI-Powered Smart Agriculture",
    category: "Smart Agriculture · AI · IoT",
    status: "In Development",
    description:
      "A smart agriculture platform combining AI-based crop disease detection, autonomous farm monitoring, digital-twin simulation, and intelligent recommendations to support farmers.",
    longDescription:
      "AgriSentinel AI is a comprehensive smart agriculture platform currently under development. It aims to combine AI-based crop disease detection using computer vision, autonomous farm monitoring via IoT sensors, digital-twin simulation of farm environments, and AI-driven recommendations — all to empower farmers with data-driven insights and reduce crop losses.",
    technologies: ["Python", "AI/ML", "IoT", "Digital Twin", "Computer Vision"],
    accent: "#84cc16",
    motif: "agriculture",
  },
  {
    slug: "medicare-ai",
    title: "Medicare AI",
    subtitle: "AI Healthcare Assistant",
    category: "Healthcare · AI · Voice",
    status: "In Development",
    description:
      "A healthcare platform under development for appointment booking, symptom analysis, medicine-related suggestions, precautions, and doctor recommendations with an AI and voice-assisted workflow.",
    longDescription:
      "Medicare AI is a healthcare technology platform in active development. It is designed to offer appointment booking, symptom analysis, medicine suggestions, precaution guidance, and doctor recommendations — all delivered through an AI-assisted and voice-enabled interface, aimed at making healthcare information more accessible.",
    technologies: ["Python", "NLP", "Voice AI", "Healthcare API"],
    accent: "#22d3ee",
    motif: "healthcare",
  },
  {
    slug: "simple-ai-chatbot",
    title: "Simple AI Chatbot",
    subtitle: "Rule-Based NLP Chatbot",
    category: "NLP · Conversational AI",
    status: "Completed",
    description:
      "A beginner-friendly NLP chatbot built using rule-based pattern matching for greetings, basic information queries, and conversational responses — with scope for AI/API integration.",
    longDescription:
      "This project is a foundational NLP chatbot built with rule-based pattern matching. It handles greetings, answers basic informational queries, and supports natural conversational flow. The architecture is designed to accommodate future AI/API integration as the project evolves. It serves as a practical exploration of conversational design and natural language processing fundamentals.",
    technologies: ["Python", "NLP", "Pattern Matching", "Rule-Based AI"],
    accent: "#a78bfa",
    motif: "chatbot",
  },
];
