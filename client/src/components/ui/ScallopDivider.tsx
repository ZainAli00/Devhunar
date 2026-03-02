interface ScallopDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export default function ScallopDivider({ fromColor, toColor, flip = false }: ScallopDividerProps) {
  return (
    <div className="relative h-16 overflow-hidden" style={{ backgroundColor: toColor }}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={
            'M0,0 ' +
            Array.from({ length: 12 }, (_, i) => {
              const x1 = i * 120;
              const x2 = x1 + 60;
              const x3 = x1 + 120;
              return `Q${x2},64 ${x3},0`;
            }).join(' ')
          }
          fill={fromColor}
        />
      </svg>
    </div>
  );
}
