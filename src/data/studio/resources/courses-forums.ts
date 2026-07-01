import type { SignalResourceInput } from '../../types';

export const COURSES_FORUM_RESOURCES: SignalResourceInput[] = [
  // ── COURSERA & FORMAL COURSES ──
  { section: 'courses', category: 'courses', name: 'Coursera — Berklee Music Production', desc: 'Your subscription. Berklee faculty DAW workflow, mic techniques, mixing. One at a time.', url: 'https://www.coursera.org/specializations/music-production', tags: ['core', 'coursera'] },
  { section: 'courses', category: 'courses', name: 'Coursera — Berklee Musicianship', desc: 'Developing Your Musicianship specialization — ear training and theory from Berklee.', url: 'https://www.coursera.org/specializations/musicianship', tags: ['core', 'coursera'] },
  { section: 'courses', category: 'courses', name: 'Coursera — Berklee Songwriting', desc: 'Song structure, melody, harmony for worship songwriting depth.', url: 'https://www.coursera.org/specializations/songwriting', tags: ['core', 'coursera'] },
  { section: 'courses', category: 'courses', name: 'Coursera — Film Production', desc: 'Structured cinematography pipeline — complements Wolfcrow/StudioBinder free essays.', url: 'https://www.coursera.org/learn/film-production', tags: ['core', 'coursera'] },
  { section: 'courses', category: 'courses', name: 'Coursera — Audio Engineering', desc: 'Search acoustics, signal processing, Ableton — university partner courses.', url: 'https://www.coursera.org/courses?query=audio%20engineering', tags: ['core', 'coursera'] },
  { section: 'courses', category: 'courses', name: 'Coursera — Guitar for Beginners', desc: 'Berklee guitar fundamentals — structured complement to JustinGuitar.', url: 'https://www.coursera.org/learn/guitar', tags: ['coursera'] },
  { section: 'courses', category: 'courses', name: 'Berklee Online — Free Handouts', desc: 'PDFs on theory, ear training, production — sampler before specializations.', url: 'https://online.berklee.edu/takenote', tags: ['rare', 'free'] },
  { section: 'courses', category: 'courses', name: 'MIT OCW — Music & Audio', desc: 'Free university acoustics, signal processing, music cognition courses.', url: 'https://ocw.mit.edu/search/?q=audio', tags: ['rare', 'free'] },
  { section: 'courses', category: 'courses', name: 'JustinGuitar.com', desc: 'Best free structured guitar curriculum — use alongside Coursera theory.', url: 'https://www.justinguitar.com', tags: ['core', 'free'] },

  // ── FORUMS & COMMUNITY ──
  { section: 'forum', category: 'forum', name: 'Church Motion Graphics', desc: '40k+ church tech leaders — post real gear/workflow questions here.', url: 'https://www.churchmotiongraphics.com', tags: ['rare', 'forum', 'free'] },
  { section: 'forum', category: 'forum', name: 'Blackmagic Design Forum', desc: 'ATEM, Resolve, cameras — staff respond. Search before YouTube.', url: 'https://forum.blackmagicdesign.com/', tags: ['forum', 'free'] },
  { section: 'forum', category: 'forum', name: 'Gearspace — Live Sound', desc: 'Most serious pro-audio forum — FOH engineers from major tours post here.', url: 'https://gearspace.com/board/live-sound/', tags: ['rare', 'forum', 'free'] },
  { section: 'forum', category: 'forum', name: 'r/livesound', desc: 'Practical feedback troubleshooting, console recs, IEM setup.', url: 'https://www.reddit.com/r/livesound/', tags: ['forum', 'free'] },
  { section: 'forum', category: 'forum', name: 'r/audioengineering', desc: 'Studio and live mixing, acoustics, gear — searchable troubleshooting archive.', url: 'https://www.reddit.com/r/audioengineering/', tags: ['rare', 'forum', 'free'] },
  { section: 'forum', category: 'forum', name: 'r/videoengineering', desc: 'Broadcast engineers on SDI, NDI, color pipelines, church AV.', url: 'https://www.reddit.com/r/videoengineering/', tags: ['rare', 'forum', 'free'] },
];
