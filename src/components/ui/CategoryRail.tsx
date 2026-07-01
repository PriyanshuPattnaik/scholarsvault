import type { Category } from '../../types';

interface CategoryRailProps {
  categories: Category[];
  active: string;
  onSelect: (id: string) => void;
}

export function CategoryRail({ categories, active, onSelect }: CategoryRailProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-border-subtle/50">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap text-xs font-display tracking-tight transition-all ${
              active === cat.id
                ? 'bg-ink text-cream font-medium shadow-xs'
                : 'text-sepia bg-paper/60 border border-border-subtle hover:bg-paper'
            }`}
          >
            <Icon size={12} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
