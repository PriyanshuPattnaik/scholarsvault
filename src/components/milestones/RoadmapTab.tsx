import { MILESTONES } from '../../data/milestones/academic';
import { useToggleInList } from '../../hooks/useLocalStorage';
import { HudPanel } from '../jarvis/HudPanel';

export function RoadmapTab() {
  const [completed, toggle] = useToggleInList('polymath_milestones');
  const pct = Math.round((completed.length / MILESTONES.length) * 100);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[10px] font-mono text-hud-cyan uppercase tracking-widest mb-1">Module 03</p>
        <h2 className="text-2xl font-mono font-bold text-hud-text text-glow">ALIGNMENT</h2>
        <p className="text-xs text-hud-muted font-mono mt-1">JEE · A-Levels · NIOS · YC · UCAS · Cambridge</p>
      </div>

      <HudPanel title="12-Month Alignment Target" badge={`${pct}% complete`}>
        <div className="mb-4">
          <div className="h-1.5 bg-hud-bg rounded-full overflow-hidden border border-hud-border">
            <div
              className="h-full bg-gradient-to-r from-hud-cyan/60 to-hud-cyan transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-[9px] font-mono text-hud-dim mt-1">
            {completed.length} / {MILESTONES.length} milestones materialized
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hud-border" />
          <div className="space-y-4">
            {MILESTONES.map((m) => {
              const done = completed.includes(m.id);
              return (
                <label
                  key={m.id}
                  className={`relative flex gap-4 pl-6 cursor-pointer group ${
                    done ? 'opacity-70' : ''
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      done
                        ? 'border-hud-success bg-hud-success/30'
                        : 'border-hud-cyan/50 bg-hud-bg group-hover:border-hud-cyan'
                    }`}
                  />
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggle(m.id)}
                    className="sr-only"
                  />
                  <div className={`flex-1 p-3 rounded-sm border transition-all ${
                    done ? 'border-hud-success/30 bg-hud-success/5' : 'border-hud-border bg-hud-surface hover:border-hud-cyan/30'
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-hud-cyan uppercase">{m.date}</span>
                      {done && <span className="text-[9px] font-mono text-hud-success">COMPLETE</span>}
                    </div>
                    <h3 className="text-sm font-semibold text-hud-text mt-0.5">{m.title}</h3>
                    <p className="text-xs text-hud-muted mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </HudPanel>
    </div>
  );
}
