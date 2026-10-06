export interface SkillGroup { id: string; label: string; items: string[] }
export const skillGroups: SkillGroup[] = [
  { id: "languages", label: "Languages", items: ["Python", "Java", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { id: "frameworks", label: "Frameworks", items: ["Flask", "Django", "Node.js", "Express"] },
  { id: "databases", label: "Databases", items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
  { id: "development", label: "Development", items: ["REST APIs", "MVC", "CRUD", "OOP", "JWT"] },
  { id: "tools", label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Trello"] },
  { id: "methodologies", label: "Methodologies", items: ["Scrum", "Kanban", "Waterfall", "XP"] },
];
