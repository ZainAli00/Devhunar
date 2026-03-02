import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import type { Project, ApiResponse } from '../types';

async function fetchProjects(): Promise<Project[]> {
  const { data } = await api.get<ApiResponse<Project[]>>('/projects');
  return data.data;
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000,
  });
}
