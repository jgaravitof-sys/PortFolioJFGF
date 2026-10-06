export type ProjectKind = "vision" | "security" | "vet" | "inventory" | "distributed" | "iot";
export type ProjectStatus = "IN DEVELOPMENT" | "SOURCE AVAILABLE" | "LIVE";
export interface Project {
  id: number; slug: string; title: string; description: string; technologies: string[];
  status: ProjectStatus; type: string; kind: ProjectKind;
  githubUrl: string | null; liveUrl: string | null; // liveUrl: pega aquí la URL de Render cuando exista
  features: string[]; architecture: string | null;
}
const gh = (repo: string) => `https://github.com/jgaravitof-sys/${repo}`;
const env = (v: string | undefined) => (v && v.length > 0 ? v : null);

export const projects: Project[] = [
  { id: 1, slug: "vigilancia-ia", title: "Sistema de Vigilancia IA", kind: "vision", type: "Computer Vision",
    description: "Sistema de vigilancia inteligente orientado al análisis de video, detección y seguimiento de objetos y análisis de situaciones mediante inteligencia artificial.",
    technologies: ["Python", "Computer Vision", "YOLO", "IA"], status: "IN DEVELOPMENT",
    githubUrl: gh("Sistema_Vigilancia_OptimizadoIA"), liveUrl: null,
    features: ["Análisis de video", "Detección y seguimiento de objetos", "Análisis de situaciones con IA"], architecture: null },
  { id: 2, slug: "ciberseguridad", title: "Sistema de Gestión de Incidentes de Ciberseguridad", kind: "security", type: "Full-stack Web",
    description: "Sistema web para registrar, asignar y realizar seguimiento de incidentes de ciberseguridad, incorporando autenticación, roles y auditoría.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"], status: "SOURCE AVAILABLE",
    githubUrl: gh("Sistema_Incidentes_CiberSeguridad"), liveUrl: null,
    features: ["Autenticación JWT y sistema de roles", "REST API para registro, asignación y rastreo de incidentes", "Auditoría"], architecture: null },
  { id: 3, slug: "veterinaria", title: "Sistema Web de Gestión Veterinaria", kind: "vet", type: "Full-stack Web",
    description: "Plataforma web para gestionar citas, historiales y procesos de una clínica veterinaria mediante autenticación basada en roles.",
    technologies: ["Flask", "MySQL", "JavaScript"], status: "SOURCE AVAILABLE",
    githubUrl: gh("SGI_Veterinaria_Web"), liveUrl: null,
    features: ["Autenticación por roles", "Gestión de citas e historiales clínicos", "Chatbot asistente integrado"], architecture: "Arquitectura MVC" },
  { id: 4, slug: "inventarios", title: "Sistema de Inventarios y Ventas", kind: "inventory", type: "Desktop App",
    description: "Sistema de gestión de inventarios y ventas con operaciones CRUD, base de datos relacional y generación de reportes PDF.",
    technologies: ["Python", "Tkinter", "SQLite", "ReportLab"], status: "SOURCE AVAILABLE",
    githubUrl: gh("SGII_Tecnosuministros"), liveUrl: null,
    features: ["CRUD completo con interfaz gráfica", "Base de datos relacional normalizada", "Reportes PDF"], architecture: null },
  { id: 5, slug: "cliente-servidor", title: "Sistema Distribuido Cliente-Servidor", kind: "distributed", type: "Distributed Systems",
    description: "Proyecto académico orientado a comunicación entre aplicaciones distribuidas y arquitectura cliente-servidor.",
    technologies: ["Java", "Sockets / RMI", "Comunicación distribuida"], status: "IN DEVELOPMENT",
    githubUrl: env(process.env.NEXT_PUBLIC_PROJECT_05_REPO), liveUrl: null,
    features: ["Comunicación entre aplicaciones distribuidas", "Arquitectura cliente-servidor"], architecture: "Cliente-servidor" },
  { id: 6, slug: "riego-inteligente", title: "Sistema de Riego Automático Inteligente", kind: "iot", type: "IoT",
    description: "Sistema orientado a automatizar el riego mediante sensores de humedad y control inteligente, buscando optimizar el consumo de agua y mejorar el cuidado de plantas/cultivos.",
    technologies: ["IoT", "Sensores", "Microcontrolador", "Backend / Web"], status: "IN DEVELOPMENT",
    githubUrl: env(process.env.NEXT_PUBLIC_PROJECT_06_REPO), liveUrl: null,
    features: ["Sensores de humedad", "Control inteligente del riego"], architecture: null },
];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
