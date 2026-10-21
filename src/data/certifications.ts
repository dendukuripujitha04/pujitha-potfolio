export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  dateRange?: string;
  credits?: string;
  hours?: string;
  accent: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: "python-fullstack",
    title: "Python Full Stack",
    issuer: "ExcelR EdTech Pvt. Ltd. in collaboration with APSCHE",
    issuerShort: "ExcelR EdTech × APSCHE",
    date: "11 July 2026",
    dateRange: "11 May 2026 – 11 July 2026",
    credits: "3 Credits",
    accent: "#a3e635",
    category: "Short-Term Internship",
  },
  {
    id: "digital-app-fundamentals",
    title: "Digital Application Fundamentals (STEM)",
    issuer: "FutureSkills Prime / IT-ITeS SSC NASSCOM",
    issuerShort: "FutureSkills Prime · NASSCOM",
    date: "11 February 2026",
    accent: "#67e8f9",
    category: "Industry Certification",
  },
  {
    id: "intro-generative-ai",
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM SkillsBuild",
    date: "10 February 2026",
    hours: "4 Learning Hours",
    accent: "#c084fc",
    category: "AI Certification",
  },
];
