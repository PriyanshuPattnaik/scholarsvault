import type { GearRow } from '../../types';

export const GEAR_ROWS: GearRow[] = [
  {
    ministry: 'Elevation Worship',
    console: 'SSL Live L650 / L550 Plus; DiGiCo SD7/SD10 on major recordings',
    monitors: 'Shure PSM1000 IEM; Sennheiser G4/G5 wireless',
    pa: 'L-Acoustics K1/K2; d&b audiotechnik subs on tours',
    studio: 'SSL Duality Delta + Pro Tools HDX; Waves TracksLive multitrack; ProPresenter + Resolume',
  },
  {
    ministry: 'Hillsong Worship',
    console: 'Yamaha Rivage PM / Avid Venue S6L / Midas Pro (tour-dependent); Waves SoundGrid for plugin consistency',
    monitors: 'Shure Axient Digital + PSM1000; UE custom IEMs for vocalists',
    pa: 'L-Acoustics K1/K2 (tour); Adamson S-Series (installs)',
    studio: 'Euphonix S5 Fusion → Pro Tools; Blackmagic ATEM Constellation; ProPresenter',
  },
  {
    ministry: 'Bethel Music',
    console: 'DiGiCo SD10 / SD12; Avid S6L on larger events',
    monitors: 'Shure PSM1000; Radial DI everywhere',
    pa: 'd&b V-Series / L-Acoustics ARCS',
    studio: 'Pro Tools; MultiTracks stems standard; Blackmagic URSA broadcast cams',
  },
  {
    ministry: 'Passion / Elevation-style mid church',
    console: 'Behringer X32 / Midas M32 / Allen & Heath SQ-7',
    monitors: 'Shure PSM300/900; Sennheiser ew 100 G4',
    pa: 'QSC K-Series / RCF ART / L-Acoustics A15 (aspirational)',
    studio: 'ATEM Mini Pro ISO; ProPresenter; OBS backup; 2–3 PTZ or iPhone cams',
  },
];

export const GEAR_NOTES: string[] = [
  'Not a shopping list — a way to recognize the category each piece belongs to, so you know the equivalent tier when you meet it. Console brand matters less than signal-flow fluency: the theory is identical on a Behringer X32 and a $150k DiGiCo.',
  'Mic locker pattern (worship band): Kick — Shure Beta 52A / Audix D6 · Snare — SM57 top + Beta 57 bottom · Toms — MD421 / e604 · OH — KSM141 / Rode NT5 pair · Bass — DI Radial JDI + amp mic SM57 · Acoustic — DPA 4099 / Neumann KM184 · Vocals — SM58 / Beta 58A / KSM8 · Drum subgroups → stereo bus → FOH. Learn the role of each mic type, not the brand worship budget.',
];
