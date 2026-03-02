export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  outcome: string;
  color: string;
  problem: string[];
  solution: string[];
  stack: string[];
  role: string;
  timeline: string;
  team: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projectId: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
