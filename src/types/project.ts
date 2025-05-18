export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  fullDescription?: string;
  features?: string[];
  screenshots?: string[];
  techStack?: string[];
  challenges?: string;
  solutions?: string;
  learnings?: string;
}