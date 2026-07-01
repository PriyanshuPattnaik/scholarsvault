import type { SignalResourceInput } from '../../types';

export const MUSIC_CORE_RESOURCES: SignalResourceInput[] = [
  // ── MUSIC THEORY ──
  { section: 'theory', category: 'theory', name: 'musictheory.net — Lessons', desc: 'The worship leader\'s arithmetic. Scales, chords, progressions — pair with daily ear exercises.', url: 'https://www.musictheory.net/lessons', tags: ['core', 'free'] },
  { section: 'theory', category: 'theory', name: 'Open Music Theory', desc: 'Free open-source university textbook — diatonic harmony, chord function, voice leading. Where "what chord under this word" actually lives.', url: 'https://www.openmusictheory.com', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'Hooktheory — TheoryTab', desc: 'Thousands of real worship songs with color-coded Roman numerals. Answers harmonic function faster than any textbook.', url: 'https://www.hooktheory.com/theorytab', tags: ['core', 'free'] },
  { section: 'theory', category: 'theory', name: 'Lightnote', desc: 'Interactive theory from first principles — sound before notation. CS-brain entry: concepts as systems.', url: 'https://www.lightnote.co', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'Ableton — Learning Music', desc: 'Free browser course — beats, melody, harmony. Use MIDI keyboard before opening a full DAW.', url: 'https://learningmusic.ableton.com', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'ToneDear Ear Drills', desc: 'Interval and chord-quality identification. Run after Functional Ear Trainer.', url: 'https://tonedear.com', tags: ['free'] },
  { section: 'theory', category: 'theory', name: '12tone (YouTube)', desc: 'Rigorous theory essays — voice leading, modal interchange. For when beginner material feels easy.', url: 'https://www.youtube.com/@12tone', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'MusicTheoryForGuitar.com', desc: 'Chord chemistry and modal interchange on guitar — worship progressions without piano gatekeeping.', url: 'https://www.musictheoryforguitar.com', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'Rick Beato — Music Theory', desc: 'Harmonic analysis of worship and pop — why bridges lift and pre-choruses tension.', url: 'https://www.youtube.com/@rickbeato', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'Signals Music Studio', desc: 'Modes, borrowed chords, "why does this worship song feel huge?" — harmonic function on guitar.', url: 'https://www.youtube.com/@SignalsMusicStudio', tags: ['rare', 'free'] },
  { section: 'theory', category: 'theory', name: 'Ethan Hein — Music Theory', desc: 'NYU adjunct applying theory to pop and hip-hop with DAW screenshots — theory for producers.', url: 'https://www.ethanhein.com', tags: ['rare', 'free'] },

  // ── EAR TRAINING & NNS ──
  { section: 'ear', category: 'ear', name: 'Functional Ear Trainer', desc: 'Highest-leverage ear tool. Hear scale degrees in context — exactly how worship harmony works. Free desktop app.', url: 'https://www.miles.be/software/1-functional-ear-trainer', tags: ['core', 'free'] },
  { section: 'ear', category: 'ear', name: 'musictheory.net — Exercises', desc: 'Daily warm-up: intervals, triads, key signatures by ear before functional training.', url: 'https://www.musictheory.net/exercises', tags: ['core', 'free'] },
  { section: 'ear', category: 'ear', name: 'Teoria', desc: 'Conservatory-style chord identification, harmonic dictation, cadence recognition.', url: 'https://www.teoria.com', tags: ['free'] },
  { section: 'ear', category: 'ear', name: 'SoundGym', desc: 'Gamified EQ, compression, level-matching — production ears separate from harmonic ears.', url: 'https://www.soundgym.co', tags: ['rare', 'free'] },
  { section: 'ear', category: 'ear', name: 'Perfect Ear (App)', desc: 'Mobile ear trainer — intervals, chords, rhythm dictation during commute blocks.', url: 'https://www.perfect-ear.com', tags: ['rare', 'free'] },
  { section: 'ear', category: 'ear', name: 'Worship Together — NNS Charts', desc: 'Nashville Number System guides and chord charts for church worship teams.', url: 'https://www.worshiptogether.com', tags: ['core', 'free'] },
  { section: 'ear', category: 'ear', name: 'PraiseCharts — NNS', desc: 'Every major worship song pre-transposed to any key in Nashville numbers.', url: 'https://www.praisecharts.com', tags: ['paid'] },

  // ── GUITAR PRODIGY ──
  { section: 'guitar', category: 'guitar', name: 'JustinGuitar — Full Curriculum', desc: 'Primary guitar OS. Grade 1–3 mechanics → Intermediate → CAGED → Music Theory. 15 min daily.', url: 'https://www.justinguitar.com/guitar-lessons', tags: ['core', 'free'] },
  { section: 'guitar', category: 'guitar', name: 'JustinGuitar — Practical Music Theory', desc: 'Theory on the fretboard — intervals, chord construction, why shapes move.', url: 'https://www.justinguitar.com/modules/music-theory', tags: ['core', 'free'] },
  { section: 'guitar', category: 'guitar', name: 'Paul Davids (YouTube)', desc: 'Ear-first guitar — voice-leading worship changes, fingerstyle texture for acoustic sets.', url: 'https://www.youtube.com/@PaulDavids', tags: ['rare', 'free'] },
  { section: 'guitar', category: 'guitar', name: 'FaChords Fretboard Trainer', desc: 'Browser trainer for note names, intervals, CAGED. 5 min daily until instant fretboard fluency.', url: 'https://www.fachords.com/guitar-fretboard-trainer/', tags: ['free'] },
  { section: 'guitar', category: 'guitar', name: 'Marty Music', desc: 'Song tutorials with chord transitions — bridge between chord charts and theory.', url: 'https://www.youtube.com/@martymusic', tags: ['rare', 'free'] },
  { section: 'guitar', category: 'guitar', name: 'Worship Tutorials', desc: 'Song breakdowns, pad layers, guitar tones for specific worship songs.', url: 'https://www.youtube.com/@WorshipTutorials', tags: ['free'] },
  { section: 'guitar', category: 'guitar', name: 'Ultimate Guitar', desc: 'Verify ear transcriptions only — never perform from this. Rewrite in NNS on your own chart.', url: 'https://www.ultimate-guitar.com', tags: ['free'] },
];
