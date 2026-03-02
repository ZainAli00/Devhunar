import Section from '../components/ui/Section';

const stats = [
  { value: '80+', label: 'Projects Shipped', emoji: '🚀', color: '#D4F1E4' },
  { value: '50+', label: 'Happy Clients', emoji: '🤝', color: '#FFE4E4' },
  { value: '500+', label: 'Cups of Coffee', emoji: '☕', color: '#FEF3C7' },
  { value: '97%', label: 'Satisfaction Rate', emoji: '⭐', color: '#EDE9FE' },
];

export default function Stats() {
  return (
    <section className="bg-mint py-16">
      <div className="max-w-5xl mx-auto px-5">
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl p-6 text-center shadow-soft hover:-translate-y-1 transition-all duration-300 hover:shadow-soft-lg"
                style={{ backgroundColor: stat.color }}
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="font-display font-black text-dark text-4xl leading-none">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Marquee strip */}
        <Section>
          <div className="mt-10 overflow-hidden">
            <div className="flex gap-4 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
              {Array.from({ length: 3 }).flatMap(() =>
                ['React', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Stripe', 'TypeScript', 'Tailwind', 'Zod', 'AWS'].map((tech) => (
                  <span
                    key={`${tech}-${Math.random()}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-gray-700 flex-shrink-0"
                  >
                    {tech}
                  </span>
                ))
              )}
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
