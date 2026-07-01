import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { BLOCKERS } from '../../data/os/blockers';
import { MONK_LAWS } from '../../data/os/monk-laws';
import { SCHEDULES } from '../../data/os/schedules';
import {
  COORDINATION_ROLES,
  TIMEZONE_NOTE,
  WEEKLY_RHYTHM,
  YOUR_COORDINATION,
} from '../../data/os/zaron-coordination';
import { HudPanel } from '../jarvis/HudPanel';

const SCHEDULE_DAYS = ['mwf', 'tts', 'sun'] as const;

const BLOCK_COLORS: Record<string, string> = {
  sleep: 'border-hud-dim/50 bg-hud-dim/5 text-hud-muted',
  alevel: 'border-hud-violet/40 bg-hud-violet/5 text-hud-violet',
  startup: 'border-hud-success/40 bg-hud-success/5 text-hud-success',
  jee: 'border-hud-rose/40 bg-hud-rose/5 text-hud-rose',
  body: 'border-hud-blue/40 bg-hud-blue/5 text-hud-blue',
  research: 'border-hud-cyan/40 bg-hud-cyan/5 text-hud-cyan',
};

export function MasterOsTab() {
  const [scheduleTab, setScheduleTab] = useState<string>('mwf');

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[10px] font-mono text-hud-cyan uppercase tracking-widest mb-1">Module 02</p>
        <h2 className="text-2xl font-mono font-bold text-hud-text text-glow">MASTER OS</h2>
        <p className="text-xs text-hud-muted font-mono mt-1">09:00 study → 18:00 gym → 19:30 Zaron → 02:00 Studio → 03:00 sleep</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 space-y-4">
          <HudPanel title="Daily Tracker" subtitle="Coaching anchors & deep focus blocks">
            <div className="flex gap-1 mb-4">
              {SCHEDULE_DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setScheduleTab(day)}
                  className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm border transition-all ${
                    scheduleTab === day
                      ? 'border-hud-cyan text-hud-cyan bg-hud-cyan/10'
                      : 'border-hud-border text-hud-muted hover:text-hud-text'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {SCHEDULES[scheduleTab]?.map((block, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 border-l-2 p-2.5 rounded-r-sm ${BLOCK_COLORS[block.type] || 'border-hud-border'}`}
                >
                  <div className="font-mono text-[10px] font-semibold whitespace-nowrap w-28 text-hud-muted">{block.time}</div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase text-hud-text">{block.title}</h4>
                    <p className="text-[11px] text-hud-muted mt-0.5 leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>

          <HudPanel title="Zaron Coordination Hub" subtitle={TIMEZONE_NOTE}>
            <div className="p-3 border border-hud-success/30 bg-hud-success/5 rounded-sm mb-4">
              <h4 className="text-[10px] font-mono font-bold uppercase text-hud-success mb-2">{YOUR_COORDINATION.title}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-hud-muted">
                <div>
                  <p className="font-mono text-[9px] uppercase text-hud-dim mb-1">You own</p>
                  {YOUR_COORDINATION.owns.map((item) => (
                    <p key={item} className="text-hud-text">→ {item}</p>
                  ))}
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase text-hud-dim mb-1">You delegate</p>
                  {YOUR_COORDINATION.delegates.map((item) => (
                    <p key={item}>→ {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {COORDINATION_ROLES.map((role) => (
                <div key={role.partner} className="p-3 border border-hud-border bg-hud-surface rounded-sm">
                  <h4 className="text-[10px] font-mono font-bold uppercase text-hud-cyan">{role.partner}</h4>
                  <p className="text-[9px] text-hud-dim font-mono">{role.school}</p>
                  <p className="text-[11px] text-hud-muted mt-2">{role.focus.join(' · ')}</p>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-[10px] font-mono">
                <thead>
                  <tr className="border-b border-hud-border text-hud-cyan uppercase">
                    <th className="text-left py-2 pr-3">Day</th>
                    <th className="text-left py-2 pr-3">You</th>
                    <th className="text-left py-2 pr-3">GT</th>
                    <th className="text-left py-2">WashU</th>
                  </tr>
                </thead>
                <tbody className="text-hud-muted">
                  {WEEKLY_RHYTHM.map((row) => (
                    <tr key={row.day} className="border-b border-hud-border/30">
                      <td className="py-2 pr-3 text-hud-text">{row.day}</td>
                      <td className="py-2 pr-3">{row.you}</td>
                      <td className="py-2 pr-3">{row.gt}</td>
                      <td className="py-2">{row.washu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </HudPanel>

          <HudPanel title="Blocker Elimination" subtitle="Known failure modes + fixes">
            <div className="divide-y divide-hud-border/40">
              {BLOCKERS.map((b) => (
                <div key={b.title} className="py-3 first:pt-0">
                  <h4 className="text-xs font-mono font-bold text-hud-text flex items-center gap-1.5">
                    <AlertTriangle size={12} className="text-hud-danger" />
                    {b.title}
                  </h4>
                  <p className="text-[11px] text-hud-danger/80 mt-1">⚠ {b.problem}</p>
                  <p className="text-[11px] text-hud-success mt-1">✓ {b.fix}</p>
                </div>
              ))}
            </div>
          </HudPanel>
        </div>

        <HudPanel title="Monk Laws" subtitle="Operating principles" className="xl:sticky xl:top-20 xl:self-start">
          <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
            {MONK_LAWS.map((law) => (
              <div key={law.id} className="border-b border-hud-border/40 pb-3 last:border-0">
                <div className="flex gap-2 items-baseline">
                  <span className="font-mono text-hud-cyan text-[10px] font-bold">{String(law.id).padStart(2, '0')}</span>
                  <h4 className="font-mono font-bold text-[10px] uppercase text-hud-text tracking-wide">{law.title}</h4>
                </div>
                <p className="text-[11px] text-hud-muted leading-relaxed mt-1">{law.text}</p>
              </div>
            ))}
          </div>
        </HudPanel>
      </div>
    </div>
  );
}
