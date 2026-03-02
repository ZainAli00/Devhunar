import { projects } from '../data/projects';
import type { Project } from '../types';

export function useProjects(): { data: Project[]; isLoading: false; isError: false } {
  return { data: projects, isLoading: false, isError: false };
}
