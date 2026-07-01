import { useMemo, useState } from 'react';
import { VAULT_RESOURCES } from '../../data/resources';
import { VAULT_CATEGORIES } from '../../data/vault/categories';
import { HudPanel } from '../jarvis/HudPanel';
import { HudSearch } from '../jarvis/HudSearch';
import { ResourceNode } from '../jarvis/ResourceNode';

export function VaultTab() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return VAULT_RESOURCES.filter((res) => {
      const matchCat = activeCategory === 'all' || res.category === activeCategory;
      const matchSearch =
        !q ||
        res.name.toLowerCase().includes(q) ||
        res.desc.toLowerCase().includes(q) ||
        res.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeCat = VAULT_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-[10px] font-mono text-hud-cyan uppercase tracking-widest mb-1">Module 01</p>
        <h2 className="text-2xl font-mono font-bold text-hud-text text-glow">THE CAVE</h2>
        <p className="text-xs text-hud-muted font-mono mt-1">
          Scholar resources — CS · faith · finance · meta-thinking. Multimedia → The Studio.
        </p>
      </div>

      <HudPanel title="Polymath Resource Ledger" badge={`${filtered.length} / ${VAULT_RESOURCES.length}`}>
        <div className="space-y-4">
          <HudSearch value={searchQuery} onChange={setSearchQuery} placeholder="Query scholar nodes..." />

          <div className="flex flex-wrap gap-1.5">
            {VAULT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 text-[9px] font-mono px-2.5 py-1.5 rounded-sm border uppercase tracking-wider transition-all ${
                    active
                      ? 'border-hud-cyan text-hud-cyan bg-hud-cyan/10'
                      : 'border-hud-border text-hud-muted hover:border-hud-border-bright hover:text-hud-text'
                  }`}
                >
                  <Icon size={11} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {activeCat && activeCategory !== 'all' && (
            <p className="text-[10px] font-mono text-hud-dim">
              Filtering: <span className="text-hud-cyan">{activeCat.name}</span>
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
            {filtered.map((res) => (
              <ResourceNode key={res.id} resource={res} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-hud-muted font-mono text-xs py-12">No nodes match query.</p>
          )}
        </div>
      </HudPanel>
    </div>
  );
}
