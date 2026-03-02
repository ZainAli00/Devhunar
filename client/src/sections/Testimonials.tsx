import Section from '../components/ui/Section';
import TestimonialCard from '../components/ui/TestimonialCard';
import Sticker from '../components/ui/Sticker';
import { useTestimonials } from '../hooks/useTestimonials';

const cardColors = ['#FFF8F2', '#D4F1E4', '#EDE9FE', '#FFE4E4', '#FEF3C7', '#D4F1E4', '#FFF8F2'];

function SkeletonCard() {
  return (
    <div className="rounded-3xl p-7 bg-white/60 animate-pulse space-y-4">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded bg-gray-200" />
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="space-y-1.5">
          <div className="h-3.5 bg-gray-200 rounded w-24" />
          <div className="h-3 bg-gray-200 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { data: testimonials, isLoading, isError } = useTestimonials();

  return (
    <section className="bg-blush py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <Sticker
              emoji="🤭"
              label="embarrassingly good"
              rotate={-3}
              color="#FEF3C7"
              className="inline-flex mb-6"
              animate="float"
            />
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Clients talk{' '}
              <span
                className="inline-block px-3 rounded-xl"
                style={{ backgroundColor: '#D4F1E4' }}
              >
                &amp; we blush
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              Real words from real founders. We&apos;re not crying, you are.
            </p>
          </div>
        </Section>

        {isError ? (
          <Section>
            <div className="text-center py-12 text-gray-500">
              <p>Couldn&apos;t load testimonials. Check the server is running.</p>
            </div>
          </Section>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <Section key={i}>
                    <SkeletonCard />
                  </Section>
                ))
              : testimonials?.map((t, i) => (
                  <Section key={t.id}>
                    <TestimonialCard testimonial={t} color={cardColors[i % cardColors.length]} />
                  </Section>
                ))}
          </div>
        )}

        {/* Social proof strip */}
        <Section>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 py-6 bg-white/50 rounded-3xl">
            {[
              { value: '4.9/5', label: 'Average rating' },
              { value: '100%', label: 'Would recommend' },
              { value: '3×', label: 'Avg. client return rate' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display font-black text-dark text-3xl">{item.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
