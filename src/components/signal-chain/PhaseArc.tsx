import type { SignalPhase } from '../../types';

interface PhaseArcProps {
  phases: SignalPhase[];
}

export function PhaseArc({ phases }: PhaseArcProps) {
  return (
    <section>
      <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sepia mb-4">12-Month Phase Arc</h3>
      <div className="space-y-4">
        {phases.map((p) => (
          <div key={p.phase} className="border-l-2 border-sepia pl-4 py-2 bg-paper/30 rounded-r-xs">
            <div className="flex flex-wrap gap-2 items-baseline">
              <span className="font-mono text-[10px] text-sepia/50 uppercase">Phase {p.phase}</span>
              <span className="font-serif font-semibold text-ink">{p.title}</span>
              <span className="font-mono text-[10px] text-sepia/40">{p.when}</span>
            </div>
            <p className="text-xs text-sepia/80 font-serif italic mt-1">{p.focus}</p>
            <p className="text-[10px] font-mono text-emerald-800 mt-1">✓ {p.output}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
