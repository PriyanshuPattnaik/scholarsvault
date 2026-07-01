import type { SignalPhase } from '../../types';

interface StudioPhaseArcProps {
  phases: SignalPhase[];
}

export function StudioPhaseArc({ phases }: StudioPhaseArcProps) {
  return (
    <div className="space-y-3">
      {phases.map((p) => (
        <div
          key={p.phase}
          className="border-l-2 border-hud-cyan/60 pl-4 py-2 bg-hud-surface/50 rounded-r-sm hover:bg-hud-elevated/50 transition-colors"
        >
          <div className="flex flex-wrap gap-2 items-baseline">
            <span className="font-mono text-[10px] text-hud-cyan uppercase">Phase {p.phase}</span>
            <span className="font-semibold text-hud-text text-sm">{p.title}</span>
            <span className="font-mono text-[10px] text-hud-dim">{p.when}</span>
          </div>
          <p className="text-xs text-hud-muted mt-1 leading-relaxed">{p.focus}</p>
          <p className="text-[10px] font-mono text-hud-success mt-1.5">OUTPUT → {p.output}</p>
        </div>
      ))}
    </div>
  );
}
