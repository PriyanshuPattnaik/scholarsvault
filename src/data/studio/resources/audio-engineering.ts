import type { SignalResourceInput } from '../../types';

export const AUDIO_ENGINEERING_RESOURCES: SignalResourceInput[] = [
  // ── SIGNAL FLOW ──
  { section: 'foundations', category: 'foundations', name: 'Recording Revolution', desc: 'Plainest-English gain staging, EQ, compression. Start here before any gear tutorial.', url: 'https://www.recordingrevolution.com', tags: ['core', 'free'] },
  { section: 'foundations', category: 'foundations', name: 'Sound On Sound — Techniques', desc: 'Most respected audio publication. Mix Rescue and fundamentals at depth no YouTube matches.', url: 'https://www.soundonsound.com/techniques', tags: ['rare', 'free'] },
  { section: 'foundations', category: 'foundations', name: 'Ethan Winer — The Audio Expert', desc: 'Evidence-based audio literacy — debunks myths with measurements.', url: 'https://www.ethanwiner.com', tags: ['rare', 'free'] },
  { section: 'foundations', category: 'foundations', name: 'PreSonus Technical Articles', desc: 'Signal chain, aux sends, buses, VCA groups — gear-agnostic console theory.', url: 'https://www.presonus.com/en-IN/learn/technical-articles', tags: ['free'] },
  { section: 'foundations', category: 'foundations', name: 'Sound Foundations (Pro Tools Expert)', desc: 'Gain structure, metering, mixing fundamentals from working pros.', url: 'https://www.pro-tools-expert.com/production-expert-1/sound-foundations', tags: ['rare', 'free'] },
  { section: 'foundations', category: 'foundations', name: 'LANDR Blog — Audio Fundamentals', desc: 'Vendor-neutral mixing and mastering reading list before paid courses.', url: 'https://blog.landr.com', tags: ['rare', 'free'] },

  // ── MICROPHONE THEORY ──
  { section: 'mics', category: 'mics', name: 'Shure Insights / Mic Basics', desc: 'Industry-standard polar pattern, dynamic vs condenser, proximity effect reference.', url: 'https://www.shure.com/en-US/insights', tags: ['core', 'free'] },
  { section: 'mics', category: 'mics', name: 'DPA Mic University', desc: 'Polar patterns explained with physics — return here once basics click.', url: 'https://www.dpamicrophones.com/mic-university', tags: ['rare', 'free'] },
  { section: 'mics', category: 'mics', name: 'ChurchLeaders — Worship Drums', desc: '20-year veteran\'s kick/snare/tom/OH mic guide for worship kits.', url: 'https://www.churchleaders.com/worship/tech-media/144620-microphones-in-worship-drums.html', tags: ['rare', 'free'] },
  { section: 'mics', category: 'mics', name: 'Sweetwater inSync — Microphones', desc: 'Large vs small diaphragm, ribbon mics, phantom power — theory via buyer guides.', url: 'https://www.sweetwater.com/insync/category/microphones/', tags: ['free'] },
  { section: 'mics', category: 'mics', name: 'Recording Hacks — Mic Placement', desc: 'Illustrated vocal, guitar, drum, room placement for worship contexts.', url: 'https://recordinghacks.com', tags: ['rare', 'free'] },
  { section: 'mics', category: 'mics', name: 'Lewitt Audio University', desc: 'Free video courses on condenser vs dynamic and stereo techniques.', url: 'https://www.lewitt-audio.com/university', tags: ['rare', 'free'] },

  // ── CONSOLE & MIXING ──
  { section: 'console', category: 'console', name: 'Behringer X32-Edit (Free)', desc: 'Virtual console on laptop — learn every knob without hardware. Same architecture as mid-size church desks.', url: 'https://www.behringer.com/downloads.html', tags: ['core', 'free'] },
  { section: 'console', category: 'console', name: 'Mixing Station App', desc: 'Remote X32/M32 control — learn the interface you\'ll meet on real church desks.', url: 'https://www.youtube.com/@MixingStation', tags: ['rare', 'free'] },
  { section: 'console', category: 'console', name: 'Yamaha Pro Audio Training', desc: 'Gain structure, monitor mixing, digital console workflows — brand-agnostic theory.', url: 'https://www.youtube.com/@YamahaProAudio', tags: ['rare', 'free'] },
  { section: 'console', category: 'console', name: 'Allen & Heath Video Training', desc: 'SQ and dLive deep dives — aux routing, scenes, FX sends on worship desks.', url: 'https://www.allen-heath.com/training/', tags: ['rare', 'free'] },
  { section: 'console', category: 'console', name: 'Pro Sound Training', desc: 'SynAudCon successor — gain structure and EQ webinars from live sound education lineage.', url: 'https://www.prosoundtraining.com', tags: ['rare', 'free'] },
  { section: 'console', category: 'console', name: 'Dan Worrall (YouTube)', desc: 'Physics of EQ and compression — why knobs do what they do, not recipes.', url: 'https://www.youtube.com/@DanWorrall', tags: ['rare', 'free'] },

  // ── AUDIO PHYSICS & DSP ──
  { section: 'physics', category: 'physics', name: 'UNSW — Decibels Explained', desc: 'dB SPL, dBu, dBV — math behind every fader and meter.', url: 'https://www.phys.unsw.edu.au/jw/dB.html', tags: ['rare', 'free'] },
  { section: 'physics', category: 'physics', name: 'Penn State — Acoustics Animations', desc: 'Standing waves, room modes, interference — visual physics of feedback.', url: 'https://www.acs.psu.edu/drussell/demos.html', tags: ['rare', 'free'] },
  { section: 'physics', category: 'physics', name: 'DSP Guide (free book)', desc: 'Digital signal processing from samples to FFT — understand plugins at code level.', url: 'https://www.dspguide.com', tags: ['rare', 'free'] },
  { section: 'physics', category: 'physics', name: 'Acoustics Freq', desc: 'Why your church room rings at 250 Hz — tame reflections without magic plugins.', url: 'https://www.acousticsfreq.com', tags: ['rare', 'free'] },
  { section: 'physics', category: 'physics', name: 'MIT OCW — Audio & Acoustics', desc: 'University courses on acoustics and signal processing — CS-brain audio depth.', url: 'https://ocw.mit.edu/search/?q=audio', tags: ['rare', 'free'] },
  { section: 'physics', category: 'physics', name: 'Audio Precision Learning Center', desc: 'THD, frequency response, measurement — what analyzers show when tuning a room.', url: 'https://www.ap.com/kb', tags: ['rare', 'free'] },

  // ── MIX & MASTER ──
  { section: 'mastering', category: 'mastering', name: 'Mixing With Mike', desc: 'University-level free mixing curriculum — EQ, compression, bussing worship drums/vocals.', url: 'https://www.youtube.com/@MixingWithMike', tags: ['rare', 'free'] },
  { section: 'mastering', category: 'mastering', name: 'iZotope Learn', desc: 'LUFS, limiting, spectral balance — mastering concepts before buying plugins.', url: 'https://www.izotope.com/en/learn', tags: ['rare', 'free'] },
  { section: 'mastering', category: 'mastering', name: 'Cambridge Music Technology', desc: 'Free multitrack sessions — practice mixing real stems.', url: 'https://www.cambridge-mt.com/ms/mtk.htm', tags: ['rare', 'free'] },
  { section: 'mastering', category: 'mastering', name: 'Ian Shepherd — Production Advice', desc: 'LUFS targets for worship releases — loudness war and streaming translation.', url: 'https://productionadvice.co.uk', tags: ['rare', 'free'] },
  { section: 'mastering', category: 'mastering', name: 'Mastering The Mix — Learn', desc: 'Spectral balance and reference monitoring concepts.', url: 'https://www.masteringthemix.com/blogs/learn', tags: ['rare', 'free'] },
  { section: 'mastering', category: 'mastering', name: 'Waves Audio Tutorials', desc: 'Same plugin ecosystem Hillsong/Elevation use via SoundGrid.', url: 'https://www.youtube.com/@WavesAudio', tags: ['free'] },
  { section: 'mastering', category: 'mastering', name: 'Produce Like A Pro', desc: 'Multi-platinum engineers on vocal chains, drum sounds, analog workflow.', url: 'https://www.youtube.com/@ProduceLikeAPro', tags: ['rare', 'free'] },
];
