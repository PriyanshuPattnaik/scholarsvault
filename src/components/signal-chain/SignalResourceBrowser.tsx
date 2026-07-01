import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  SIGNAL_FILTER_CATEGORIES,
  SIGNAL_RESOURCES,
  SIGNAL_SECTIONS,
} from '../../data/signal-chain';
import { ResourceCard } from '../ui/ResourceCard';
import { SearchInput } from '../ui/SearchInput';

export function SignalResourceBrowser() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return SIGNAL_RESOURCES.filter((r) => {
      const matchFilter = filter === 'all' || r.section === filter || r.category === filter;
      const matchSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.section.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  const sectionsToShow = useMemo(() => {
    if (filter !== 'all') {
      const sec = SIGNAL_SECTIONS.find((s) => s.id === filter);
      return sec ? [sec] : [];
    }
    return SIGNAL_SECTIONS.filter((s) => filtered.some((r) => r.section === s.id));
  }, [filter, filtered]);

  return (
    <section className="mt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border-subtle pb-4">
        <div>
          <h3 className="text-xl font-serif italic text-sepia">Signal Chain Resource Hub</h3>
          <p className="text-xs text-sepia/60 font-serif">{SIGNAL_RESOURCES.length} resources · guitar to broadcast</p>
        </div>
        <SearchInput value={search} onChange={setSearch} placeholder="Search signal chain..." />
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {SIGNAL_FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`text-[11px] font-mono px-3 py-1 rounded-xs border transition-all ${
              filter === cat.id
                ? 'bg-ink text-cream border-ink'
                : 'border-border-subtle text-sepia hover:border-sepia/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {sectionsToShow.map((section) => {
        const items = filtered.filter((r) => r.section === section.id);
        if (items.length === 0) return null;
        return (
          <div key={section.id} className="mb-10">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-sepia/50 mb-4 flex items-center gap-3">
              {section.label}
              <span className="flex-1 h-px bg-border-subtle" />
            </h4>
            <AnimatePresence mode="wait">
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((res, idx) => (
                  <ResourceCard key={res.id} resource={res} index={idx} showCategory={false} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}

      {filtered.length === 0 && (
        <p className="text-center font-serif italic text-sepia py-12">No resources match your filters.</p>
      )}

      <p className="text-center text-[10px] font-mono text-sepia/40 mt-4">{filtered.length} resources shown</p>
    </section>
  );
}
