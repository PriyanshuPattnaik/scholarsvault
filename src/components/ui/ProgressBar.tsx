interface ProgressBarProps {
  value: number;
  total: number;
  className?: string;
}

export function ProgressBar({ value, total, className = '' }: ProgressBarProps) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div className={`w-full bg-cream h-1.5 rounded-full overflow-hidden border border-border-subtle/50 ${className}`}>
      <div className="bg-sepia h-full transition-all duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}
