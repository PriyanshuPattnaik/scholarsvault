export type AppTab = 'vault' | 'os' | 'milestones' | 'signal';

export const APP_TABS: { id: AppTab; label: string; emoji: string }[] = [
  { id: 'vault', label: 'The Cave', emoji: '📚' },
  { id: 'os', label: 'Master OS', emoji: '🧭' },
  { id: 'milestones', label: 'Alignment', emoji: '🎯' },
  { id: 'signal', label: 'The Studio', emoji: '🎚️' },
];

export const STARTER_RIG =
  'Gaming laptop → Reaper + OBS + DaVinci Resolve + X32-Edit · Epiphone + JustinGuitar · MIDI keyboard → virtual instruments · iPhone → Blackmagic Camera app · Coursera Berklee (existing subscription)';
