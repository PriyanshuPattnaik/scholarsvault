import type { SignalChainSection } from '../../types';

export const STUDIO_SECTIONS: SignalChainSection[] = [
  { id: 'theory', label: 'Music Theory', order: 1 },
  { id: 'ear', label: 'Ear Training & NNS', order: 2 },
  { id: 'guitar', label: 'Guitar Prodigy', order: 3 },
  { id: 'foundations', label: 'Signal Flow', order: 4 },
  { id: 'mics', label: 'Microphone Theory', order: 5 },
  { id: 'console', label: 'Console & Mixing', order: 6 },
  { id: 'physics', label: 'Audio Physics & DSP', order: 7 },
  { id: 'mastering', label: 'Mix & Master', order: 8 },
  { id: 'live', label: 'Live & Concert Sound', order: 9 },
  { id: 'stream', label: 'Church Livestream', order: 10 },
  { id: 'propresenter', label: 'ProPresenter & NDI', order: 11 },
  { id: 'gearlist', label: 'Pro Gear Reference', order: 12 },
  { id: 'production', label: 'DAW & Production', order: 13 },
  { id: 'cinema', label: 'Cinematography', order: 14 },
  { id: 'davinci', label: 'DaVinci Resolve', order: 15 },
  { id: 'iphone', label: 'iPhone Videography', order: 16 },
  { id: 'worship', label: 'Worship Leadership', order: 17 },
  { id: 'spiritual', label: 'Spiritual Depth', order: 18 },
  { id: 'courses', label: 'Coursera & Courses', order: 19 },
  { id: 'forum', label: 'Forums & Community', order: 20 },
];

export function sectionLabel(id: string): string {
  return STUDIO_SECTIONS.find((s) => s.id === id)?.label ?? id;
}
