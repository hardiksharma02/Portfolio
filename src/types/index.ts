// Personal Info
export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  cgpa?: string;
  score?: string;
  year?: string;
  duration?: string;
}

// Experience
export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

// Project
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  image?: string;
  githubUrl?: string;
}

// Skill
export interface Skill {
  name: string;
  level: number; // percent
  category: 'Programming' | 'Web Tech' | 'Tools' | 'Soft Skills';
  description: string;
}

// Certification
export interface Certification {
  name: string;
  description?: string;
}

// Leadership
export interface Leadership {
  title: string;
  organization: string;
  duration: string;
}

// Achievement
export interface Achievement {
  title: string;
  year?: string;
  description?: string;
} 