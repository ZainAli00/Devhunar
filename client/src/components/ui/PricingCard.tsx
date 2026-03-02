import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  color: string;
  badge?: string;
  ctaLabel?: string;
  popular?: boolean;
  onCta?: () => void;
}

export default function PricingCard({
  name,
  price,
  period = 'project',
  description,
  features,
  color,
  badge,
  ctaLabel = 'Get Started',
  popular = false,
  onCta,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg ${
        popular ? 'ring-2 ring-dark shadow-soft-lg' : 'shadow-soft'
      }`}
      style={{ backgroundColor: color }}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-dark text-white text-xs font-bold px-4 py-1.5 rounded-full">
          Most Popular
        </div>
      )}
      {badge && (
        <span className="inline-block text-xs font-bold bg-white/60 rounded-full px-3 py-1 mb-4 w-fit">
          {badge}
        </span>
      )}
      <p className="font-display font-extrabold text-dark text-2xl">{name}</p>
      <div className="mt-3 flex items-end gap-1">
        <span className="font-display font-black text-4xl text-dark">{price}</span>
        <span className="text-gray-600 text-sm mb-1">/ {period}</span>
      </div>
      <p className="mt-3 text-gray-700 text-sm leading-relaxed">{description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-dark flex items-center justify-center">
              <Check size={11} className="text-white" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onCta}
        className={`mt-8 w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
          popular
            ? 'bg-dark text-white hover:bg-dark-soft'
            : 'bg-white/70 text-dark hover:bg-white'
        }`}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
