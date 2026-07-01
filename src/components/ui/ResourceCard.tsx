import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import type { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
  index?: number;
  showCategory?: boolean;
}

export function ResourceCard({ resource, index = 0, showCategory = true }: ResourceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.2) }}
      className="relative flex flex-col bg-paper/30 border border-border-subtle/80 p-5 rounded-xs hover:border-sepia/40 hover:bg-paper transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase text-sepia/40">
        {showCategory && <span>{resource.category}</span>}
        <div className={`flex gap-1 flex-wrap ${showCategory ? '' : 'ml-auto'}`}>
          {resource.tags.map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 rounded-xs border border-border-subtle bg-paper font-sans lowercase text-[9px] text-sepia/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-serif tracking-tight text-ink font-semibold">{resource.name}</h3>
      <p className="text-xs text-sepia/80 font-serif italic leading-relaxed mt-2 flex-grow">{resource.desc}</p>

      {resource.url ? (
        <button
          type="button"
          onClick={() => window.open(resource.url, '_blank')}
          className="mt-4 flex items-center justify-between text-[11px] font-mono border-t border-border-subtle pt-3 text-sepia hover:text-ink transition-colors w-full group text-left"
        >
          <span className="underline decoration-sepia/20 group-hover:decoration-ink pr-2">open source node</span>
          <ExternalLink size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      ) : (
        <div className="mt-4 text-[9px] font-mono text-sepia/30 text-right border-t border-border-subtle pt-3">
          textbook / reference
        </div>
      )}
    </motion.div>
  );
}
