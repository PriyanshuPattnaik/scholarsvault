export type AppTab = 'vault' | 'os' | 'milestones' | 'signal';

export const APP_TABS: { id: AppTab; label: string; emoji: string }[] = [
  { id: 'vault', label: 'The Cave', emoji: '📚' },
  { id: 'os', label: 'Master OS', emoji: '🧭' },
  { id: 'milestones', label: 'Alignment', emoji: '🎯' },
  { id: 'signal', label: 'The Studio', emoji: '🎚️' },
];
