import { Search } from 'lucide-react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = 'w-full md:w-80',
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sepia/40">
        <Search size={15} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-paper/70 border border-border-subtle py-1.5 pl-9 pr-4 font-mono text-xs text-ink placeholder:text-sepia/30 focus:outline-none focus:ring-1 focus:ring-sepia/20"
      />
    </div>
  );
}
