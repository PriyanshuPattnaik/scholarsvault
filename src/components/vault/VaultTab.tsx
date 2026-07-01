import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { VAULT_RESOURCES } from '../../data/resources';
import { VAULT_CATEGORIES } from '../../data/vault/categories';
import { CategoryRail } from '../ui/CategoryRail';
import { ResourceCard } from '../ui/ResourceCard';
import { SearchInput } from '../ui/SearchInput';

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

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-border-subtle pb-4">
        <div>
          <h2 className="text-2xl font-serif italic text-sepia">Computation &amp; Wisdom Ledger</h2>
          <p className="text-xs text-sepia/60 font-serif">Math · CS · ML · faith · finance · meta-thinking</p>
        </div>
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Query names or concepts..."
        />
      </div>

      <CategoryRail categories={VAULT_CATEGORIES} active={activeCategory} onSelect={setActiveCategory} />

      <AnimatePresence mode="wait">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((res, idx) => (
            <ResourceCard key={res.id} resource={res} index={idx} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-serif italic text-sepia">No resource items matched your parameters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-2 text-xs font-mono underline text-sepia hover:text-ink"
          >
            Reset directory filters
          </button>
        </div>
      )}

      <p className="text-center text-[10px] font-mono text-sepia/40 mt-8">
        {filtered.length} of {VAULT_RESOURCES.length} scholar resources
      </p>
    </div>
  );
}
