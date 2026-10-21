export interface SkillGroup {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  symbol: string;
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🖥",
    color: "#a3e635",
    skills: [
      { name: "HTML", symbol: "HT" },
      { name: "CSS", symbol: "CS" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: "⌨",
    color: "#67e8f9",
    skills: [
      { name: "C", symbol: "C" },
      { name: "Java", symbol: "Jv" },
      { name: "Python", symbol: "Py" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄",
    color: "#c084fc",
    skills: [{ name: "MySQL", symbol: "Sq" }],
  },
  {
    id: "tools",
    label: "Dev Tools",
    icon: "🛠",
    color: "#fb923c",
    skills: [
      { name: "Git", symbol: "Gt" },
      { name: "GitHub", symbol: "GH" },
      { name: "VS Code", symbol: "VS" },
      { name: "Antigravity", symbol: "AG" },
    ],
  },
];
