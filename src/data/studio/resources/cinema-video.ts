import type { SignalResourceInput } from '../../types';

export const CINEMA_VIDEO_RESOURCES: SignalResourceInput[] = [
  // ── CINEMATOGRAPHY PRINCIPLES ──
  { section: 'cinema', category: 'cinema', name: 'Wolfcrow — Cinematography Science', desc: 'Exposure, dynamic range, lens equivalence — why iPhone footage looks "phone-y" and how to fix it.', url: 'https://wolfcrow.com', tags: ['core', 'free'] },
  { section: 'cinema', category: 'cinema', name: 'StudioBinder — Cinematography', desc: 'Shot types, framing, 180° rule, coverage — apply to iPhone worship films.', url: 'https://www.studiobinder.com/blog/cinematography-techniques/', tags: ['core', 'free'] },
  { section: 'cinema', category: 'cinema', name: 'Every Frame a Painting', desc: 'Legendary video essays on editing, composition, visual storytelling — free film school.', url: 'https://www.youtube.com/playlist?list=PLdFH-2UnKCwOiv1Vyg-RysQhhI7e0oWDj', tags: ['rare', 'free'] },
  { section: 'cinema', category: 'cinema', name: 'In Depth Cine', desc: 'Shot-by-shot breakdowns — lighting ratios, lens choices, blocking decoded.', url: 'https://www.youtube.com/@InDepthCine', tags: ['rare', 'free'] },
  { section: 'cinema', category: 'cinema', name: 'Roger Deakins Forum', desc: 'Greatest living cinematographer answers community questions.', url: 'https://www.rogerdeakins.com/forums/', tags: ['rare', 'free'] },
  { section: 'cinema', category: 'cinema', name: 'No Film School', desc: 'Practical interviews, pricing guides, tech breakdowns for filmmakers.', url: 'https://nofilmschool.com', tags: ['free'] },
  { section: 'cinema', category: 'cinema', name: 'Film Riot', desc: 'Zero-budget filmmaking — lighting with windows, DIY diffusion, editing rhythm.', url: 'https://www.youtube.com/@FilmRiot', tags: ['free'] },
  { section: 'cinema', category: 'cinema', name: 'Steve Yedlin — On Color Science', desc: 'Display target preparation is the visual engine — analytical color theory.', url: 'https://www.yedlin.net/OnColorScience/', tags: ['rare', 'free'] },

  // ── DAVINCI RESOLVE ──
  { section: 'davinci', category: 'davinci', name: 'DaVinci Resolve (Free)', desc: 'Full edit + color + Fairlight audio on gaming laptop. Industry standard at $0.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', tags: ['core', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'Blackmagic — Free Training', desc: 'Official Resolve training — edit, color, Fusion, Fairlight pages.', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', tags: ['core', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'JayAreTV — Resolve Color', desc: 'Node-based grading for beginners — scopes, contrast, skin tones for worship B-roll.', url: 'https://www.youtube.com/@JayAreTV', tags: ['rare', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'Alex Jordan — Resolve Training', desc: 'Comprehensive free course — edit shortcuts, Fusion basics, delivery codecs.', url: 'https://www.youtube.com/@AlexJordan', tags: ['rare', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'Casey Faris — Resolve', desc: 'Color wheels, nodes, Fairlight audio for church editors on a budget.', url: 'https://www.youtube.com/@CaseyFaris', tags: ['rare', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'Darren Mostyn — Colorist', desc: 'Professional scopes, HDR, delivery — worship livestream grade polish.', url: 'https://www.youtube.com/@DarrenMostyn', tags: ['rare', 'free'] },
  { section: 'davinci', category: 'davinci', name: 'Lift Gamma Gain Forum', desc: 'Advanced technical color grade discussion — return when basics click.', url: 'https://www.liftgammagain.com/forum/index.php', tags: ['rare', 'free'] },

  // ── IPHONE VIDEOGRAPHY ──
  { section: 'iphone', category: 'iphone', name: 'Blackmagic Camera App', desc: 'Manual ISO, shutter angle, ProRes, focus peaking — primary church camera app.', url: 'https://www.blackmagicdesign.com/products/blackmagiccamera', tags: ['core', 'free'] },
  { section: 'iphone', category: 'iphone', name: 'iPhone Filmmaker (YouTube)', desc: 'Lighting, gimbal moves, smartphone color — shoot worship B-roll at home.', url: 'https://www.youtube.com/@iPhoneFilmmaker', tags: ['rare', 'free'] },
  { section: 'iphone', category: 'iphone', name: 'Potato Jet', desc: 'iPhone vs cinema camera tests — sensor limits, ND filters, anamorphic.', url: 'https://www.youtube.com/@PotatoJet', tags: ['rare', 'free'] },
  { section: 'iphone', category: 'iphone', name: 'Brandon Li — Mobile Filmmaking', desc: 'Gimbal choreography, location scouting, edit rhythm on phone.', url: 'https://www.youtube.com/@brandonli', tags: ['rare', 'free'] },
  { section: 'iphone', category: 'iphone', name: 'Sean Kitching — Mobile Video', desc: 'iPhone lighting, ND filters, exposure for testimony and worship filming.', url: 'https://www.youtube.com/@SeanKitching', tags: ['rare', 'free'] },
  { section: 'iphone', category: 'iphone', name: 'Moment — Filmmaking Guides', desc: 'Lens attachments, ND filters, mobile rigging — when to buy vs when technique is enough.', url: 'https://www.moment.com/blogs/filmmaking', tags: ['free'] },
  { section: 'iphone', category: 'iphone', name: 'Filmic Pro', desc: 'Alternative pro camera — LOG profiles, false color. Industry standard pre-Blackmagic app.', url: 'https://www.filmicpro.com', tags: ['paid'] },
];
