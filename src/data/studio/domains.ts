import type { LucideIcon } from 'lucide-react';
import {
  Music, Headphones, Radio, Disc3, Clapperboard, Flame, GraduationCap, Zap,
} from 'lucide-react';

export interface StudioDomain {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  accent: string;
  sections: string[];
  description: string;
}

export const STUDIO_DOMAINS: StudioDomain[] = [
  {
    id: 'music-core',
    label: 'Music Core',
    shortLabel: 'MUSIC',
    icon: Music,
    accent: 'text-hud-violet border-hud-violet/40 bg-hud-violet/10',
    sections: ['theory', 'ear', 'guitar'],
    description: 'Theory · ear training · fretboard · Nashville numbers',
  },
  {
    id: 'audio-eng',
    label: 'Audio Engineering',
    shortLabel: 'AUDIO',
    icon: Headphones,
    accent: 'text-hud-cyan border-hud-cyan/40 bg-hud-cyan/10',
    sections: ['foundations', 'mics', 'console', 'physics', 'mastering'],
    description: 'Signal flow · mics · consoles · DSP · mix/master',
  },
  {
    id: 'live-stage',
    label: 'Live & Stage',
    shortLabel: 'LIVE',
    icon: Radio,
    accent: 'text-hud-amber border-hud-amber/40 bg-hud-amber/10',
    sections: ['live', 'stream', 'propresenter', 'gearlist'],
    description: 'FOH · IEMs · church stream · ProPresenter · pro gear',
  },
  {
    id: 'production',
    label: 'Music Production',
    shortLabel: 'DAW',
    icon: Disc3,
    accent: 'text-hud-emerald border-hud-emerald/40 bg-hud-emerald/10',
    sections: ['production'],
    description: 'Reaper · Ableton · FL Studio · open-source synths',
  },
  {
    id: 'cinema',
    label: 'Cinema & Video',
    shortLabel: 'VIDEO',
    icon: Clapperboard,
    accent: 'text-hud-rose border-hud-rose/40 bg-hud-rose/10',
    sections: ['cinema', 'davinci', 'iphone'],
    description: 'Cinematography · DaVinci · iPhone filmmaking',
  },
  {
    id: 'worship',
    label: 'Worship & Spiritual',
    shortLabel: 'WORSHIP',
    icon: Flame,
    accent: 'text-hud-warning border-hud-warning/40 bg-hud-warning/10',
    sections: ['worship', 'spiritual'],
    description: 'Worship leading · theology · team culture',
  },
  {
    id: 'courses',
    label: 'Courses & Community',
    shortLabel: 'LEARN',
    icon: GraduationCap,
    accent: 'text-hud-blue border-hud-blue/40 bg-hud-blue/10',
    sections: ['courses', 'forum'],
    description: 'Coursera · Berklee · MIT OCW · pro forums',
  },
];

export const STUDIO_STARTER_RIG =
  'Gaming laptop → Reaper + OBS + DaVinci Resolve + X32-Edit · Epiphone + JustinGuitar · MIDI keyboard → Surge XT / Vital · iPhone → Blackmagic Camera · Coursera Berklee';
