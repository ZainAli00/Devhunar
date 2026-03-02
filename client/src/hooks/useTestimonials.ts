import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Testimonial, ApiResponse } from '../types';

async function fetchTestimonials(): Promise<Testimonial[]> {
  const { data } = await axios.get<ApiResponse<Testimonial[]>>('/api/testimonials');
  return data.data;
}

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
    staleTime: 5 * 60 * 1000,
  });
}
