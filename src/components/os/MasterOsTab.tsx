import { useState } from 'react';
import { AlertTriangle, ShieldCheck, Users } from 'lucide-react';
import { BLOCKERS } from '../../data/os/blockers';
import { MONK_LAWS } from '../../data/os/monk-laws';
import { SCHEDULES } from '../../data/os/schedules';
import {
  COORDINATION_ROLES,
  TIMEZONE_NOTE,
  WEEKLY_RHYTHM,
  YOUR_COORDINATION,
} from '../../data/os/zaron-coordination';

const SCHEDULE_DAYS = ['mwf', 'tts', 'sun'] as const;

const BLOCK_COLORS: Record<string, string> = {
  sleep: 'border-sepia bg-sepia/5 text-sepia',
  alevel: 'border-indigo-600 bg-indigo-50/50 text-indigo-900',
  startup: 'border-emerald-600 bg-emerald-50/50 text-emerald-900',
  jee: 'border-rose-600 bg-rose-50/50 text-rose-900',
  body: 'border-sky-600 bg-sky-50/50 text-sky-900',
  research: 'border-purple-600 bg-purple-50/50 text-purple-900',
};

export function MasterOsTab() {
  const [scheduleTab, setScheduleTab] = useState<string>('mwf');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <section className="bg-paper p-6 border border-border-subtle rounded-xs">
          <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
            <div>
              <h3 className="text-xl font-serif text-ink tracking-tight font-semibold">Daily Tracker</h3>
              <p className="text-xs text-sepia font-serif italic">
                09:00 study → 18:00 gym → 19:30 Zaron → 02:00 Studio → 03:00 sleep
              </p>
            </div>
            <div className="flex gap-1 bg-cream border border-border-subtle p-0.5 rounded-sm">
              {SCHEDULE_DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setScheduleTab(day)}
                  className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                    scheduleTab === day ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {SCHEDULES[scheduleTab]?.map((block, idx) => (
              <div
                key={idx}
                className={`flex gap-4 border-l-2 p-3 ${BLOCK_COLORS[block.type] || 'border-border-subtle'} rounded-r-xs bg-cream/30`}
              >
                <div className="font-mono text-xs font-semibold whitespace-nowrap pt-0.5 w-24">{block.time}</div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-tight">{block.title}</h4>
                  <p className="text-xs text-sepia/80 font-serif italic mt-0.5">{block.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-paper p-6 border border-border-subtle rounded-xs">
          <div className="border-b border-border-subtle pb-4 mb-6">
            <h3 className="text-xl font-serif text-ink tracking-tight font-semibold flex items-center gap-2">
              <Users size={18} className="text-sepia" /> Zaron Coordination Hub
            </h3>
            <p className="text-xs text-sepia font-serif italic mt-1">{TIMEZONE_NOTE}</p>
          </div>

          <div className="p-4 bg-emerald-50/40 border border-emerald-200/60 rounded-xs mb-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2">
              {YOUR_COORDINATION.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
              <div>
                <p className="font-mono text-[10px] uppercase text-sepia mb-1">You own</p>
                <ul className="space-y-1 text-sepia font-serif italic">
                  {YOUR_COORDINATION.owns.map((item) => (
                    <li key={item}>→ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase text-sepia mb-1">You delegate</p>
                <ul className="space-y-1 text-sepia font-serif italic">
                  {YOUR_COORDINATION.delegates.map((item) => (
                    <li key={item}>→ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {COORDINATION_ROLES.map((role) => (
              <div key={role.partner} className="p-4 bg-cream/35 border border-border-subtle/60 rounded-xs">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-1">
                  {role.partner}
                </h4>
                <p className="text-[10px] text-sepia/70 font-mono mb-2">{role.school}</p>
                <p className="text-[11px] text-sepia font-serif italic mb-2">
                  <strong className="text-ink">Focus:</strong> {role.focus.join(' · ')}
                </p>
                <p className="text-[10px] text-sepia/80 font-serif italic">
                  Async: {role.asyncHours}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[11px] font-serif">
              <thead>
                <tr className="border-b border-border-subtle text-left font-mono text-[10px] uppercase text-sepia">
                  <th className="py-2 pr-4">Day</th>
                  <th className="py-2 pr-4">You</th>
                  <th className="py-2 pr-4">GT</th>
                  <th className="py-2">WashU</th>
                </tr>
              </thead>
              <tbody className="text-sepia italic">
                {WEEKLY_RHYTHM.map((row) => (
                  <tr key={row.day} className="border-b border-border-subtle/40">
                    <td className="py-2 pr-4 font-mono text-ink not-italic">{row.day}</td>
                    <td className="py-2 pr-4">{row.you}</td>
                    <td className="py-2 pr-4">{row.gt}</td>
                    <td className="py-2">{row.washu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-paper p-6 border border-border-subtle rounded-xs">
          <h3 className="text-xl font-serif text-ink tracking-tight font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle size={18} className="text-rose-600" /> Blocker Elimination Logs
          </h3>
          <div className="divide-y divide-border-subtle">
            {BLOCKERS.map((b) => (
              <div key={b.title} className="py-4 first:pt-0 last:pb-0">
                <h4 className="text-sm font-mono font-bold text-ink">{b.title}</h4>
                <p className="text-xs text-rose-800 font-serif italic mt-1">⚠️ {b.problem}</p>
                <p className="text-xs text-emerald-800 font-serif mt-1">✓ {b.fix}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <aside>
        <div className="bg-paper p-6 border border-border-subtle rounded-xs sticky top-28">
          <h3 className="text-lg font-serif text-ink tracking-tight font-bold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-sepia" /> Monk Laws
          </h3>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 no-scrollbar">
            {MONK_LAWS.map((law) => (
              <div key={law.id} className="border-b border-border-subtle/40 pb-3 last:border-0 last:pb-0">
                <div className="flex gap-2 items-baseline">
                  <span className="font-serif italic text-sepia text-xs font-bold leading-none">{law.id}.</span>
                  <h4 className="font-mono font-bold text-xs leading-tight text-ink uppercase tracking-tight">{law.title}</h4>
                </div>
                <p className="text-xs text-sepia/85 font-serif italic leading-relaxed mt-1">{law.text}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
