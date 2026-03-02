export default function Footer() {
  const navGroups = [
    {
      heading: 'Company',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Our Work', href: '#projects' },
        { label: 'Process', href: '#process' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'Contact', href: '#contact' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ];

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M4 6h16M4 12h10M4 18h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="19" cy="17" r="4" fill="#D4F1E4" stroke="white" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="font-display font-extrabold text-xl">Devhunar</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your go-to App & Web Development Studio. We build the product. You take the credit.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="text-white/40 text-xs">CEO:</span>
              <span className="text-white font-semibold text-sm">Zain Ali</span>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
                {group.heading}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Devhunar. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-xs">Made with</span>
            <span className="text-xs text-white/50">React + Vite + Tailwind</span>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-10 pointer-events-none select-none overflow-hidden">
          <p className="font-display font-black text-white/5 text-[clamp(3rem,12vw,8rem)] leading-none tracking-tighter">
            DEVHUNAR
          </p>
        </div>
      </div>
    </footer>
  );
}
