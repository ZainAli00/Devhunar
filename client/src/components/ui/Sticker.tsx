interface StickerProps {
  emoji: string;
  label: string;
  rotate?: number;
  color?: string;
  className?: string;
  animate?: 'float' | 'float-slow' | 'float-fast' | 'none';
}

export default function Sticker({
  emoji,
  label,
  rotate = 0,
  color = '#D4F1E4',
  className = '',
  animate = 'float',
}: StickerProps) {
  const animClass =
    animate === 'none' ? '' : `animate-${animate}`;
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl text-sm font-semibold shadow-soft select-none ${animClass} ${className}`}
      style={{ backgroundColor: color, transform: `rotate(${rotate}deg)` }}
    >
      <span>{emoji}</span>
      <span className="text-gray-800">{label}</span>
    </div>
  );
}
