import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import type { Testimonial, ApiResponse } from '../types';

async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data } = await api.get<ApiResponse<Testimonial[]>>('/testimonials');
  return data.data;
}

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000,
  });
}
