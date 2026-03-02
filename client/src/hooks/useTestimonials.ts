import { testimonials } from '../data/testimonials';
import type { Testimonial } from '../types';

export function useTestimonials(): { data: Testimonial[]; isLoading: false; isError: false } {
  return { data: testimonials, isLoading: false, isError: false };
}
