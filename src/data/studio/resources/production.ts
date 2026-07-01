import type { SignalResourceInput } from '../../types';

export const PRODUCTION_RESOURCES: SignalResourceInput[] = [
  { section: 'production', category: 'production', name: 'Reaper (DAW)', desc: 'Start here. Unlimited trial, low CPU. Record guitar, MIDI, mix worship tracks on gaming laptop.', url: 'https://www.reaper.fm', tags: ['core', 'free'] },
  { section: 'production', category: 'production', name: 'REAPER Mania (YouTube)', desc: 'Definitive free Reaper channel — routing, FX chains, worship session templates.', url: 'https://www.youtube.com/@REAPERMania', tags: ['core', 'free'] },
  { section: 'production', category: 'production', name: 'Ableton Learn + Live Lite', desc: 'Session view for worship pads + loops. Often free with MIDI controllers.', url: 'https://www.ableton.com/en/learn/', tags: ['rare', 'free'] },
  { section: 'production', category: 'production', name: 'FL Studio Learning', desc: 'Pattern-based beat design — secondary DAW for production experiments.', url: 'https://www.image-line.com/fl-studio-learning/', tags: ['free'] },
  { section: 'production', category: 'production', name: 'Surge XT (Open Source)', desc: 'Free wavetable synth rivaling Serum for worship pads. Run in Reaper via MIDI.', url: 'https://surge-synthesizer.github.io/', tags: ['rare', 'free', 'oss'] },
  { section: 'production', category: 'production', name: 'Vital Synth (Free Tier)', desc: 'Spectral wavetable — free tier is genuinely usable for pad design.', url: 'https://vital.audio', tags: ['rare', 'free'] },
  { section: 'production', category: 'production', name: 'Spitfire BBC Discover (Free)', desc: 'Free orchestral library — cinematic worship pads. Requires free account.', url: 'https://www.spitfireaudio.com/bbc-symphony-orchestra-discover', tags: ['rare', 'free'] },
  { section: 'production', category: 'production', name: 'Bedroom Producers Blog', desc: 'Free VSTs, sample libraries, laptop production workflows.', url: 'https://bedroomproducersblog.com', tags: ['rare', 'free'] },
  { section: 'production', category: 'production', name: 'In The Mix (YouTube)', desc: 'FL Studio + mixing, mastering basics, sound design.', url: 'https://www.youtube.com/@InTheMix', tags: ['free'] },
  { section: 'production', category: 'production', name: 'White Sea Studio', desc: 'Mixing philosophy — train ears for what "good" sounds like before buying plugins.', url: 'https://www.youtube.com/@WhiteSeaStudio', tags: ['rare', 'free'] },
  { section: 'production', category: 'production', name: 'Sonic Pi', desc: 'Ruby live-coding for beats — CS crossover into music creation.', url: 'https://sonic-pi.net', tags: ['free', 'oss'] },
  { section: 'production', category: 'production', name: 'Tone.js WebAudio', desc: 'Web Audio API synth graphs — build browser-based worship tools with code.', url: 'https://tonejs.github.io', tags: ['free', 'oss'] },
];
