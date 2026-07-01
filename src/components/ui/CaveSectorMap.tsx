import type { AppTab } from '../../constants/tabs';
import { CAVE_SECTORS } from '../../data/cave/sectors';

interface CaveSectorMapProps {
  active: AppTab;
  onNavigate?: (tab: AppTab) => void;
}

export function CaveSectorMap({ active, onNavigate }: CaveSectorMapProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {CAVE_SECTORS.map((sector) => {
        const isActive = sector.id === active;
        const inner = (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg leading-none">{sector.emoji}</span>
              <h3 className="text-sm font-serif font-semibold text-ink">{sector.title}</h3>
            </div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-sepia/70 mb-2">{sector.tagline}</p>
            <p className="text-[11px] text-sepia/85 font-serif italic leading-relaxed mb-2">{sector.rule}</p>
            <div className="flex flex-wrap gap-1">
              {sector.domains.map((d) => (
                <span
                  key={d}
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs bg-cream/80 text-sepia/80 border border-border-subtle/50"
                >
                  {d}
                </span>
              ))}
            </div>
          </>
        );

        if (onNavigate) {
          return (
            <button
              key={sector.id}
              type="button"
              onClick={() => onNavigate(sector.id)}
              className={`text-left p-4 border rounded-xs transition-all ${
                isActive
                  ? 'border-sepia bg-sepia/5 shadow-sm ring-1 ring-sepia/20'
                  : 'border-border-subtle bg-paper/60 hover:border-sepia/40 hover:bg-paper'
              }`}
            >
              {inner}
            </button>
          );
        }

        return (
          <div
            key={sector.id}
            className={`p-4 border rounded-xs ${
              isActive ? 'border-sepia bg-sepia/5 ring-1 ring-sepia/20' : 'border-border-subtle bg-paper/40 opacity-70'
            }`}
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}
