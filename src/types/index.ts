import { MediaItem } from '../components/ProjectMedia';

export type ThemeType = 'light' | 'dark';

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  period?: string;
  details?: string[];
  media?: MediaItem[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}