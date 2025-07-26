import { Skill } from '../types';

export const skills: (Skill & { category: string })[] = [
  // Programming
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'Golang', level: 85, category: 'Programming' },
  { name: 'Java', level: 80, category: 'Programming' },
  { name: 'C/C++', level: 75, category: 'Programming' },
  // Web Tech
  { name: 'HTML/CSS', level: 95, category: 'Web Tech' },
  { name: 'JavaScript', level: 85, category: 'Web Tech' },
  { name: 'ReactJS', level: 80, category: 'Web Tech' },
  { name: 'NodeJS', level: 75, category: 'Web Tech' },
  // Tools
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'SQL', level: 85, category: 'Tools' },
  { name: 'Postman', level: 85, category: 'Tools' },
  { name: 'MongoDB', level: 80, category: 'Tools' },
  // Soft Skills
  { name: 'Leadership', level: 95, category: 'Soft Skills' },
  { name: 'Problem Solving', level: 90, category: 'Soft Skills' },
  { name: 'Team Management', level: 85, category: 'Soft Skills' },
  { name: 'Marketing', level: 80, category: 'Soft Skills' },
]; 