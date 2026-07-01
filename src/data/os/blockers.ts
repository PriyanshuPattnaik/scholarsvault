import type { Blocker } from '../../types';

export const BLOCKERS: Blocker[] = [
  { title: 'Time Compression', problem: 'Dual tracks (JEE/A-Levels + Zaron) conflicting over daylight attention.', fix: 'Complete separation of states. Study is locked from 09:00 to 18:00. Zaron is locked from 19:30 to 03:00.' },
  { title: 'Maintenance Drag', problem: 'Core platform maintenance and bug troubleshooting eating your building energy.', fix: 'Minimize fixing overhead by delegating automated testing and diagnostic reviews to Claude Code / Cursor. Build solid, test-covered architectures so you focus purely on new integrations.' },
  { title: 'US Timezone Syncs', problem: 'Late meetings dragging up to 02:00 AM causing system-wide wakeup lag.', fix: 'Embrace the midnight advantages. Shift your sleeping loop to 03:00 - 09:00. The 22:30 standup and 01:00 deep calls match their standard working day.' },
  { title: 'Pilot Retention', problem: 'Initial 5-10 enterprise pilots demanding constant high-touch support.', fix: 'WashU co-founder manages active support logs; Georgia Tech co-founder handles quick UI modifications while you coordinate the core orchestration flows.' },
];
