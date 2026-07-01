import { Search } from 'lucide-react';

interface HudSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function HudSearch({ value, onChange, placeholder = 'Query resource nodes...', className = '' }: HudSearchProps) {
  return (
    <div className={`relative ${className}`}>
      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-hud-dim" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-hud-bg border border-hud-border py-2 pl-9 pr-4 font-mono text-xs text-hud-text placeholder:text-hud-dim focus:outline-none focus:border-hud-cyan/60 focus:ring-1 focus:ring-hud-cyan/20 rounded-sm"
      />
    </div>
  );
}
