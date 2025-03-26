export type { Project } from '../data/projects';

export type ThemeType = 'light' | 'dark';

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