import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Project, ApiResponse } from '../types';

async function fetchProjects(): Promise<Project[]> {
  const { data } = await axios.get<ApiResponse<Project[]>>('/api/projects');
  return data.data;
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
  });
}
