import { useState } from 'react';
import { AlertTriangle, ShieldCheck, Users } from 'lucide-react';
import { BLOCKERS } from '../../data/os/blockers';
import { MONK_LAWS } from '../../data/os/monk-laws';
import { SCHEDULES } from '../../data/os/schedules';

const SCHEDULE_DAYS = ['mwf', 'tts', 'sun'] as const;

const BLOCK_COLORS: Record<string, string> = {
  sleep: 'border-sepia bg-sepia/5 text-sepia',
  alevel: 'border-indigo-600 bg-indigo-50/50 text-indigo-900',
  startup: 'border-emerald-600 bg-emerald-50/50 text-emerald-900',
  ielts: 'border-amber-600 bg-amber-50/50 text-amber-900',
  jee: 'border-rose-600 bg-rose-50/50 text-rose-900',
  body: 'border-sky-600 bg-sky-50/50 text-sky-900',
  nios: 'border-cyan-600 bg-cyan-50/50 text-cyan-900',
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
              <p className="text-xs text-sepia font-serif italic">Coaching anchors &amp; deep focus alignments</p>
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
              <Users size={18} className="text-sepia" /> Zaron Strategic Coordination Hub
            </h3>
            <p className="text-xs text-sepia font-serif italic">Global timezone offsets &amp; co-founder focus bands</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-cream/35 border border-border-subtle/60 rounded-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2">Timezone Arbitrage</h4>
              <p className="text-xs text-sepia/90 leading-relaxed font-serif italic">
                Evening block <strong className="text-ink">19:30–03:00 IST</strong> aligns with US{' '}
                <strong className="text-ink">09:00–16:30 EST/CST</strong> — asynchronous continuous velocity.
              </p>
            </div>
            <div className="p-4 bg-cream/35 border border-border-subtle/60 rounded-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2">Co-Founder Division</h4>
              <p className="text-[11px] text-sepia font-serif italic">
                <strong className="text-ink">GT (CS):</strong> frontend, QA, integrations ·{' '}
                <strong className="text-ink">WashU:</strong> GTM, pilots, investor docs
              </p>
            </div>
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
