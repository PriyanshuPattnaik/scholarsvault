import type { SignalResourceInput } from '../../types';

export const LIVE_STAGE_RESOURCES: SignalResourceInput[] = [
  // ── LIVE & CONCERT SOUND ──
  { section: 'live', category: 'live', name: 'ProSoundWeb — Church Sound', desc: 'Best free ongoing resource for church audio — IEM mixing, feedback, drum mic\'ing. Read weekly.', url: 'https://www.prosoundweb.com/category/church-sound/', tags: ['core', 'free'] },
  { section: 'live', category: 'live', name: 'Behind The Mixer', desc: 'Volunteer church tech blog — feedback, monitors, pastoral booth culture.', url: 'https://www.behindthemixer.com', tags: ['rare', 'free'] },
  { section: 'live', category: 'live', name: 'Church Production Magazine', desc: 'Elevation/Hillsong gear breakdowns, mic lists, console choices in case studies.', url: 'https://www.churchproduction.com', tags: ['rare', 'free'] },
  { section: 'live', category: 'live', name: 'Church Front of House (YouTube)', desc: 'Church-specific live mixing tutorials for volunteer techs.', url: 'https://www.youtube.com/@ChurchFrontOfHouse', tags: ['free'] },
  { section: 'live', category: 'live', name: 'Kettner Creative — Live Sound', desc: 'Wireless systems, stage setup, live mixing for churches and venues.', url: 'https://www.youtube.com/@KettnerCreative', tags: ['rare', 'free'] },
  { section: 'live', category: 'live', name: 'Church Sound Podcast', desc: 'FOH engineers on IEMs, console choice, team leadership.', url: 'https://churchsoundpodcast.com', tags: ['rare', 'free'] },
  { section: 'live', category: 'live', name: 'SynAudCon / Pro Sound Training', desc: 'Room acoustics, system tuning, rigging math — return in Phase 4.', url: 'https://www.synaudcon.com', tags: ['rare'] },

  // ── CHURCH LIVESTREAM ──
  { section: 'stream', category: 'stream', name: 'OBS Studio', desc: 'Free open-source streaming — learn scenes/sources before touching church hardware.', url: 'https://obsproject.com', tags: ['core', 'free'] },
  { section: 'stream', category: 'stream', name: 'Blackmagic ATEM Mini', desc: 'De facto church streaming switcher line — Mini Pro ISO records isolated cameras.', url: 'https://www.blackmagicdesign.com/products/atemmini', tags: ['rare'] },
  { section: 'stream', category: 'stream', name: 'Blackmagic Camera (iPhone)', desc: 'Manual ISO, shutter, focus peaking, NDI — free cinema camera app.', url: 'https://www.blackmagicdesign.com/products/blackmagiccamera', tags: ['core', 'free'] },
  { section: 'stream', category: 'stream', name: 'Ruah Creative — Church Stream Guide', desc: 'Equipment lists at 3 budget tiers + full signal-flow diagrams.', url: 'https://ruahcreativehouse.org/blog/church-livestream-setup-guide/', tags: ['rare', 'free'] },
  { section: 'stream', category: 'stream', name: 'StreamGeeks', desc: 'OBS, vMix, encoder settings, bitrate, multi-camera sync for churches.', url: 'https://www.youtube.com/@StreamGeeks', tags: ['rare', 'free'] },
  { section: 'stream', category: 'stream', name: 'Church Training Academy', desc: 'Cameras, switchers, volunteer team building — Sunday troubleshooting focus.', url: 'https://www.youtube.com/@ChurchTrainingAcademy', tags: ['rare', 'free'] },

  // ── PROPRESENTER & NDI ──
  { section: 'propresenter', category: 'propresenter', name: 'ProPresenter (trial)', desc: 'Industry standard worship lyrics/graphics — Hillsong/Elevation production teams use this.', url: 'https://renewedvision.com/propresenter/', tags: ['rare'] },
  { section: 'propresenter', category: 'propresenter', name: 'NDI Tools', desc: 'Free video over network — ProPresenter feeds switcher wirelessly.', url: 'https://ndi.video/tools/', tags: ['rare', 'free'] },
  { section: 'propresenter', category: 'propresenter', name: 'CMG — 30 Church Stream Setups', desc: '30 real churches\' full gear lists side by side — budget to broadcast-grade.', url: 'https://www.churchmotiongraphics.com/blog/30-real-examples-of-live-stream-setups-used-in-churches/', tags: ['rare', 'free'] },
  { section: 'propresenter', category: 'propresenter', name: 'Renewed Vision — Learn', desc: 'Official ProPresenter tutorials — lyrics routing, stage display, NDI, MIDI.', url: 'https://renewedvision.com/support/learn/', tags: ['rare', 'free'] },
  { section: 'propresenter', category: 'propresenter', name: 'ProContent — Free Worship Media', desc: 'Free motion backgrounds — study how pro graphics packages are structured.', url: 'https://www.procontent.net', tags: ['rare', 'free'] },

  // ── PRO GEAR REFERENCE ──
  { section: 'gearlist', category: 'gearlist', name: 'MultiTracks University (MxU)', desc: 'Hillsong/Elevation engineers on camera — FOH mixing, IEM setup, click tracks.', url: 'https://www.youtube.com/@MultiTracksUniversity', tags: ['core', 'free'] },
  { section: 'gearlist', category: 'gearlist', name: 'MultiTracks.com', desc: 'Real worship charts, click tracks, multitracks — Hillsong/Elevation/Bethel stems.', url: 'https://www.multitracks.com', tags: ['rare'] },
  { section: 'gearlist', category: 'gearlist', name: 'ChurchTechToday — Gear Guides', desc: 'Budget-tier equipment lists for church audio, video, streaming.', url: 'https://churchtechtoday.com', tags: ['rare', 'free'] },
  { section: 'gearlist', category: 'gearlist', name: 'Sweetwater — Church Buying Guides', desc: 'Curated worship/streaming gear lists — learn what each category does.', url: 'https://www.sweetwater.com/insync/category/church/', tags: ['rare', 'free'] },
  { section: 'gearlist', category: 'gearlist', name: 'Loop Community Blog', desc: 'Click tracks, multitracks, live worship production workflows.', url: 'https://loopcommunity.com/en-us/blog', tags: ['rare', 'free'] },
];
