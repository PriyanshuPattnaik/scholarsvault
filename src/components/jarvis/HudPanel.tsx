import type { ReactNode } from 'react';

interface HudPanelProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function HudPanel({ title, subtitle, badge, children, className = '', noPadding }: HudPanelProps) {
  return (
    <div className={`border border-hud-border bg-hud-panel hud-glow rounded-sm overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-hud-border bg-hud-surface/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-hud-cyan animate-pulse" />
            <h2 className="text-sm font-mono font-semibold text-hud-text tracking-wide uppercase">{title}</h2>
            {badge && (
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-hud-cyan/30 text-hud-cyan bg-hud-cyan/5">
                {badge}
              </span>
            )}
          </div>
          {subtitle && <p className="text-[11px] text-hud-muted mt-0.5 font-mono">{subtitle}</p>}
        </div>
      </div>
      <div className={noPadding ? '' : 'p-4'}>{children}</div>
    </div>
  );
}
