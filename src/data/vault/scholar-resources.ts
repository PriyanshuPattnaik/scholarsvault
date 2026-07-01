import type { ResourceInput } from '../../types';

export const SCHOLAR_RESOURCES: ResourceInput[] = [
  // Math & Quantitative
  { category: 'math', name: '3Blue1Brown', desc: 'Visual math. Essence of LA + Calculus. Start here before any textbook.', url: 'https://www.3blue1brown.com', tags: ['free'] },
  { category: 'math', name: 'Brilliant.org', desc: 'Interactive problem-solving. Builds intuition, not rote memory.', url: 'https://brilliant.org', tags: ['paid'] },
  { category: 'math', name: 'Khan Academy', desc: 'Comprehensive video tutorials. Complete every exercise completely.', url: 'https://www.khanacademy.org', tags: ['free'] },
  { category: 'math', name: 'Immersive Math', desc: 'Linear algebra textbook with live interactive figures.', url: 'https://immersivemath.com/ila/index.html', tags: ['rare', 'free'] },
  { category: 'math', name: 'Math3ma', desc: 'Categorical and abstract math written for humans.', url: 'https://www.math3ma.com', tags: ['rare'] },
  { category: 'math', name: 'BetterExplained', desc: 'Kalid Azad. Makes Euler\'s formula, Fourier transforms feel obvious.', url: 'https://betterexplained.com', tags: ['rare', 'free'] },
  { category: 'math', name: 'Seeing Theory', desc: 'Probability and statistics as beautiful interactive visualizations.', url: 'https://seeing-theory.brown.edu', tags: ['rare', 'free'] },
  { category: 'math', name: 'Wolfram Alpha', desc: 'Shows step-by-step reasoning. Ideal to verify your mathematical thinking.', url: 'https://www.wolframalpha.com', tags: ['free'] },
  { category: 'math', name: 'MathWorld', desc: 'The most comprehensive math encyclopedia online.', url: 'https://mathworld.wolfram.com', tags: ['free'] },
  { category: 'math', name: 'Cengage Maths', desc: '6 levels of premium physical math preparation for high difficulty.', tags: ['textbook'] },
  { category: 'math', name: 'Maron Calculus', desc: 'Advanced single-variable calculus problem-solving.', tags: ['rare', 'textbook'] },
  { category: 'math', name: 'SL Loney Coordinate Geometry', desc: 'The original coordinate geometry benchmark prep.', tags: ['rare', 'textbook'] },

  // CS Foundations
  { category: 'foundations', name: 'CS50 Extra (Harvard)', desc: 'The gold standard CS intro. Learn to think like a professional developer.', url: 'https://cs50.harvard.edu', tags: ['free'] },
  { category: 'foundations', name: 'Nand2Tetris', desc: 'Build a computer from logic gates up to an operating system & compiler.', url: 'https://nand2tetris.org', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'Teach Yourself CS', desc: 'Curated list of premium books to master software engineering systems.', url: 'https://teachyourselfcs.com', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'Crafting Interpreters', desc: 'Build a complete programming language interpreter from scratch.', url: 'https://craftinginterpreters.com', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'MIT: The Missing Semester', desc: 'Learn shells, terminal commands, vim, git, scripting, and key utilities.', url: 'https://missing.csail.mit.edu', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'Beej\'s Network Guide', desc: 'The most readable networking guide. Sockets, TCP/IP, and system structures.', url: 'https://beej.us/guide/bgnet/', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'Dive Into Systems', desc: 'Textbook on hardware structures, assembly, compiled architectures.', url: 'https://diveintosystems.org', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'OSTEP Operating Systems', desc: 'Free systems textbook: virtualization, concurrency, persistence.', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', tags: ['rare', 'free'] },
  { category: 'foundations', name: 'Exercism', desc: 'Mentored coding challenges in 67 separate programming languages.', url: 'https://exercism.org', tags: ['rare', 'free'] },

  // ML / AI
  { category: 'ml', name: 'Andrej Karpathy\'s Blog', desc: 'Former OpenAI / Tesla AI Director. Host of Eureka Labs. Iconic, incredibly clear builder insights covering neural net formulas, Software 2.0, and hacker-mind instruction guides.', url: 'https://karpathy.ai', tags: ['must-read', 'free'] },
  { category: 'ml', name: 'Colah\'s Blog (Christopher Olah)', desc: 'Anthropic co-founder & Safety modeler. Unmatched, stunning visual and conceptual explanations of neural network internals, attention layers, and interpretability.', url: 'https://colah.github.io', tags: ['must-read', 'rare', 'free'] },
  { category: 'ml', name: 'Jeremy Howard (fast.ai)', desc: 'Co-creator of fast.ai. Pioneer of top-down learning philosophies. Shares rare, pragmatic, honest insights on actual model production, medical diagnostic AI, and pedagogy.', url: 'https://www.fast.ai/about/', tags: ['must-read', 'free'] },
  { category: 'ml', name: 'Yoshua Bengio\'s Blog', desc: 'Turing Award. Artificial intelligence godfather. In-depth research papers and philosophical observations addressing consciousness, safety margins, and scaling limits.', url: 'https://yoshuabengio.org', tags: ['papers', 'free'] },
  { category: 'ml', name: 'Dive into Deep Learning', desc: 'DL database with runnable numpy, PyTorch and JAX instructions.', url: 'https://d2l.ai', tags: ['free'] },
  { category: 'ml', name: 'Distill.pub', desc: 'Dynamic visual papers clarifying ML systems and architectures.', url: 'https://distill.pub', tags: ['rare', 'free'] },
  { category: 'ml', name: 'labml.ai annotated papers', desc: 'Line-by-line PyTorch translations of core transformer papers.', url: 'https://nn.labml.ai', tags: ['rare', 'free'] },
  { category: 'ml', name: 'HuggingFace Learn', desc: 'Definitive practical guide to transformers and NLP pipelines.', url: 'https://huggingface.co/learn', tags: ['free'] },
  { category: 'ml', name: 'OpenAI Spinning Up', desc: 'Deep reinforcement learning from scratch. Clear maths and code.', url: 'https://spinningup.openai.com', tags: ['rare', 'free'] },
  { category: 'ml', name: 'UvA Deep Learning', desc: 'Amsterdam notebooks reconstructing core models from scratch.', url: 'https://uvadlc-notebooks.readthedocs.io', tags: ['rare', 'free'] },
  { category: 'ml', name: 'Yannic Kilcher (YT)', desc: 'Brilliant paper walkthroughs explaining the absolute modern frontier.', url: 'https://www.youtube.com/@YannicKilcher', tags: ['free', 'youtube'] },
  { category: 'ml', name: 'Maxime Labonne\'s blog', desc: 'LLM fine-tuning, quantization, DPO, and alignment.', url: 'https://mlabonne.github.io/blog/', tags: ['rare', 'free'] },
  { category: 'ml', name: 'LLMs from Scratch', desc: 'Sebastian Raschka\'s masterclass walkthrough of building GPT-2.', url: 'https://github.com/rasbt/LLMs-from-scratch', tags: ['rare', 'free'] },

  // Systems
  { category: 'systems', name: 'DDIA (Kleppmann)', desc: 'Designing Data-Intensive Applications. Read chapters 1–5 first.', url: 'https://dataintensive.net', tags: ['paid'] },
  { category: 'systems', name: 'System Design Primer', desc: 'How to scale Twitter, Netflix, and Instagram from zero.', url: 'https://github.com/donnemartin/system-design-primer', tags: ['rare', 'free'] },
  { category: 'systems', name: 'ByteByteGo', desc: 'Alex Xu\'s graphics explaining systems, CDNs, databases at scale.', url: 'https://bytebytegobook.com', tags: ['paid'] },
  { category: 'systems', name: 'High Scalability', desc: 'Primary case studies of how major cloud systems scale under load.', url: 'https://highscalability.com', tags: ['rare', 'free'] },
  { category: 'systems', name: 'PostgreSQL Internals', desc: 'Deep diving query planners, buffers, write-ahead logs.', url: 'https://www.interdb.jp/pg/', tags: ['rare', 'free'] },
  { category: 'systems', name: 'explained.ai', desc: 'Deep visualizations of matrices, gradient flows, and models.', url: 'https://explained.ai', tags: ['rare', 'free'] },

  // Practice
  { category: 'practice', name: 'Advent of Code', desc: 'Annual coding puzzles. Exceptional for practicing algorithms.', url: 'https://adventofcode.com', tags: ['free'] },
  { category: 'practice', name: 'Project Euler', desc: 'Mathematics and computer science integration problems.', url: 'https://projecteuler.net', tags: ['free'] },
  { category: 'practice', name: 'Codeforces', desc: 'Hardcore competitive programming algorithm benchmarks.', url: 'https://codeforces.com', tags: ['free'] },
  { category: 'practice', name: 'Codewars', desc: 'Community kata challenge tracks with diverse solution audits.', url: 'https://www.codewars.com', tags: ['free'] },
  { category: 'practice', name: 'Cryptopals', desc: 'Break actual cryptographic implementations to study safety.', url: 'https://cryptopals.com', tags: ['rare', 'free'] },
  { category: 'practice', name: 'pwn.college', desc: 'ASU cybersecurity engine. Brutally deep assembly exploitation.', url: 'https://pwn.college', tags: ['rare', 'free'] },
  { category: 'practice', name: 'Kaggle Kernels', desc: 'Explore top notebook solutions to study elite ML design.', url: 'https://www.kaggle.com', tags: ['free'] },
  { category: 'practice', name: 'CodeCrafters', desc: 'Build Redis, Git, or SQLite from scratch in multiple languages.', url: 'https://app.codecrafters.io', tags: ['rare', 'paid'] },

  // Research
  { category: 'research', name: 'arXiv cs.LG', desc: 'The pure, unfiltered preprint repository representing the complete frontier of modern machine learning research.', url: 'https://arxiv.org/list/cs.LG/recent', tags: ['papers', 'free'] },
  { category: 'research', name: 'Lilian Weng\'s Blog', desc: 'Head of Safety at OpenAI. Exceptional, extraordinarily rigorous syntheses mapping the mathematical mechanics of agents, safety benchmarks, and scale.', url: 'https://lilianweng.github.io', tags: ['must-read', 'free'] },
  { category: 'research', name: 'Gwern Branwen', desc: 'Pseudonymous independent researcher. Brilliant, multi-disciplinary living essays analyzing scaling hypothesis, cognitive statistics, and AI safety.', url: 'https://gwern.net', tags: ['must-read', 'rare', 'free'] },
  { category: 'research', name: 'Geoffrey Hinton\'s Lectures', desc: 'Nobel Laureate in Physics 2024. Godfather of Deep Learning. Key historical and future warnings addressing autonomous model alignment.', url: 'https://www.geoffreyhinton.com', tags: ['must-read', 'free'] },
  { category: 'research', name: 'Papers With Code', desc: 'Find modern paper releases indexed by their open-source repos.', url: 'https://paperswithcode.com', tags: ['rare', 'free'] },
  { category: 'research', name: 'Semantic Scholar', desc: 'AI assistant mapping citation indices and research lineages.', url: 'https://www.semanticscholar.org', tags: ['rare', 'free'] },
  { category: 'research', name: 'Connected Papers', desc: 'Visualize surrounding research graphics mapping related literature.', url: 'https://www.connectedpapers.com', tags: ['rare', 'free'] },
  { category: 'research', name: 'The Decoder', desc: 'Precise reporting on frontier algorithms and corporate releases.', url: 'https://the-decoder.com', tags: ['free'] },

  // Community
  { category: 'community', name: 'Zenn.dev', desc: 'Incredible technical articles ahead of major Western channels.', url: 'https://zenn.dev', tags: ['rare', 'free'] },
  { category: 'community', name: 'Lobste.rs', desc: 'Curated developer discussions focusing on extreme technical depth.', url: 'https://lobste.rs', tags: ['rare', 'community'] },
  { category: 'community', name: 'Hacker News', desc: 'The premier aggregator index for software engineering builders.', url: 'https://news.ycombinator.com', tags: ['community'] },
  { category: 'community', name: 'HuggingFace Discord', desc: 'Active conversation hub discussing paper weights and pipelines.', url: 'https://discord.gg/hugging-face', tags: ['community'] },

  // Build & Startups
  { category: 'build', name: 'roadmap.sh', desc: 'Interactive visual architectures for any specific software path.', url: 'https://roadmap.sh', tags: ['free'] },
  { category: 'build', name: 'Oh Shit, Git!', desc: 'Clear guidelines correcting git history errors.', url: 'https://ohshitgit.com', tags: ['rare', 'free'] },
  { category: 'build', name: 'Refactoring Guru', desc: 'Interactive schemas explaining major software OOP design patterns.', url: 'https://www.refactoringguru.cn/design-patterns', tags: ['free'] },
  { category: 'build', name: 'PostgreSQL Docs', desc: 'The absolute manual on query optimizations and structure setups.', url: 'https://www.postgresql.org/docs/current/index.html', tags: ['free'] },
  { category: 'build', name: 'Anthropic Cookbook', desc: 'System structures explaining multi-agent flows and MCP networks.', url: 'https://docs.anthropic.com', tags: ['free'] },
  { category: 'build', name: 'LangGraph Docs', desc: 'Complete framework for stateful cyclical multi-agent graphs.', url: 'https://langchain-ai.github.io/langgraph/', tags: ['free'] },

  // The Bookshelf
  { category: 'books', name: 'The Pragmatic Programmer', desc: 'Software engineering culture, mindset, automation, and hygiene.', tags: ['paid'] },
  { category: 'books', name: 'SICP', desc: 'MIT\'s legendary textbook exploring functional computation patterns.', url: 'https://mitpress.mit.edu/SICP/', tags: ['rare', 'free'] },
  { category: 'books', name: 'Deep Learning', desc: 'The reference textbook written by Goodfellow, Yoshua Bengio.', url: 'https://www.deeplearningbook.org', tags: ['free'] },

  // Theology & Faith
  { category: 'faith', name: 'C.S. Lewis Inst.', desc: 'Deep intellectual defences from the author of Mere Christianity.', url: 'https://www.cslewisinstitute.org/resources', tags: ['must-read', 'free'] },
  { category: 'faith', name: 'Tim Keller TGC', desc: 'Redeemer NYC. Systems explaining doubt, career vocation, and meaning.', url: 'https://podcast.thegospelcoalition.org/tgc-podcast/tim-keller/', tags: ['must-read', 'pod'] },
  { category: 'faith', name: 'BibleProject Podcasts', desc: 'Incredibly detailed structural analyses of biblical history.', url: 'https://bibleproject.com/podcasts/', tags: ['must-read', 'free'] },
  { category: 'faith', name: 'Tim Challies Blog', desc: 'Honest and quiet theological logs addressing ambition.', url: 'https://www.challies.com', tags: ['rare', 'free'] },
  { category: 'faith', name: 'Desiring God', desc: 'John Piper\'s directory. "Don\'t Waste Your Life" logs.', url: 'https://www.desiringgod.org', tags: ['free'] },
  { category: 'faith', name: 'William Lane Craig', desc: 'Philosophical debates mapping the Kalam Cosmological Proof.', url: 'https://www.reasonablefaith.org', tags: ['rare', 'free'] },
  { category: 'faith', name: 'Faith Driven Founder', desc: 'Wrestling with VC metrics, team leadership, and stewardship.', url: 'https://faithdrivenentrepreneur.org', tags: ['must-read', 'pod'] },

  // B2B Sales & GTM & Technology Moats
  { category: 'b2b-sales', name: 'Stratechery (Ben Thompson)', desc: 'Technology business analyst. Legendary author of "Aggregation Theory". Preeminent strategic insights detailing modern software platform power levers and market distribution.', url: 'https://stratechery.com', tags: ['must-read', 'pod'] },
  { category: 'b2b-sales', name: 'Eugene Wei\'s Blog', desc: 'Former Oculus & Hulu Product Leader. Masterclass analytical essays (e.g., "Invisible Asymptotes", "Status as a Service") on consumer mechanics and technology network moats.', url: 'https://www.eugenewei.com', tags: ['rare', 'must-read', 'free'] },
  { category: 'b2b-sales', name: 'Lenny\'s Product Newsletter', desc: 'Former Airbnb PM. The definitive, highly actionable, data-backed guide mapping out early-stage GTM loops, user acquisition benchmarks, and product strategy.', url: 'https://www.lennysnewsletter.com', tags: ['must-read', 'pod'] },
  { category: 'b2b-sales', name: 'Growth Unhinged', desc: 'Kyle Poyar. Absolute best source on pricing models, monetization levers, and Product-Led Growth (PLG) mechanics.', url: 'https://www.growthunhinged.com', tags: ['must-read', 'free'] },
  { category: 'b2b-sales', name: 'SaaStr Blog', desc: 'Jason Lemkin. A complete, legendary operational playbook for SaaS scaling covering metrics and execution from $0 to $100M ARR.', url: 'https://www.saastr.com/blog/', tags: ['free'] },
  { category: 'b2b-sales', name: 'GTMnow', desc: 'Tactical playbooks detailing enterprise sales, pipeline generation, and customer acquisition cycles.', url: 'https://gtmnow.com', tags: ['must-read', 'free'] },
  { category: 'b2b-sales', name: 'CXL Conversion', desc: 'Peep Laja. Extreme focus on metrics-driven conversion rate optimization, direct user analytics, and high-fidelity testing.', url: 'https://cxl.com/blog/', tags: ['rare', 'free'] },
  { category: 'b2b-sales', name: 'Leah Tharin', desc: 'Expert observations detailing why standard PLG models succeed, hit plateaus, or structurally implode.', url: 'https://www.leahtharin.com', tags: ['rare', 'free'] },

  // Finance, Macro & Economics
  { category: 'finance', name: 'Oaktree Capital Memos', desc: 'Howard Marks. Memos read religiously by Warren Buffett. Invaluable deep dives outlining market credit, valuation cycles, sea changes, and risk control.', url: 'https://www.oaktreecapital.com/insights', tags: ['must-read', 'free'] },
  { category: 'finance', name: 'Warren Buffett\'s Letters', desc: 'Berkshire Hathaway annual shareholder letters (1965-present). The finest free, jargon-free capital allocation masterclass ever written.', url: 'https://www.berkshirehathaway.com/letters/letters.html', tags: ['must-read', 'free'] },
  { category: 'finance', name: 'Morgan Housel (Collaborative Fund)', desc: 'Partner at Collaborative Fund. Author of "The Psychology of Money". Explores the behavioral mechanics, luck, compounding, and systemic risk behind finances.', url: 'https://www.collaborativefund.com/blog/', tags: ['must-read', 'free'] },
  { category: 'finance', name: 'Naval Ravikant', desc: 'Co-founder of AngelList. Principles governing leverage, specific knowledge, product-market-fit, and the deep wealth creation flywheel.', url: 'https://nav.al', tags: ['must-read', 'pod', 'free'] },
  { category: 'finance', name: 'Cliff Asness Research (AQR)', desc: 'Co-founder of AQR Capital Management. Quantitative finance pioneer. Outstandingly blunt, intellectually honest papers evaluating value, momentum, and efficient indices.', url: 'https://www.aqr.com/Insights/Research', tags: ['rare', 'papers', 'free'] },
  { category: 'finance', name: 'Michael Pettis China Macro', desc: 'Carnegie Endowment. Outstandingly clear Peking University professor analyzing national balance sheets, debt constraints, currency indices, and macro trade imbalances.', url: 'https://www.pairagraph.com/dialogue/7e5e6fc9-1d6b-4b23-90e4-a6da8f2f3e0a', tags: ['rare', 'must-read', 'papers'] },
  { category: 'finance', name: 'Noahpinion (Noah Smith)', desc: 'Readable, highly engaging macroeconomics writer mapping out tech-industrial models, global supply chains, energy, and geopolitical policy.', url: 'https://noahpinion.substack.com', tags: ['free'] },
  { category: 'finance', name: 'Dani Rodrik (Harvard)', desc: 'Harvard Kennedy School. Rigorous critiques of hyper-globalization, evaluating trade-off trilemmas, industrial policy, and national self-determination indexes.', url: 'https://www.project-syndicate.org/columnist/dani-rodrik', tags: ['rare', 'papers'] },
  { category: 'finance', name: 'Annual Letters Archive', desc: 'A curated historical goldmine compiling case letters of top funds (Pershing Square, Greenlight, Oaktree) mapping out active investor theses.', url: 'https://www.grahamanddobbsville.net', tags: ['rare', 'free'] },
  { category: 'finance', name: 'David Skok SaaS Metrics', desc: 'The defining, rigorous math workbook outlining CAC, LTV, churn vectors, paybacks, and recurring unit economics.', url: 'https://www.forentrepreneurs.com/saas-metrics-2/', tags: ['rare', 'free'] },

  // Meta-Thinking, Philosophy & Rationality
  { category: 'meta-thinking', name: 'Astral Codex Ten (Scott Alexander)', desc: 'Psychiatrist Scott Alexander. Preeminent rationalist essays investigating game-theoretic systems, statistical models, cognitive biases, and anti-Moloch layout designs.', url: 'https://www.astralcodexten.com', tags: ['must-read', 'rare', 'free'] },
  { category: 'meta-thinking', name: 'Wait But Why (Tim Urban)', desc: 'Uniquely illustrated, deeply researched first-principles essays detailing superintelligence risks, timeline scales, human procrastination, and societal hierarchies.', url: 'https://waitbutwhy.com', tags: ['must-read', 'free'] },
  { category: 'meta-thinking', name: 'LessWrong Sequences', desc: 'The cornerstone rationalist compendium evaluating bayesian networks, safety engineering, systemic biases, and computational epistemology.', url: 'https://www.lesswrong.com', tags: ['rare', 'must-read', 'free'] },
  { category: 'meta-thinking', name: 'Farnam Street (Shane Parrish)', desc: 'The premier resource translating Charlie Munger\'s mental model lattices, strategic inversion, noise removal, and long-term decision mastery.', url: 'https://fs.blog', tags: ['must-read', 'pod', 'free'] },
  { category: 'meta-thinking', name: 'Dwarkesh Podcast', desc: 'The most intellectually prepared long-form interviewer under 30. Directs dozens of hours of deep background research for interviews covering models, tech scales, and history.', url: 'https://www.dwarkeshpatel.com', tags: ['rare', 'must-read', 'pod', 'free'] },
  { category: 'meta-thinking', name: 'Marginal Revolution (Tyler Cowen)', desc: 'Hyper-agentic economics blog. Outstanding daily roundups compiling price structures, emergent self-organization, arts, and human talent discovery.', url: 'https://marginalrevolution.com', tags: ['must-read', 'free', 'pod'] },
  { category: 'meta-thinking', name: 'EconTalk (Russ Roberts)', desc: 'Hoover Institution. An unparalleled 18-year audio archive of deep, civilized dialogues targeting emergent order, societal models, and the limits of central plans.', url: 'https://econtalk.org', tags: ['must-read', 'pod', 'free'] },
  { category: 'meta-thinking', name: 'Cold Takes (Holden Karnofsky)', desc: 'Former Open Philanthropy co-founder. Unpacks the "Most Important Century" scaling timeline, intelligence curves, and critical alignment bounds.', url: 'https://www.cold-takes.com', tags: ['rare', 'free'] },

  // Cinema & Visuals
  { category: 'cinema-visuals', name: 'Wolfcrow Sareesh', desc: 'The most visceral analytical film school essays online.', url: 'https://wolfcrow.com', tags: ['must-read', 'rare'] },
  { category: 'cinema-visuals', name: 'Roger Deakins Forum', desc: 'The greatest living cinematographer answers actual community questions.', url: 'https://www.rogerdeakins.com/forums/', tags: ['must-read', 'forum'] },
  { category: 'cinema-visuals', name: 'Steve Yedlin Science', desc: 'Analytical proof showing display target preparation is the visual engine.', url: 'https://www.yedlin.net/OnColorScience/', tags: ['must-read', 'rare'] },
  { category: 'cinema-visuals', name: 'Display Prep Demo', desc: 'A 7-minute side-by-side color preparation demonstration.', url: 'https://yedlin.net/DisplayPrepDemo/', tags: ['rare', 'free'] },
  { category: 'cinema-visuals', name: 'No Film School', desc: 'Practical interviews, pricing guides, and tech breakdowns.', url: 'https://nofilmschool.com', tags: ['free'] },
  { category: 'cinema-visuals', name: 'Lift Gamma Gain', desc: 'Extremely advanced technical color grade discussion pipelines.', url: 'https://www.liftgammagain.com/forum/index.php', tags: ['rare', 'forum'] },
  { category: 'cinema-visuals', name: 'StudioBinder', desc: 'Framing, blocking, and lens dynamic breakdowns.', url: 'https://www.studiobinder.com/blog/', tags: ['free'] },
  { category: 'cinema-visuals', name: 'Video Copilot', desc: 'Kramer\'s legendary AE compositing and track scripts.', url: 'https://www.videocopilot.net', tags: ['rare', 'free'] },
  { category: 'cinema-visuals', name: 'Motionographer', desc: 'Top visual reference collections profiling world-class motion.', url: 'https://motionographer.com', tags: ['rare', 'free'] },

  // Music & Audio Science
  { category: 'music-audio', name: 'musictheory.net', desc: 'Free interactive modules covering notes, modes, scales and cords.', url: 'https://www.musictheory.net', tags: ['must-read', 'free'] },
  { category: 'music-audio', name: 'Hooktheory', desc: 'Visual progressions, plucks and arrangement structures.', url: 'https://www.hooktheory.com', tags: ['must-read'] },
  { category: 'music-audio', name: 'Serum Wavetable', desc: 'Xfer records. The most critical system synth for modern EDM.', url: 'https://xferrecords.com', tags: ['must-read', 'paid'] },
  { category: 'music-audio', name: 'Vital Synth', desc: 'The premier free spectral wavetable option competing with Serum.', url: 'https://vital.audio', tags: ['must-read', 'free'] },
  { category: 'music-audio', name: 'Teoria', desc: 'Exercises practicing perfect pitch, intervals and keys.', url: 'https://www.teoria.com', tags: ['free'] },
  { category: 'music-audio', name: 'Sonic Pi', desc: 'Ruby-based live script loop system transforming arrays to beats.', url: 'https://sonic-pi.net', tags: ['free'] },
  { category: 'music-audio', name: 'SuperCollider', desc: 'Object-oriented raw audio code generator interface.', url: 'https://supercollider.github.io', tags: ['free'] },
  { category: 'music-audio', name: 'Tone.js WebAudio', desc: 'Developer friendly Web Audio API wrapping synthesizer graphs.', url: 'https://tonejs.github.io', tags: ['free'] },
  { category: 'music-audio', name: 'Magenta Google', desc: 'Probabilistic machine learning model generating drum structures.', url: 'https://magenta.tensorflow.org', tags: ['free'] },
  { category: 'music-audio', name: 'TidalCycles', desc: 'Live coding patterns, rendering complex tracks as code blocks.', url: 'https://tidalcycles.org', tags: ['free'] },
  { category: 'music-audio', name: 'Max/MSP Cycling', desc: 'Graphical node programming engine designed for custom synthesizers.', url: 'https://cycling74.com', tags: ['paid'] },
];
