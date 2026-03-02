import Section from '../components/ui/Section';
import PricingCard from '../components/ui/PricingCard';
import Sticker from '../components/ui/Sticker';

const tiers = [
  {
    name: 'Starter',
    price: '$3,000',
    period: 'project',
    description: 'A lean MVP to validate your idea fast. Great for solo founders and early-stage startups.',
    features: [
      'Up to 6 weeks delivery',
      '1 platform (web or mobile)',
      'Up to 8 screens / pages',
      'Basic auth & database',
      '1 third-party integration',
      '2 weeks post-launch support',
    ],
    color: '#D4F1E4',
    badge: '🌱 get going',
    popular: false,
    ctaLabel: 'Let\'s build it',
  },
  {
    name: 'Growth',
    price: '$6,000',
    period: 'project',
    description: 'A full-featured product ready for real users. This is where most of our clients start.',
    features: [
      'Up to 10 weeks delivery',
      'Web + mobile or two platforms',
      'Up to 20 screens / pages',
      'Auth, payments, file uploads',
      'Up to 4 third-party integrations',
      'Admin dashboard',
      '4 weeks post-launch support',
      'Analytics wired up',
    ],
    color: '#EDE9FE',
    badge: '🔥 most popular',
    popular: true,
    ctaLabel: 'Start the conversation',
  },
  {
    name: 'Scale',
    price: '$20,000',
    period: 'project',
    description: 'Enterprise-grade delivery for complex products. Dedicated team, full ownership.',
    features: [
      'Custom timeline',
      'Unlimited platforms',
      'Complex workflows & automations',
      'AI/ML feature integration',
      'Custom infrastructure setup',
      'Full design system',
      '3 months post-launch support',
      'SLA guarantee',
      'Dedicated PM + Slack channel',
    ],
    color: '#FEF3C7',
    badge: '💎 full power',
    popular: false,
    ctaLabel: 'Talk to Zain',
  },
];

export default function Pricing() {
  const handleCta = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <Sticker
              emoji="🍦"
              label="your pick"
              rotate={5}
              color="#FFE4E4"
              className="inline-flex mb-6"
              animate="float-slow"
            />
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Pick your{' '}
              <span
                className="inline-block px-3 rounded-xl"
                style={{ backgroundColor: '#FEF3C7' }}
              >
                flavor
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              Transparent prices. No retainer lock-ins. No surprise invoices. Pay per project.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} onCta={handleCta} />
            ))}
          </div>
        </Section>

        {/* Custom / Enterprise callout */}
        <Section>
          <div className="mt-10 rounded-3xl bg-dark text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-lg">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🤝</span>
                <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Custom</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl">
                Need something custom?
              </h3>
              <p className="mt-2 text-white/70 max-w-md leading-relaxed">
                Ongoing retainer, equity deals, or a scope that doesn&apos;t fit the boxes above — let&apos;s talk.
                Zain will hop on a call personally.
              </p>
            </div>
            <button
              onClick={handleCta}
              className="flex-shrink-0 px-8 py-4 bg-white text-dark rounded-2xl font-bold hover:bg-gray-100 transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
            >
              Get a custom quote →
            </button>
          </div>
        </Section>

        {/* Fine print */}
        <Section>
          <p className="mt-6 text-center text-xs text-gray-400">
            All prices are starting points. Final scope and pricing agreed before any work begins.
            No deposits until you&apos;re happy with the plan.
          </p>
        </Section>
      </div>
    </section>
  );
}
