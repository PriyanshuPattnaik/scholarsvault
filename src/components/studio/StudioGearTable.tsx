import type { GearRow } from '../../types';

interface StudioGearTableProps {
  rows: GearRow[];
  notes: string[];
}

export function StudioGearTable({ rows, notes }: StudioGearTableProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-hud-border text-hud-cyan text-[10px] uppercase tracking-wider">
              <th className="text-left py-2 pr-4">Ministry</th>
              <th className="text-left py-2 pr-4">Console</th>
              <th className="text-left py-2 pr-4">Monitors</th>
              <th className="text-left py-2 pr-4">PA</th>
              <th className="text-left py-2">Studio/Stream</th>
            </tr>
          </thead>
          <tbody className="text-hud-muted">
            {rows.map((row) => (
              <tr key={row.ministry} className="border-b border-hud-border/40 hover:bg-hud-surface/50">
                <td className="py-3 pr-4 text-hud-text font-semibold whitespace-nowrap">{row.ministry}</td>
                <td className="py-3 pr-4 leading-relaxed">{row.console}</td>
                <td className="py-3 pr-4 leading-relaxed">{row.monitors}</td>
                <td className="py-3 pr-4 leading-relaxed">{row.pa}</td>
                <td className="py-3 leading-relaxed">{row.studio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {notes.map((note, i) => (
        <p key={i} className="text-[11px] text-hud-muted leading-relaxed border-l-2 border-hud-amber/40 pl-3">
          {note}
        </p>
      ))}
    </div>
  );
}
