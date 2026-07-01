import type { AppTab } from '../../constants/tabs';
import { APP_TABS } from '../../constants/tabs';
import { Activity, Cpu } from 'lucide-react';

interface JarvisShellProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  children: React.ReactNode;
}

export function JarvisShell({ activeTab, onTabChange, children }: JarvisShellProps) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="jarvis-scan min-h-screen flex flex-col">
      {/* Top HUD bar */}
      <header className="sticky top-0 z-50 border-b border-hud-border bg-hud-bg/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-3 max-w-[1600px] mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Cpu size={22} className="text-hud-cyan" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-hud-success rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-mono font-bold text-hud-text tracking-wider">
                J<span className="text-hud-cyan">.</span>A<span className="text-hud-cyan">.</span>R<span className="text-hud-cyan">.</span>V<span className="text-hud-cyan">.</span>I<span className="text-hud-cyan">.</span>S
                <span className="text-hud-muted font-normal ml-2 text-sm">VAULT</span>
              </h1>
              <p className="text-[10px] font-mono text-hud-dim uppercase tracking-widest">
                Polymath Resource OS · v2.0
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-hud-muted">
            <span className="flex items-center gap-1.5">
              <Activity size={12} className="text-hud-success" />
              SYSTEM ONLINE
            </span>
            <span className="text-hud-dim">|</span>
            <span>{timeStr} IST</span>
            <span className="text-hud-dim">|</span>
            <span className="text-hud-cyan">4 MODULES ACTIVE</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
        {/* Sidebar nav */}
        <nav className="hidden lg:flex flex-col w-52 flex-shrink-0 border-r border-hud-border bg-hud-panel/50 p-3 gap-1 sticky top-[57px] h-[calc(100vh-57px)]">
          <p className="text-[9px] font-mono text-hud-dim uppercase tracking-widest px-2 mb-2">Modules</p>
          {APP_TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-left transition-all font-mono text-xs ${
                  active
                    ? 'bg-hud-cyan/10 border border-hud-cyan/40 text-hud-cyan hud-glow-active'
                    : 'border border-transparent text-hud-muted hover:text-hud-text hover:bg-hud-surface hover:border-hud-border'
                }`}
              >
                <span className="text-base leading-none">{tab.emoji}</span>
                <span className="uppercase tracking-wide">{tab.label}</span>
              </button>
            );
          })}

          <div className="mt-auto pt-4 border-t border-hud-border">
            <p className="text-[9px] font-mono text-hud-dim px-2 leading-relaxed">
              Study 09–18 · Zaron 19:30–03 · Studio 02–03
            </p>
          </div>
        </nav>

        {/* Mobile tab bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-hud-border bg-hud-bg/95 backdrop-blur-md flex">
          {APP_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 py-3 text-center text-lg ${activeTab === tab.id ? 'text-hud-cyan bg-hud-cyan/5' : 'text-hud-dim'}`}
            >
              {tab.emoji}
            </button>
          ))}
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 pb-20 lg:pb-6 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
