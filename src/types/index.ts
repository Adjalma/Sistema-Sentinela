export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: 'development' | 'testing' | 'production' | 'planning';
  progress: number;
  technologies: string[];
  features: string[];
  challenges: string[];
  timeline: string;
  team: string[];
  domain?: string;
  github?: string;
  demo?: string;
  image: string;
  color: string;
  category: 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot' | 'desktop';
  priority: 'high' | 'medium' | 'low';
  lastUpdate: string;
  nextMilestone: string;
  funding?: 'self' | 'investor' | 'client' | 'open-source';
  complexity: 'low' | 'medium' | 'high' | 'expert';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  avatar: string;
  isOnline: boolean;
}

export interface ProjectStats {
  totalProjects: number;
  completedProjects: number;
  inDevelopment: number;
  totalTechnologies: number;
  teamMembers: number;
  linesOfCode: number;
  repositories: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  project?: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
