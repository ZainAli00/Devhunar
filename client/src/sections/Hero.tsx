import Sticker from '../components/ui/Sticker';
import Pill from '../components/ui/Pill';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex flex-col items-center justify-center pt-20 pb-0 overflow-hidden"
    >
      {/* Background doodles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Wavy lines top-right */}
        <svg
          className="absolute -top-10 -right-20 w-64 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M${10 + i * 20},10 Q${60 + i * 20},${50 + i * 10} ${110 + i * 20},10`}
              fill="none"
              stroke="#1C1C2E"
              strokeWidth="1.5"
            />
          ))}
        </svg>
        {/* Dots pattern bottom-left */}
        <svg
          className="absolute bottom-20 -left-10 w-48 opacity-10"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={16 + col * 32}
                cy={16 + row * 32}
                r="4"
                fill="#1C1C2E"
              />
            ))
          )}
        </svg>
      </div>

      {/* Floating stickers */}
      <Sticker
        emoji="🚀"
        label="ship it"
        rotate={-8}
        color="#D4F1E4"
        className="absolute top-28 left-8 md:left-24 hidden sm:flex"
        animate="float"
      />
      <Sticker
        emoji="⚡"
        label="zippy"
        rotate={6}
        color="#FEF3C7"
        className="absolute top-36 right-8 md:right-24 hidden sm:flex"
        animate="float-slow"
      />
      <Sticker
        emoji="✨"
        label="no drama"
        rotate={-4}
        color="#EDE9FE"
        className="absolute bottom-40 left-12 md:left-32 hidden sm:flex"
        animate="float-fast"
      />
      <Sticker
        emoji="💅"
        label="polished"
        rotate={5}
        color="#FFE4E4"
        className="absolute bottom-32 right-12 md:right-32 hidden sm:flex"
        animate="float-slow"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft mb-8 border border-gray-100">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
          <span className="text-sm font-medium text-gray-600">Now taking projects for Q2 2025</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-dark leading-[0.95] tracking-tight text-[clamp(2.8rem,8vw,6.5rem)]">
          We built the
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">rocket,</span>
            {/* Underline squiggle */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 320 12"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2,6 Q40,0 80,6 Q120,12 160,6 Q200,0 240,6 Q280,12 318,6"
                fill="none"
                stroke="#D4F1E4"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          <span
            className="relative inline-block px-4 py-1 rounded-2xl"
            style={{ backgroundColor: '#D4F1E4' }}
          >
            you fly it.
          </span>
        </h1>

        <p className="mt-8 text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Devhunar is your go-to studio for{' '}
          <strong className="text-dark">App & Web Development</strong>. We turn
          your ideas into products people actually use.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 bg-dark text-white rounded-2xl font-bold text-base hover:bg-dark-soft transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-soft-lg"
          >
            Start a Project →
          </button>
          <button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-4 bg-white text-dark rounded-2xl font-bold text-base hover:bg-gray-50 transition-all duration-200 border border-gray-200 hover:scale-[1.02]"
          >
            See our work
          </button>
        </div>

        {/* Pill tags */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <Pill color="mint" size="sm">📱 Mobile Apps</Pill>
          <Pill color="lilac" size="sm">🌐 Web Apps</Pill>
          <Pill color="butter" size="sm">⚙️ Backend APIs</Pill>
          <Pill color="blush" size="sm">🎨 Product Design</Pill>
        </div>
      </div>

      {/* Orbit circle */}
      <div className="relative mt-16 w-full max-w-md mx-auto h-64 flex items-center justify-center">
        {/* Outer dashed ring */}
        <div className="absolute w-56 h-56 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow" />
        {/* Inner solid ring */}
        <div className="absolute w-36 h-36 rounded-full border-2 border-gray-200" />
        {/* Center badge */}
        <div className="relative z-10 w-28 h-28 rounded-full bg-dark flex flex-col items-center justify-center shadow-soft-lg text-white">
          <span className="font-display font-black text-2xl leading-none">DH</span>
          <span className="text-[10px] text-white/60 mt-0.5 tracking-widest">STUDIO</span>
        </div>
        {/* Orbit labels */}
        {[
          { label: 'APP DEV', angle: -30, color: '#D4F1E4', x: '78%', y: '10%' },
          { label: 'WEB DEV', angle: 10, color: '#EDE9FE', x: '75%', y: '65%' },
          { label: 'DESIGN', angle: -5, color: '#FEF3C7', x: '0%', y: '60%' },
          { label: 'API', angle: 8, color: '#FFE4E4', x: '5%', y: '15%' },
        ].map(({ label, angle, color, x, y }) => (
          <div
            key={label}
            className="absolute text-xs font-bold px-3 py-1.5 rounded-full shadow-soft"
            style={{
              backgroundColor: color,
              color: '#1C1C2E',
              left: x,
              top: y,
              transform: `rotate(${angle}deg)`,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center gap-2 animate-float pb-10">
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">scroll</span>
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-400" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
