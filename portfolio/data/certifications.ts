export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  /** Enlace directo al certificado. */
  url: string;
}

export const certifications: Certification[] = [
  {
    id: "seguridad-informatica",
    name: "Fundamentos de Seguridad Informática",
    issuer: "Fundación Capacítate para el Empleo",
    url: "https://drive.google.com/file/d/1qs6yqWHimJiCPRD1bhSiia1rCZZeLvdv/view?usp=sharing",
  },
  {
    id: "etica-profesional",
    name: "Cátedra de Ética Profesional",
    issuer: "Consejo Profesional Nacional de Ingeniería (COPNIA)",
    url: "https://drive.google.com/file/d/1K99GDA1TZ0XzsI-kLmgqd9B-KQBMG7Q_/view?usp=sharing",
  },
  {
    id: "react-js",
    name: "React JS",
    issuer: "Cursa",
    date: "Junio 2026",
    url: "https://drive.google.com/file/d/1WnWW0VjMt7dRoVketfgDPWijLDgbzHEM/view?usp=sharing",
  },
];
