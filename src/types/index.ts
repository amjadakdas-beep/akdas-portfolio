export type SkillCategory = 
  | 'Programming' 
  | 'Backend Development' 
  | 'AI & Machine Learning' 
  | 'Natural Language Processing' 
  | 'Frontend Development' 
  | 'Data & Storage' 
  | 'Developer Tools';

export type ProficiencyLevel = 'Used in Projects' | 'Currently Learning' | 'Fundamentals';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  solutionApproach: string;
  architectureDiagram?: string[];
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Research Prototype';
  isFeatured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  technicalDecisions: string[];
  limitations: string[];
  futureRoadmap: string[];
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
}