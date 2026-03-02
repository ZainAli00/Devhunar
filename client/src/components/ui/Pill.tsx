import { type ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  color?: 'mint' | 'blush' | 'lilac' | 'butter' | 'dark' | 'cream';
  size?: 'sm' | 'md';
  className?: string;
}

const colorMap: Record<string, string> = {
  mint: 'bg-mint text-green-800',
  blush: 'bg-blush text-rose-800',
  lilac: 'bg-lilac text-purple-800',
  butter: 'bg-butter text-amber-800',
  dark: 'bg-dark text-white',
  cream: 'bg-cream text-gray-800 border border-gray-200',
};

export default function Pill({ children, color = 'mint', size = 'md', className = '' }: PillProps) {
  const sizeClass = size === 'sm' ? 'text-xs px-3 py-1' : 'text-sm px-4 py-1.5';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizeClass} ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
