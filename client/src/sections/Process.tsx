import Section from '../components/ui/Section';
import Sticker from '../components/ui/Sticker';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We spend 60 minutes understanding your problem, your users, and what success actually looks like. No pitch. Just questions.',
    color: '#D4F1E4',
    emoji: '🎯',
  },
  {
    number: '02',
    title: 'Scoped Proposal',
    description:
      'You get a fixed-scope, fixed-price proposal within 48 hours. No sliding timelines, no surprise invoices. We scope tightly so we ship confidently.',
    color: '#EDE9FE',
    emoji: '📋',
  },
  {
    number: '03',
    title: 'Build in Sprints',
    description:
      'We work in weekly sprints. Every Friday you see new working software — not slide decks. You can give feedback, redirect, or celebrate.',
    color: '#FFE4E4',
    emoji: '⚡',
  },
  {
    number: '04',
    title: 'Ship & Support',
    description:
      'Launch day is just the beginning. We deploy, monitor, squash post-launch bugs, and hand you clean docs and a project debrief.',
    color: '#FEF3C7',
    emoji: '🚀',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-butter py-24">
      <div className="max-w-5xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <Sticker
              emoji="🍳"
              label="our recipe"
              rotate={4}
              color="#FFE4E4"
              className="inline-flex mb-6"
              animate="float-slow"
            />
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Our not-so{' '}
              <span
                className="inline-block px-3 rounded-xl"
                style={{ backgroundColor: '#D4F1E4' }}
              >
                secret sauce
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              Four steps. Zero fluff. Repeatable results.
            </p>
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <Section key={step.number}>
              <div
                className="rounded-3xl p-8 h-full hover:-translate-y-1 transition-all duration-300 hover:shadow-soft-lg shadow-soft"
                style={{ backgroundColor: step.color }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display font-black text-6xl text-dark/10 leading-none">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.emoji}</span>
                </div>
                <h3 className="font-display font-extrabold text-dark text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-[0.95rem]">{step.description}</p>
                {/* connector line for non-last items */}
                {i < steps.length - 1 && (
                  <div className="mt-4 flex items-center gap-1 text-xs text-gray-400 font-medium">
                    then →
                  </div>
                )}
              </div>
            </Section>
          ))}
        </div>

        {/* Timeline strip */}
        <Section>
          <div className="mt-12 bg-white/60 rounded-3xl p-6 shadow-soft">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">
              Typical timeline
            </p>
            <div className="flex items-center gap-0 overflow-x-auto pb-2">
              {['Week 1', 'Week 2–3', 'Week 4–6', 'Week 7–8', 'Launch 🎉'].map((label, i, arr) => (
                <div key={label} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-dark"
                      style={{ backgroundColor: steps[Math.min(i, 3)]?.color ?? '#D4F1E4' }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-xs text-gray-600 font-medium whitespace-nowrap">{label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-px w-8 md:w-16 bg-gray-200 mx-1 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
