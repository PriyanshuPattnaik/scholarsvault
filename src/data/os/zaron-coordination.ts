export interface CoordinationRole {
  partner: string;
  school: string;
  focus: string[];
  asyncHours: string;
  syncMeetings: string[];
}

export interface WeeklyRhythm {
  day: string;
  you: string;
  gt: string;
  washu: string;
}

export const TIMEZONE_NOTE =
  'Evening block 19:30–03:00 IST overlaps US 09:00–16:30 EST/CST — you ship while they sleep; they QA and GTM while you study.';

export const COORDINATION_ROLES: CoordinationRole[] = [
  {
    partner: 'GT (CS)',
    school: 'Georgia Tech',
    focus: ['Frontend polish', 'Integration QA', 'Pilot bug triage', 'CI/test harness'],
    asyncHours: 'Your 20:00–22:30 build → their morning review',
    syncMeetings: ['22:30 standup (09:00 EST)', '01:00 ops sync (04:30 EST)'],
  },
  {
    partner: 'WashU (Finance)',
    school: 'Washington University',
    focus: ['Enterprise pilot support', 'GTM docs', 'Investor narrative', 'Pricing & contracts'],
    asyncHours: 'Your Notion hand-off 19:30 → their daytime outreach',
    syncMeetings: ['22:30 standup', '01:00 pilot metrics review'],
  },
];

export const YOUR_COORDINATION = {
  title: 'Product & Tech Orchestrator',
  owns: [
    'Core agentic orchestration architecture',
    'Feature direction & acceptance criteria',
    'Cursor / Claude Code / Kiro delegation scripts',
    'Pilot technical escalations only',
  ],
  delegates: [
    'UI hotfixes → GT',
    'Customer support logs → WashU',
    'Regression testing → GT + agentic CI',
    'Investor deck drafts → WashU (you review narrative)',
  ],
  weeklyOutputs: [
    'Sunday: next-week product brief in Notion',
    'Daily 19:30: async task board for US partners',
    'Post-standup: one merged PR or demo URL per day minimum',
    'Monthly: one pilot case study with measurable ROI',
  ],
};

export const WEEKLY_RHYTHM: WeeklyRhythm[] = [
  { day: 'Mon–Fri', you: '09:00–18:00 exams · 19:30–03:00 Zaron + Studio', gt: 'Build/review during your night blocks', washu: 'GTM + pilot calls during US day' },
  { day: 'Saturday', you: 'Same study block · lighter Zaron if needed', gt: 'Integration sprints', washu: 'Outreach + deck refinement' },
  { day: 'Sunday', you: 'Architecture planning + A-Level audit + weekly brief', gt: 'Optional async check-in', washu: 'Pilot pipeline review' },
];
