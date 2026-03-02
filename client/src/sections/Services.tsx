import Section from '../components/ui/Section';
import Accordion from '../components/ui/Accordion';
import Sticker from '../components/ui/Sticker';

const services = [
  {
    id: 'mobile-web',
    icon: '📱',
    title: 'Mobile & Web Development',
    subtitle: 'React, React Native, Next.js, Node.js',
    content: (
      <div className="space-y-3">
        <p>
          We build pixel-perfect, production-grade applications for web and mobile — from MVP to
          enterprise. Our stack is modern, our code is clean, and our deadlines are real.
        </p>
        <ul className="space-y-2">
          {[
            'React & Next.js web apps (SEO-optimised, blazing fast)',
            'React Native cross-platform mobile apps (iOS + Android)',
            'Node.js + TypeScript REST and GraphQL APIs',
            'Real-time features: WebSockets, SSE, live collaboration',
            'Authentication, payments, file uploads — all wired up',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-green-600 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'product-design',
    icon: '🎨',
    title: 'Custom Product Design',
    subtitle: 'Figma, design systems, prototyping',
    content: (
      <div className="space-y-3">
        <p>
          Great software starts with great design. We craft user interfaces that feel intuitive,
          look polished, and convert — because we understand both the product and the pixels.
        </p>
        <ul className="space-y-2">
          {[
            'User research & competitive analysis',
            'Wireframes → high-fidelity prototypes in Figma',
            'Branded design systems that scale with your product',
            'Responsive layouts that look stunning on any screen',
            'Micro-interactions and animations that delight',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-purple-600 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'backend-engineering',
    icon: '⚙️',
    title: 'Backend Engineering',
    subtitle: 'APIs, databases, cloud infrastructure',
    content: (
      <div className="space-y-3">
        <p>
          Solid backends are boring to look at but critical to everything. We build scalable,
          secure server-side systems that don&apos;t buckle under real load.
        </p>
        <ul className="space-y-2">
          {[
            'Node.js / Express REST APIs with TypeScript',
            'PostgreSQL, MongoDB, Redis data architecture',
            'Third-party integrations: Stripe, Twilio, Plaid, OpenAI',
            'AWS / GCP deployment with CI/CD pipelines',
            'HIPAA, GDPR, and PCI-DSS compliance where needed',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-amber-600 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'ai-automation',
    icon: '🤖',
    title: 'AI & Automation',
    subtitle: 'OpenAI, LangChain, custom workflows',
    content: (
      <div className="space-y-3">
        <p>
          We wire AI into your product in ways that actually matter — not gimmicks, but features
          your users will pay for and your competitors won&apos;t see coming.
        </p>
        <ul className="space-y-2">
          {[
            'GPT-4o and Claude integration for smart features',
            'RAG pipelines for document Q&A and knowledge bases',
            'Automated workflows with n8n or custom Node.js agents',
            'AI-powered search, recommendations, and predictions',
            'Fine-tuning and prompt engineering for production accuracy',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-blue-600 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="max-w-5xl mx-auto px-5">
        <Section>
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Heading side */}
            <div className="md:w-2/5 flex-shrink-0">
              <div className="relative">
                <Sticker
                  emoji="🛠️"
                  label="the goods"
                  rotate={-6}
                  color="#D4F1E4"
                  className="mb-6"
                  animate="float-slow"
                />
                <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
                  What we do
                  <br />
                  <span className="text-gray-400">(and do</span>
                  <br />
                  <span
                    className="relative inline-block px-3 rounded-xl"
                    style={{ backgroundColor: '#FEF3C7' }}
                  >
                    really well)
                  </span>
                </h2>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  Four things. Done better than anyone else we know. That&apos;s the promise.
                </p>
                {/* mini doodle */}
                <svg
                  className="mt-8 w-20 opacity-20"
                  viewBox="0 0 80 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#1C1C2E" strokeWidth="2" strokeDasharray="6 4" />
                  <path d="M25,40 Q40,20 55,40 Q40,60 25,40" fill="#D4F1E4" />
                </svg>
              </div>
            </div>

            {/* Accordion side */}
            <div className="flex-1 w-full">
              <Accordion items={services} />
            </div>
          </div>
        </Section>
      </div>
    </section>
  );
}
