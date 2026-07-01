import { useState } from 'react';
import { STARTER_RIG } from '../../constants/tabs';
import { SIGNAL_MILESTONES, SIGNAL_PHASES } from '../../data/signal-chain';
import { useToggleInList } from '../../hooks/useLocalStorage';
import { MilestoneTrack } from '../ui/MilestoneTrack';
import { GearTable } from './GearTable';
import { PhaseArc } from './PhaseArc';
import { SignalResourceBrowser } from './SignalResourceBrowser';

type SignalView = 'roadmap' | 'resources' | 'gear';

const SUB_VIEWS: { id: SignalView; label: string }[] = [
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'resources', label: 'Resources' },
  { id: 'gear', label: 'Pro Gear Lists' },
];

export function SignalChainTab() {
  const [view, setView] = useState<SignalView>('roadmap');
  const [completed, toggle] = useToggleInList('signal_milestones');

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-border-subtle pb-4">
        <div>
          <h2 className="text-2xl font-serif italic text-sepia">Prodigy Signal Chain</h2>
          <p className="text-xs text-sepia/60 font-serif">
            Guitar · ears · FOH · stream · DaVinci — parallel with JEE
          </p>
        </div>
        <div className="flex gap-1 bg-paper border border-border-subtle p-0.5 rounded-sm">
          {SUB_VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setView(v.id)}
              className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                view === v.id ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-paper p-6 border border-border-subtle rounded-xs mb-8">
        <h3 className="text-lg font-serif font-semibold text-ink mb-2">Starter Rig — ₹0 to begin</h3>
        <p className="text-xs text-sepia font-serif italic leading-relaxed">{STARTER_RIG}</p>
      </div>

      {view === 'roadmap' && (
        <>
          <PhaseArc phases={SIGNAL_PHASES} />
          <div className="mt-10">
            <MilestoneTrack
              title="Multimedia Milestones"
              subtitle="Check as you materialize each output"
              milestones={SIGNAL_MILESTONES}
              completedIds={completed}
              onToggle={toggle}
              variant="list"
            />
          </div>
        </>
      )}

      {view === 'resources' && <SignalResourceBrowser />}
      {view === 'gear' && <GearTable />}
    </div>
  );
}
