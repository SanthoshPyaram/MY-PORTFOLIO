export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryBadgeClass: string;
  typeBadge: string;
  description: string;
  image: string;
  tags: string[];
  modalId: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  technologies: { name: string; badgeClass: string }[];
}

export interface SkillItem {
  name: string;
  icon: string;
  iconColor: string;
  status: string;
  statusClass: string;
  percentage: number;
  progressBarClass?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  items: SkillItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  badgeClass: string;
  icon: string;
  description: string;
}

export interface Achievement {
  title: string;
  badge: string;
  badgeClass: string;
  icon: string;
  iconBoxStyle?: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  scoreBadgeClass: string;
  status: string;
  streamOrFocus: string;
  details: string;
}

export interface SocialProfile {
  platform: string;
  url: string;
  icon: string;
  colorClass: string;
  title: string;
}

