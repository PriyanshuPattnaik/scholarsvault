import { ExternalLink } from 'lucide-react';
import type { Resource } from '../../types';
import { sectionLabel } from '../../data/studio/sections';

const TAG_STYLES: Record<string, string> = {
  core: 'border-hud-cyan/50 text-hud-cyan bg-hud-cyan/10',
  rare: 'border-hud-violet/50 text-hud-violet bg-hud-violet/10',
  free: 'border-hud-success/40 text-hud-success bg-hud-success/10',
  oss: 'border-hud-emerald/40 text-hud-emerald bg-hud-emerald/10',
  coursera: 'border-hud-blue/50 text-hud-blue bg-hud-blue/10',
  forum: 'border-hud-amber/40 text-hud-amber bg-hud-amber/10',
  paid: 'border-hud-warning/40 text-hud-warning bg-hud-warning/10',
};

function displayLabel(resource: Resource & { section?: string }): string {
  if (resource.section) {
    const label = sectionLabel(resource.section);
    if (label !== resource.section) return label;
  }
  return resource.category
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

interface ResourceNodeProps {
  resource: Resource & { section?: string };
  compact?: boolean;
}

export function ResourceNode({ resource, compact }: ResourceNodeProps) {
  const label = displayLabel(resource);

  return (
    <article className="group flex flex-col h-full border border-hud-border bg-hud-surface hover:border-hud-cyan/50 hover:bg-hud-elevated transition-all duration-200 rounded-sm overflow-hidden">
      <div className="px-3 py-2 border-b border-hud-border/60 bg-hud-bg/50 flex items-center justify-between gap-2">
        <span className="text-[9px] font-mono uppercase tracking-widest text-hud-cyan truncate">
          {label}
        </span>
        <div className="flex gap-1 flex-shrink-0">
          {resource.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className={`text-[8px] font-mono px-1 py-0.5 rounded border uppercase ${TAG_STYLES[t] ?? 'border-hud-border text-hud-muted'}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex flex-col flex-grow ${compact ? 'p-3' : 'p-4'}`}>
        <h3 className="text-sm font-semibold text-hud-text leading-snug group-hover:text-hud-cyan transition-colors">
          {resource.name}
        </h3>
        {!compact && (
          <p className="text-xs text-hud-muted leading-relaxed mt-2 flex-grow">{resource.desc}</p>
        )}

        {resource.url ? (
          <button
            type="button"
            onClick={() => window.open(resource.url, '_blank')}
            className="mt-3 flex items-center justify-between text-[10px] font-mono text-hud-cyan hover:text-hud-text border border-hud-border hover:border-hud-cyan/50 px-2 py-1.5 rounded-sm transition-all w-full group/btn"
          >
            <span>ACCESS NODE</span>
            <ExternalLink size={10} className="opacity-60 group-hover/btn:opacity-100" />
          </button>
        ) : (
          <div className="mt-3 text-[9px] font-mono text-hud-dim uppercase">Reference only</div>
        )}
      </div>
    </article>
  );
}
