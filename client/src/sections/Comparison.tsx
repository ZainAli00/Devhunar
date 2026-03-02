import Section from '../components/ui/Section';
import { Check, X } from 'lucide-react';

const rows = [
  { label: 'Transparent fixed pricing', others: false, devhunar: true },
  { label: 'Weekly working demos', others: false, devhunar: true },
  { label: 'Senior engineers (not juniors)', others: false, devhunar: true },
  { label: 'Full source code ownership', others: false, devhunar: true },
  { label: 'Honest scope estimates', others: false, devhunar: true },
  { label: 'Post-launch bug support', others: false, devhunar: true },
  { label: 'Scope creep surprises', others: true, devhunar: false },
  { label: 'Ghost you after launch', others: true, devhunar: false },
];

export default function Comparison() {
  return (
    <section className="bg-lilac py-24">
      <div className="max-w-5xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-bold bg-white/60 rounded-full px-4 py-1.5 mb-4 text-gray-600">
              why devhunar
            </span>
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Built different{' '}
              <span className="text-gray-400 font-black text-[0.85em]">(in a good way)</span>
            </h2>
          </div>
        </Section>

        <Section>
          <div className="rounded-3xl overflow-hidden shadow-soft-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-dark text-white">
              <div className="px-6 py-4 text-sm font-medium text-white/40">What you get</div>
              <div className="px-6 py-4 text-center">
                <span className="text-sm font-bold text-white/60">Other Agencies</span>
              </div>
              <div className="px-6 py-4 text-center bg-white/10 rounded-t-xl">
                <span className="text-sm font-extrabold text-white">Devhunar</span>
                <span className="ml-2 text-xs bg-mint text-green-900 rounded-full px-2 py-0.5">
                  us
                </span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'
                }`}
              >
                <div className="px-6 py-4 text-sm font-medium text-dark">{row.label}</div>
                <div className="px-6 py-4 flex items-center justify-center">
                  {row.others ? (
                    <Check size={18} className="text-orange-400" />
                  ) : (
                    <X size={18} className="text-red-400" />
                  )}
                </div>
                <div className="px-6 py-4 flex items-center justify-center bg-mint/10">
                  {row.devhunar ? (
                    <div className="w-6 h-6 rounded-full bg-dark flex items-center justify-center">
                      <Check size={13} className="text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <X size={13} className="text-red-500" strokeWidth={3} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA nudge */}
        <Section>
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              You&apos;ve been burned before. We get it.{' '}
              <strong className="text-dark">Let&apos;s fix that.</strong>
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-dark text-white rounded-2xl font-bold hover:bg-dark-soft transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-soft"
            >
              Talk to us →
            </button>
          </div>
        </Section>
      </div>
    </section>
  );
}
