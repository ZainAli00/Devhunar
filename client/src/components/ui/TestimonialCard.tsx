import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  color?: string;
}

export default function TestimonialCard({ testimonial, color = '#FFF8F2' }: TestimonialCardProps) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className="rounded-3xl p-7 shadow-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
      style={{ backgroundColor: color }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="#F59E0B" className="w-4 h-4">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {/* Quote */}
      <p className="text-gray-700 leading-relaxed flex-1 text-[0.95rem]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-bold text-dark text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
