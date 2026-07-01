import type { AppTab } from '../../constants/tabs';

export interface CaveSector {
  id: AppTab;
  emoji: string;
  title: string;
  tagline: string;
  domains: string[];
  rule: string;
}

/** One mental model — four chambers, zero overlap. */
export const CAVE_SECTORS: CaveSector[] = [
  {
    id: 'vault',
    emoji: '📚',
    title: 'The Cave',
    tagline: 'Polymath reference library',
    domains: ['Math', 'CS & ML', 'Systems', 'Faith', 'Finance', 'GTM', 'Meta-thinking'],
    rule: 'Read & curate. No schedules, no multimedia gear — pure scholar resources.',
  },
  {
    id: 'os',
    emoji: '🧭',
    title: 'Master OS',
    tagline: 'How the day runs',
    domains: ['Daily blocks', 'Zaron coordination', 'Blockers', 'Monk Laws'],
    rule: 'Execute. Time is the only non-renewable asset — protect the blocks.',
  },
  {
    id: 'milestones',
    emoji: '🎯',
    title: 'Alignment',
    tagline: 'Academic & startup outcomes',
    domains: ['JEE', 'A-Levels', 'NIOS', 'YC', 'UCAS', 'Cambridge'],
    rule: 'Outcomes with dates. Check when materialized — not a reading list.',
  },
  {
    id: 'signal',
    emoji: '🎚️',
    title: 'The Studio',
    tagline: 'Worship multimedia prodigy path',
    domains: ['Guitar', 'Ear training', 'FOH', 'Stream', 'DAW', 'DaVinci', 'Gear'],
    rule: 'Hear → play → mix → film → shepherd. Roadmap + resources + pro gear live here only.',
  },
];
