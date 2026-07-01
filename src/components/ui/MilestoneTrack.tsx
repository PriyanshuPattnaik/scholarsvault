import { CheckSquare } from 'lucide-react';
import type { Milestone } from '../../types';
import { ProgressBar } from './ProgressBar';

interface MilestoneTrackProps {
  title: string;
  subtitle: string;
  milestones: Milestone[];
  completedIds: string[];
  onToggle: (id: string) => void;
  variant?: 'timeline' | 'list';
}

export function MilestoneTrack({
  title,
  subtitle,
  milestones,
  completedIds,
  onToggle,
  variant = 'timeline',
}: MilestoneTrackProps) {
  const done = completedIds.length;
  const total = milestones.length;

  return (
    <div className={variant === 'timeline' ? 'max-w-3xl mx-auto' : ''}>
      <div className="bg-paper p-6 border border-border-subtle rounded-xs mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-serif text-ink tracking-tight font-semibold">{title}</h3>
            <p className="text-xs text-sepia font-serif italic">{subtitle}</p>
          </div>
          <div className="text-right">
            <div className="font-mono text-sm font-bold text-ink">{Math.round((done / total) * 100)}% Complete</div>
            <div className="font-mono text-[10px] text-sepia/50 mt-0.5">
              {done} of {total} logged
            </div>
          </div>
        </div>
        <ProgressBar value={done} total={total} className="mt-4" />
      </div>

      {variant === 'timeline' ? (
        <div className="space-y-6 relative pl-6 border-l border-border-subtle/50">
          {milestones.map((m) => (
            <MilestoneRow key={m.id} milestone={m} checked={completedIds.includes(m.id)} onToggle={onToggle} variant="timeline" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {milestones.map((m) => (
            <MilestoneRow key={m.id} milestone={m} checked={completedIds.includes(m.id)} onToggle={onToggle} variant="list" />
          ))}
        </div>
      )}
    </div>
  );
}

function MilestoneRow({
  milestone: m,
  checked,
  onToggle,
  variant,
}: {
  milestone: Milestone;
  checked: boolean;
  onToggle: (id: string) => void;
  variant: 'timeline' | 'list';
}) {
  const btn = (
    <button
      type="button"
      onClick={() => onToggle(m.id)}
      className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono rounded-xs border shrink-0 transition-all ${
        checked ? 'bg-sepia text-white border-sepia' : 'border-border-subtle text-sepia hover:bg-black/5'
      }`}
    >
      <CheckSquare size={11} />
      {checked ? 'Done' : 'Pending'}
    </button>
  );

  if (variant === 'list') {
    return (
      <div className="flex items-start justify-between gap-4 border-b border-border-subtle/50 pb-4 last:border-0 last:pb-0">
        <div>
          <span className="font-mono text-[10px] text-sepia/50 uppercase">{m.date}</span>
          <h4 className={`text-sm font-serif font-bold text-ink ${checked ? 'line-through text-sepia/60' : ''}`}>{m.title}</h4>
          <p className="text-xs text-sepia/80 font-serif italic mt-1">{m.desc}</p>
        </div>
        {btn}
      </div>
    );
  }

  return (
    <div className="relative bg-paper/30 border border-border-subtle/75 p-5 rounded-xs hover:bg-paper transition-all duration-300">
      <span
        className={`absolute -left-[30px] top-6 w-3 h-3 rounded-full border ${
          checked ? 'bg-sepia border-sepia animate-pulse' : 'bg-cream border-sepia/40'
        }`}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] text-sepia/50 font-bold uppercase tracking-wider">{m.date}</span>
          <h4 className={`text-base font-serif font-bold text-ink mt-0.5 ${checked ? 'line-through text-sepia/60' : ''}`}>
            {m.title}
          </h4>
          <p className="text-xs text-sepia/80 font-serif italic leading-relaxed mt-2">{m.desc}</p>
        </div>
        {btn}
      </div>
    </div>
  );
}
