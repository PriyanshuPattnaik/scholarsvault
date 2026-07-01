import type { GearRow } from '../../types';
import { GEAR_NOTES, GEAR_ROWS } from '../../data/signal-chain/gear';

export function GearTable() {
  return (
    <section className="bg-paper p-6 border border-border-subtle rounded-xs">
      <h3 className="text-lg font-serif font-semibold text-ink mb-1">What Hillsong &amp; Elevation Actually Run</h3>
      <p className="text-[10px] text-sepia/60 font-serif italic mb-4">
        Recognize the category each piece belongs to — theory is identical on X32 and DiGiCo.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[11px]">
          <thead>
            <tr className="border-b border-border-subtle">
              {['Ministry', 'Console (FOH)', 'Monitors / IEM', 'PA / RF', 'Studio / Stream'].map((h) => (
                <th key={h} className="text-left text-sepia font-mono uppercase text-[10px] py-2 pr-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GEAR_ROWS.map((row: GearRow) => (
              <tr key={row.ministry} className="border-b border-border-subtle/50">
                <td className="py-2 pr-3 font-serif font-semibold text-ink">{row.ministry}</td>
                <td className="py-2 pr-3 text-sepia/80">{row.console}</td>
                <td className="py-2 pr-3 text-sepia/80">{row.monitors}</td>
                <td className="py-2 pr-3 text-sepia/80">{row.pa}</td>
                <td className="py-2 pr-3 text-sepia/80">{row.studio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {GEAR_NOTES.map((note) => (
        <p key={note.slice(0, 40)} className="text-[10px] text-sepia/50 font-serif italic mt-3 leading-relaxed">
          {note}
        </p>
      ))}
    </section>
  );
}
