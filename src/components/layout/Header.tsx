import type { AppTab } from '../../constants/tabs';
import { APP_TABS } from '../../constants/tabs';

interface HeaderProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border-subtle shadow-xs">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-sepia rounded-full animate-pulse" />
          <div>
            <h1 className="text-3xl font-serif text-ink tracking-tight font-semibold">The Scholar&apos;s Cave</h1>
            <p className="text-sepia italic text-xs font-serif">Four chambers · zero overlap · polymath OS</p>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-paper border border-border-subtle p-1 rounded-sm">
          {APP_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-1.5 text-xs font-display lowercase tracking-tight transition-all rounded-xs ${
                activeTab === tab.id ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'
              }`}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
