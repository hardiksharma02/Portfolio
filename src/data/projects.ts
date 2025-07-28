import { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'ShreadBox - Secure File Sharing',
    description: 'A secure, privacy-focused file sharing service with automatic file destruction capabilities. Features end-to-end encryption and time-based self-destruction.',
    technologies: ['Go', 'Gin Framework', 'AES-GCM Encryption', 'Docker', 'RESTful API'],
    features: [
      'End-to-End Encryption with AES-GCM',
      'Time-Based Self-Destruction',
      'Download Limits & Zero Storage',
      'No Tracking & Complete Privacy'
    ],
    githubUrl: 'https://github.com/hardiksharma02/ShreadBox',
    image: '', // Add image path if available
  },
  {
    name: 'Krishi-Tech - Agricultural ML Platform',
    description: 'An intelligent agricultural technology platform that uses machine learning for crop recommendation and fertilizer prediction. Helps farmers make data-driven decisions for better yield.',
    technologies: ['Python', 'FastAPI', 'Jupyter Notebook', 'Machine Learning', 'HTML/CSS'],
    features: [
      'Crop Recommendation System with ML',
      'Fertilizer Prediction Algorithm',
      'Interactive Web Interface',
      'Data Analysis with Jupyter Notebooks',
      'MinMax Scaling for Better Accuracy'
    ],
    githubUrl: 'https://github.com/hardiksharma02/Minor-KrishiTech',
    image: '', // Add image path if available
  },
  {
    name: 'Student Drop-Out Analysis (SIH)',
    description: 'A comprehensive dashboard for analyzing student dropout patterns using data visualization and CSV processing. Built for Smart India Hackathon (SIH), this tool helps educational institutions identify and prevent student dropouts.',
    technologies: ['ReactJS', 'Ant Design', 'NodeJS', 'CSV Processing', 'Data Visualization'],
    features: [
      'Advanced CSV data extraction and processing',
      'Interactive data visualization dashboard',
      'Real-time analytics and insights',
      'Pattern recognition for dropout prediction',
      'User-friendly interface for educators'
    ],
    githubUrl: 'https://github.com/hs7898753/Student_Dropout_Dashboard',
    image: '', // Add image path if available
  },
]; 