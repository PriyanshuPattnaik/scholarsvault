import { useMemo, useState } from 'react';
import { Layers, Map, Wrench } from 'lucide-react';
import {
  GEAR_NOTES,
  GEAR_ROWS,
  STUDIO_DOMAINS,
  STUDIO_MILESTONES,
  STUDIO_PHASES,
  STUDIO_RESOURCES,
  STUDIO_STARTER_RIG,
} from '../../data/studio';
import { STUDIO_SECTIONS } from '../../data/studio/sections';
import { useToggleInList } from '../../hooks/useLocalStorage';
import { HudPanel } from '../jarvis/HudPanel';
import { HudSearch } from '../jarvis/HudSearch';
import { ResourceNode } from '../jarvis/ResourceNode';
import { StudioPhaseArc } from './StudioPhaseArc';
import { StudioGearTable } from './StudioGearTable';

type StudioView = 'resources' | 'path' | 'gear';

const VIEWS: { id: StudioView; label: string; icon: typeof Layers }[] = [
  { id: 'resources', label: 'Resource OS', icon: Layers },
  { id: 'path', label: 'Prodigy Path', icon: Map },
  { id: 'gear', label: 'Pro Gear', icon: Wrench },
];

export function StudioTab() {
  const [view, setView] = useState<StudioView>('resources');
  const [activeDomain, setActiveDomain] = useState('music-core');
  const [activeSection, setActiveSection] = useState<string | 'all'>('all');
  const [search, setSearch] = useState('');
  const [completed, toggle] = useToggleInList('studio_milestones');

  const domain = STUDIO_DOMAINS.find((d) => d.id === activeDomain)!;

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return STUDIO_RESOURCES.filter((r) => {
      const inDomain = domain.sections.includes(r.section);
      const inSection = activeSection === 'all' || r.section === activeSection;
      const matchSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.section.toLowerCase().includes(q);
      return inDomain && inSection && matchSearch;
    });
  }, [domain, activeSection, search]);

  const domainSections = STUDIO_SECTIONS.filter((s) => domain.sections.includes(s.id));

  const stats = useMemo(() => {
    const total = STUDIO_RESOURCES.length;
    const free = STUDIO_RESOURCES.filter((r) => r.tags.includes('free')).length;
    const coursera = STUDIO_RESOURCES.filter((r) => r.tags.includes('coursera')).length;
    return { total, free, coursera };
  }, []);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-mono text-hud-cyan uppercase tracking-widest mb-1">Module 04</p>
          <h2 className="text-2xl font-mono font-bold text-hud-text text-glow">THE STUDIO</h2>
          <p className="text-xs text-hud-muted font-mono mt-1">
            {stats.total} nodes · {stats.free} free · {stats.coursera} Coursera
          </p>
        </div>

        <div className="flex gap-1 bg-hud-surface border border-hud-border p-0.5 rounded-sm">
          {VIEWS.map((v) => {
            const Icon = v.icon;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                  view === v.id
                    ? 'bg-hud-cyan/15 text-hud-cyan border border-hud-cyan/30'
                    : 'text-hud-muted hover:text-hud-text border border-transparent'
                }`}
              >
                <Icon size={12} />
                {v.label}
              </button>
            );
          })}
        </div>
      </div>

      {view === 'resources' && (
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Domain sidebar */}
          <aside className="xl:w-56 flex-shrink-0 space-y-1">
            <p className="text-[9px] font-mono text-hud-dim uppercase tracking-widest px-2 mb-2">Domains</p>
            {STUDIO_DOMAINS.map((d) => {
              const Icon = d.icon;
              const count = STUDIO_RESOURCES.filter((r) => d.sections.includes(r.section)).length;
              const active = activeDomain === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setActiveDomain(d.id);
                    setActiveSection('all');
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-sm border transition-all ${
                    active ? `${d.accent} hud-glow-active` : 'border-hud-border/60 bg-hud-surface/40 text-hud-muted hover:border-hud-border hover:text-hud-text'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={14} />
                    <span className="text-[11px] font-mono font-semibold uppercase">{d.shortLabel}</span>
                    <span className="ml-auto text-[9px] font-mono opacity-60">{count}</span>
                  </div>
                  <p className="text-[9px] mt-1 opacity-70 leading-snug">{d.description}</p>
                </button>
              );
            })}
          </aside>

          {/* Resource grid */}
          <div className="flex-1 min-w-0 space-y-4">
            <HudPanel
              title={`${domain.label} // Resource Nodes`}
              subtitle={STUDIO_STARTER_RIG}
              badge={`${filtered.length} active`}
            >
              <div className="space-y-4">
                <HudSearch value={search} onChange={setSearch} placeholder={`Search ${domain.shortLabel} nodes...`} />

                {/* Section filters */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveSection('all')}
                    className={`text-[9px] font-mono px-2 py-1 rounded-sm border uppercase tracking-wider ${
                      activeSection === 'all'
                        ? 'border-hud-cyan text-hud-cyan bg-hud-cyan/10'
                        : 'border-hud-border text-hud-muted hover:border-hud-border-bright'
                    }`}
                  >
                    All
                  </button>
                  {domainSections.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveSection(s.id)}
                      className={`text-[9px] font-mono px-2 py-1 rounded-sm border uppercase tracking-wider ${
                        activeSection === s.id
                          ? 'border-hud-cyan text-hud-cyan bg-hud-cyan/10'
                          : 'border-hud-border text-hud-muted hover:border-hud-border-bright'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
                  {filtered.map((r) => (
                    <ResourceNode key={r.id} resource={r} />
                  ))}
                </div>

                {filtered.length === 0 && (
                  <p className="text-center text-hud-muted font-mono text-xs py-12">No nodes match query.</p>
                )}
              </div>
            </HudPanel>
          </div>
        </div>
      )}

      {view === 'path' && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <HudPanel title="12-Month Prodigy Path" subtitle="Hear → Play → Mix → Film → Shepherd">
            <StudioPhaseArc phases={STUDIO_PHASES} />
          </HudPanel>
          <HudPanel title="Milestone Outputs" subtitle="Check when materialized">
            <div className="space-y-2">
              {STUDIO_MILESTONES.map((m) => {
                const done = completed.includes(m.id);
                return (
                  <label
                    key={m.id}
                    className={`flex gap-3 p-3 rounded-sm border cursor-pointer transition-all ${
                      done ? 'border-hud-success/40 bg-hud-success/5' : 'border-hud-border bg-hud-surface hover:border-hud-cyan/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => toggle(m.id)}
                      className="mt-0.5 accent-hud-cyan"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-hud-cyan">{m.date}</span>
                        <span className="text-sm font-semibold text-hud-text">{m.title}</span>
                      </div>
                      <p className="text-xs text-hud-muted mt-0.5">{m.desc}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </HudPanel>
        </div>
      )}

      {view === 'gear' && (
        <HudPanel title="Pro Ministry Gear Reference" subtitle="Hillsong · Elevation · Bethel · Mid-size church">
          <StudioGearTable rows={GEAR_ROWS} notes={GEAR_NOTES} />
        </HudPanel>
      )}
    </div>
  );
}
