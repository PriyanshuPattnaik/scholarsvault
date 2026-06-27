import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ExternalLink, BookOpen, Cpu, Brain, Settings, 
  Zap, Users, Calculator, Hammer, GraduationCap, Flame, 
  TrendingUp, Coins, Scale, Camera, Music, Calendar, 
  AlertTriangle, CheckSquare, Clock, ShieldCheck
} from 'lucide-react';

interface Resource {
  category: string;
  name: string;
  desc: string;
  url?: string;
  tags: string[];
}

const RESOURCES: Resource[] = [
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
  { category: 'music-audio', name: 'Max/MSP Cycling', desc: 'Graphical node programming engine designed for custom synthesizers.', url: 'https://cycling74.com', tags: ['paid'] }
];

const CATEGORIES = [
  { id: 'all', name: 'All Resources', icon: BookOpen },
  { id: 'math', name: 'Math & Quantitative', icon: Calculator },
  { id: 'foundations', name: 'CS Foundations', icon: Cpu },
  { id: 'ml', name: 'ML & AI Frontier', icon: Brain },
  { id: 'systems', name: 'Systems & Architecture', icon: Settings },
  { id: 'practice', name: 'Deliberate Practice', icon: Zap },
  { id: 'research', name: 'Research Papers', icon: GraduationCap },
  { id: 'community', name: 'Creative Forums', icon: Users },
  { id: 'build', name: 'Build & Startups', icon: Hammer },
  { id: 'books', name: 'The Bookshelf', icon: BookOpen },
  { id: 'faith', name: 'Theology & Faith', icon: Flame },
  { id: 'b2b-sales', name: 'B2B Sales & GTM', icon: TrendingUp },
  { id: 'finance', name: 'Finance & Moats', icon: Coins },
  { id: 'meta-thinking', name: 'Meta-Thinking', icon: Scale },
  { id: 'cinema-visuals', name: 'Cinema & Visuals', icon: Camera },
  { id: 'music-audio', name: 'Music & Audio Science', icon: Music }
];

const MONK_LAWS = [
  { id: 1, title: 'One Output Per Week', text: 'A commit, a deployed URL, a 200-word writeup, or a simulation screenshot. Consumption without output is comfortable procrastination.' },
  { id: 2, title: 'One Primary Resource Only', text: '50 open tabs equals zero progress. Keep exactly one primary resource open at a time. Curiosity is not an excuse to stray.' },
  { id: 3, title: 'Understand the Core Mechanisms', text: 'Never use a library or framework you cannot explain at the architectural level. This permanently breaks vibe-coding habits.' },
  { id: 4, title: 'Parallel Ambition Tracks', text: 'Study finance, math, and faith alongside technical coding blocks. These compound into decision quality over 40 years.' },
  { id: 5, title: 'Mathematic-CS Flywheel', text: 'JEE Vectors are machine learning geometries. Calculus is backprop. Treat all quantitative tracks as a unified subject.' },
  { id: 6, title: 'Build and Document in Public', text: 'Log every milestone, failed experiment, or GitHub push. Your personal transformative arc is an undeniable signal.' },
  { id: 7, title: 'Protect the 09:00 Block', text: 'The first 90 minutes set the entire cognitive trajectory of your day. No Slack, no emails, no phone. Hardest work first.' },
  { id: 8, title: 'Optimize for Absolute Slope', text: 'Your starting point or past failures do not define your terminal value. Slope beats starting height over 48 months.' },
  { id: 9, title: 'Single Flywheel Connection', text: 'Do not treat startup features and your theoretical CS study as competitors. They are the same time invested twice.' },
  { id: 10, title: 'Faith Underpins the System', text: 'Use daily biometric reset time or audio commuting blocks to feed your deep theology. Faith is the core OS, not an app.' }
];

const BLOCKERS = [
  { title: 'Time Compression', problem: 'Dual tracks (JEE/A-Levels + Zaron) conflicting over daylight attention.', fix: 'Complete separation of states. Study is locked from 09:00 to 18:00. Zaron is locked from 19:30 to 03:00.' },
  { title: 'Maintenance Drag', problem: 'Core platform maintenance and bug troubleshooting eating your building energy.', fix: 'Minimize fixing overhead by delegating automated testing and diagnostic reviews to Claude Code / Cursor. Build solid, test-covered architectures so you focus purely on new integrations.' },
  { title: 'US Timezone Syncs', problem: 'Late meetings dragging up to 02:00 AM causing system-wide wakeup lag.', fix: 'Embrace the midnight advantages. Shift your sleeping loop to 03:00 - 09:00. The 22:30 standup and 01:00 deep calls match their standard working day.' },
  { title: 'Pilot Retention', problem: 'Initial 5-10 enterprise pilots demanding constant high-touch support.', fix: 'WashU co-founder manages active support logs; Georgia Tech co-founder handles quick UI modifications while you coordinate the core orchestration flows.' }
];

const SCHEDULES: Record<string, { time: string; type: string; title: string; desc: string }[]> = {
  mwf: [
    { time: '09:00 - 09:15', type: 'sleep', title: 'System Start & Biometric Audit', desc: 'Hydrate, visual review of the day. No messaging or Slack allowed.' },
    { time: '09:15 - 13:00', type: 'jee', title: 'CIE & JEE Advanced Block #1', desc: 'Mathematics and Physics past CIE papers. High-focus, timed diagnostic modules.' },
    { time: '13:00 - 13:45', type: 'sleep', title: 'Refuel & Brain Reset', desc: 'Offline, quiet meal. Complete mental break with zero screen exposure.' },
    { time: '13:45 - 18:00', type: 'jee', title: 'CIE & JEE Advanced Block #2', desc: 'Chemistry past papers & targeted Cengage question drilling.' },
    { time: '18:00 - 19:30', type: 'body', title: 'Physical Reset (Gym)', desc: 'Nervous system reboot. Audio logs: listen to professional SaaS or theology audio.' },
    { time: '19:30 - 20:00', type: 'startup', title: 'US Daily Briefing & Hand-off', desc: 'Post daily tasks in Notion for GT and WashU partners. Review daytime logs.' },
    { time: '20:00 - 22:30', type: 'startup', title: 'Zaron Build Block #1', desc: 'Deep engineering. Core integration work using Cursor & Claude Code tools.' },
    { time: '22:30 - 23:30', type: 'startup', title: 'US Live Standup (09:00 AM EST)', desc: 'Synchronized alignment. Reviews of code reviews, blocks, and product objectives.' },
    { time: '23:30 - 01:00', type: 'startup', title: 'Zaron Build Block #2', desc: 'Developing automation pipelines and optimizing agent workflows.' },
    { time: '01:00 - 02:00', type: 'startup', title: 'Late Operations Sync (04:30 PM EST)', desc: 'Final review sync addressing live enterprise pilots, US GTM, or investor files.' },
    { time: '02:00 - 03:00', type: 'research', title: 'Polymath Integration Block', desc: 'Reading historical systems, philosophy, or advanced physics papers to expand decision matrices.' },
    { time: '03:00 - 09:00', type: 'sleep', title: 'Protected Rest Frame', desc: '6 hours locked sleep cycle. Devices set to DND.' }
  ],
  tts: [
    { time: '09:00 - 09:15', type: 'sleep', title: 'System Start & Biometric Audit', desc: 'Hydrate, check daily targets.' },
    { time: '09:15 - 13:00', type: 'jee', title: 'CIE & JEE Advanced Block #1', desc: 'In-depth computer science modules and math diagnostics.' },
    { time: '13:00 - 13:45', type: 'sleep', title: 'Refuel & Decompress', desc: 'Complete offline rest.' },
    { time: '13:45 - 18:00', type: 'jee', title: 'CIE & JEE Advanced Block #2', desc: 'NIOS board past papers and revision blocks.' },
    { time: '18:00 - 19:30', type: 'body', title: 'Physical Reset (Gym)', desc: 'Protected reset frame preparing brain for the nighttime sprint.' },
    { time: '19:30 - 20:00', type: 'startup', title: 'US Daily Briefing & Hand-off', desc: 'Aligning linear developer scripts for co-founders.' },
    { time: '20:00 - 22:30', type: 'startup', title: 'Zaron Build Block #1', desc: 'Building multi-agent cyclical orchestration nodes.' },
    { time: '22:30 - 23:30', type: 'startup', title: 'US Live Standup (09:00 AM EST)', desc: 'Coordinating task deliverables and feedback configurations.' },
    { time: '23:30 - 01:00', type: 'startup', title: 'Zaron Build Block #2', desc: 'Refactoring modular features and validating integrations.' },
    { time: '01:00 - 02:00', type: 'startup', title: 'Late Operations Sync (04:30 PM EST)', desc: 'Late meeting coordinating GTM metrics and active pilots with WashU/GT.' },
    { time: '02:00 - 03:00', type: 'research', title: 'Polymath Integration Block', desc: 'Wrestling with deep literature structures, cognitive loops, and models.' },
    { time: '03:00 - 09:00', type: 'sleep', title: 'Protected Rest Frame', desc: '6 hours deep sleep.' }
  ],
  sun: [
    { time: '09:00 - 09:30', type: 'sleep', title: 'Awake & Biometric Check', desc: 'Uninterrupted natural wakeup cycle.' },
    { time: '09:30 - 13:00', type: 'startup', title: 'Zaron Architecture Planning', desc: 'Reviewing platform logs, refactoring core engines without code interrupts.' },
    { time: '13:00 - 14:00', type: 'sleep', title: 'Offline Recovery Meal', desc: 'Biometric rest.' },
    { time: '14:00 - 17:00', type: 'research', title: 'Deep Literature Audits', desc: 'Synthesizing emerging ML agent workflows inside Overleaf.' },
    { time: '17:00 - 19:00', type: 'body', title: 'Biometric Reset Walk', desc: 'Recharging reserves under absolute screen-free settings.' },
    { time: '19:00 - 21:00', type: 'alevel', title: 'A-Level past papers audit', desc: 'Work the hardest 5 quantitative questions encountered during the week.' },
    { time: '21:00 - 22:30', type: 'startup', title: 'Weekly GTM Alignments', desc: 'Compiling next week\'s product briefs and target lists for co-founders.' },
    { time: '22:30 - 00:00', type: 'startup', title: 'Sunday Sync (Optional)', desc: 'Quick check-ins establishing baseline goals.' },
    { time: '00:00 - 09:00', type: 'sleep', title: 'Natural Sleep Loop', desc: 'Locking down solid 9 hours rest before Monday start.' }
  ]
};

const MILESTONES = [
  { id: 'm1', date: 'MAY 2026', title: 'OS Boot & NIOS alignment', desc: 'Register NIOS and lock in English TOC transfer. Initialize the structural tracks.' },
  { id: 'm2', date: 'JUNE 2026', title: 'Initial diagnostics', desc: 'Complete first 3 A-Level diagnostic past papers. Submit Zaron whitepaper outline.' },
  { id: 'm3', date: 'JULY-AUG 2026', title: 'Preprint release', desc: 'Arxiv submission of papers outlining Multi-Agent Orchestration benchmarks.' },
  { id: 'm4', date: 'SEP 2026', title: 'Diagnostics & YC submission', desc: 'Sit for IELTS (target 7.5+), submit YC winter 2027 systems logs.' },
  { id: 'm5', date: 'OCT-NOV 2026', title: 'Board examinations', desc: 'Run the NIOS Class 12 board blocks completely with maximum performance.' },
  { id: 'm6', date: 'DEC-JAN 2027', title: 'University filings', desc: 'File UCAS entries and international research programs using preprint indexes.' },
  { id: 'm7', date: 'FEB-MAR 2027', title: 'Cambridge Board', desc: 'Sit for CIE A level papers covering CS, Physics, and Maths.' },
  { id: 'm8', date: 'APR-MAY 2027', title: 'Results & final allocations', desc: 'Verify allocations, complete matriculations, and plan transitions.' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'os' | 'vault' | 'milestones'>('vault');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [scheduleTab, setScheduleTab] = useState<string>('mwf');
  const [completedMilestones, setCompletedMilestones] = useState<string[]>([]);

  // Load saved checked milestones
  useEffect(() => {
    const saved = localStorage.getItem('polymath_milestones');
    if (saved) {
      try {
        setCompletedMilestones(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleMilestone = (id: string) => {
    const updated = completedMilestones.includes(id)
      ? completedMilestones.filter(x => x !== id)
      : [...completedMilestones, id];
    setCompletedMilestones(updated);
    localStorage.setItem('polymath_milestones', JSON.stringify(updated));
  };

  const filteredResources = useMemo(() => {
    return RESOURCES.filter(res => {
      const matchesCat = activeCategory === 'all' || res.category === activeCategory;
      const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           res.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-sepia/20 pb-12 antialiased">
      {/* Absolute Nav Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border-subtle shadow-xs">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-sepia rounded-full animate-pulse" />
            <div>
              <h1 className="text-3xl font-serif text-ink tracking-tight font-semibold">The Scholar's Vault</h1>
              <p className="text-sepia italic text-xs font-serif">A unified learning system and gap year directory</p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-paper border border-border-subtle p-1 rounded-sm">
            <button 
              onClick={() => setActiveTab('vault')}
              className={`px-4 py-1.5 text-xs font-display lowercase tracking-tight transition-all rounded-xs ${activeTab === 'vault' ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'}`}
            >
              📚 Vault
            </button>
            <button 
              onClick={() => setActiveTab('os')}
              className={`px-4 py-1.5 text-xs font-display lowercase tracking-tight transition-all rounded-xs ${activeTab === 'os' ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'}`}
            >
              🧭 Master OS
            </button>
            <button 
              onClick={() => setActiveTab('milestones')}
              className={`px-4 py-1.5 text-xs font-display lowercase tracking-tight transition-all rounded-xs ${activeTab === 'milestones' ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'}`}
            >
              🗺️ Roadmap
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        
        {/* TABS 1: VAULT RESOURCE FINDER */}
        {activeTab === 'vault' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-border-subtle pb-4">
              <div>
                <h2 className="text-2xl font-serif italic text-sepia">Computation & Wisdom Ledger</h2>
                <p className="text-xs text-sepia/60 font-serif">Use the rails below to filter primary sources</p>
              </div>

              {/* Dynamic search inside Vault */}
              <div className="relative w-full md:w-80">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sepia/40">
                  <Search size={15} />
                </span>
                <input
                  type="text"
                  placeholder="Query names or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-paper/70 border border-border-subtle py-1.5 pl-9 pr-4 font-mono text-xs text-ink placeholder:text-sepia/30 focus:outline-none focus:ring-1 focus:ring-sepia/20"
                />
              </div>
            </div>

            {/* Category Rails */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-border-subtle/50">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap text-xs font-display tracking-tight transition-all ${
                      activeCategory === cat.id 
                        ? 'bg-ink text-cream font-medium shadow-xs' 
                        : 'text-sepia bg-paper/60 border border-border-subtle hover:bg-paper'
                    }`}
                  >
                    <Icon size={12} />
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Card Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                layout 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredResources.map((res, idx) => (
                  <motion.div
                    layout
                    key={res.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.2) }}
                    className="relative flex flex-col bg-paper/30 border border-border-subtle/80 p-5 rounded-xs hover:border-sepia/40 hover:bg-paper transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-widest uppercase text-sepia/40">
                      <span>{res.category}</span>
                      <div className="flex gap-1">
                        {res.tags.map(t => (
                          <span key={t} className="px-1.5 py-0.5 rounded-xs border border-border-subtle bg-paper font-sans lowercase text-[9px] text-sepia/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg font-serif tracking-tight text-ink font-semibold">
                      {res.name}
                    </h3>
                    <p className="text-xs text-sepia/80 font-serif italic leading-relaxed mt-2 flex-grow">
                      {res.desc}
                    </p>

                    {res.url ? (
                      <button
                        onClick={() => window.open(res.url, '_blank')}
                        className="mt-4 flex items-center justify-between text-[11px] font-mono border-t border-border-subtle pt-3 text-sepia hover:text-ink transition-colors w-full group text-left"
                      >
                        <span className="underline decoration-sepia/20 group-hover:decoration-ink pr-2">
                          open source node
                        </span>
                        <ExternalLink size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ) : (
                      <div className="mt-4 text-[9px] font-mono text-sepia/30 text-right border-t border-border-subtle pt-3">
                        textbook / reference
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredResources.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-serif italic text-sepia">No resource items matched your parameters.</p>
                <button 
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="mt-2 text-xs font-mono underline text-sepia hover:text-ink"
                >
                  Reset directory filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* TABS 2: INTERACTIVE MASTER OS DAILY SCHEDULE */}
        {activeTab === 'os' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Daily Schedule Tracker */}
              <div className="lg:col-span-2">
                <div className="bg-paper p-6 border border-border-subtle rounded-xs">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
                    <div>
                      <h3 className="text-xl font-serif text-ink tracking-tight font-semibold">⏰ Daily Tracker</h3>
                      <p className="text-xs text-sepia font-serif italic">Coaching anchors & deep focus alignments</p>
                    </div>
                    {/* Schedule Sub Rails */}
                    <div className="flex gap-1 bg-cream border border-border-subtle p-0.5 rounded-sm">
                      {['mwf', 'tts', 'sun'].map(day => (
                        <button
                          key={day}
                          onClick={() => setScheduleTab(day)}
                          className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-xs transition-all ${
                            scheduleTab === day ? 'bg-sepia text-white' : 'text-sepia hover:bg-black/5'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timelines */}
                  <div className="space-y-4">
                    {SCHEDULES[scheduleTab]?.map((block, idx) => {
                      const colorMap: Record<string, string> = {
                        sleep: 'border-sepia bg-sepia/5 text-sepia',
                        alevel: 'border-indigo-600 bg-indigo-50/50 text-indigo-900',
                        startup: 'border-emerald-600 bg-emerald-50/50 text-emerald-900',
                        ielts: 'border-amber-600 bg-amber-50/50 text-amber-900',
                        jee: 'border-rose-600 bg-rose-50/50 text-rose-900',
                        body: 'border-sky-600 bg-sky-50/50 text-sky-900',
                        nios: 'border-cyan-600 bg-cyan-50/50 text-cyan-900',
                        research: 'border-purple-600 bg-purple-50/50 text-purple-900'
                      };
                      return (
                        <div key={idx} className={`flex gap-4 border-l-2 p-3 ${colorMap[block.type] || 'border-border-subtle'} rounded-r-xs bg-cream/30`}>
                          <div className="font-mono text-xs font-semibold whitespace-nowrap pt-0.5 w-24">
                            {block.time}
                          </div>
                          <div>
                            <h4 className="text-xs font-mono font-bold uppercase tracking-tight">{block.title}</h4>
                            <p className="text-xs text-sepia/80 font-serif italic mt-0.5">{block.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Zaron Strategic Coordination Hub */}
                <div className="mt-8 bg-paper p-6 border border-border-subtle rounded-xs">
                  <div className="border-b border-border-subtle pb-4 mb-6">
                    <h3 className="text-xl font-serif text-ink tracking-tight font-semibold flex items-center gap-2">
                      <Users size={18} className="text-sepia" /> Zaron Strategic Coordination Hub
                    </h3>
                    <p className="text-xs text-sepia font-serif italic">Leveraging global timezone offsets & co-founder focus bands</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Timezone Leverages */}
                    <div className="p-4 bg-cream/35 border border-border-subtle/60 rounded-xs">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2">🕒 Timezone Arbitrage</h4>
                      <p className="text-xs text-sepia/90 leading-relaxed font-serif italic">
                        Your evening block (<strong className="text-ink">19:30 - 03:00 IST</strong>) lines up cleanly with their daytime work loop (<strong className="text-ink">09:00 - 16:30 EST/CST</strong>). This enables <strong>"asynchronous continuous velocity"</strong>:
                      </p>
                      <ul className="mt-3 space-y-1.5 text-xs text-sepia font-serif">
                        <li className="flex items-start gap-1.5">✓ <span><strong className="text-ink">19:30 Briefing:</strong> You drop clear tasks in Notion before their workday ramps up.</span></li>
                        <li className="flex items-start gap-1.5">✓ <span><strong className="text-ink">22:30 Standup:</strong> Sync up live as the US wakes up. Review code deliverables and pull requests.</span></li>
                        <li className="flex items-start gap-1.5">✓ <span><strong className="text-ink">01:00 Final Call:</strong> Review demonstrations and align the nightly deployment sprint.</span></li>
                      </ul>
                    </div>

                    {/* Operational Roles */}
                    <div className="p-4 bg-cream/35 border border-border-subtle/60 rounded-xs">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ink mb-2">👥 Co-Founder Task Division</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-baseline">
                            <span className="text-xs font-mono font-bold text-ink">Georgia Tech Co-Founder (CS)</span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-indigo-50 text-indigo-700 border border-indigo-100">Engineering</span>
                          </div>
                          <p className="text-[11px] text-sepia font-serif italic mt-0.5">Focus: High-fidelity React frontend polish, QA testing, and automated integration pipelines.</p>
                        </div>
                        <div className="border-t border-border-subtle/50 pt-2">
                          <div className="flex justify-between items-baseline">
                            <span className="text-xs font-mono font-bold text-ink">WashU Co-Founder (Finance)</span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs bg-amber-50 text-amber-700 border border-amber-100">GTM & Financials</span>
                          </div>
                          <p className="text-[11px] text-sepia font-serif italic mt-0.5">Focus: Enterprise partner pipeline generation, email CRM loops, metric projections, and YC/Sequoia documents.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5-10 enterprise batch */}
                  <div className="p-4 bg-emerald-50/25 border border-emerald-100/60 rounded-xs">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950 mb-1">🎯 The 5-10 Enterprise Pilot Playbook (No AI Slop)</h4>
                    <p className="text-[11px] text-emerald-800 font-serif italic leading-relaxed">
                      Avoid selling fluff. Deliver reliable agentic integrations powered by Cursor & Claude Code. Focus on quantifiable metrics and validation loops:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-[11px] font-mono text-emerald-950">
                      <div className="p-2 bg-white/70 border border-emerald-100 rounded-s">
                        <span className="block font-bold">1. Pain Capture</span>
                        <span className="text-[9px] text-emerald-800">Identify specific operational leaks.</span>
                      </div>
                      <div className="p-2 bg-white/70 border border-emerald-100 rounded-s">
                        <span className="block font-bold">2. Quick Shell</span>
                        <span className="text-[9px] text-emerald-800">Deploy modular agent hooks.</span>
                      </div>
                      <div className="p-2 bg-white/70 border border-emerald-100 rounded-s">
                        <span className="block font-bold">3. Volume Proof</span>
                        <span className="text-[9px] text-emerald-800">Deliver 5-10x productivity metric.</span>
                      </div>
                      <div className="p-2 bg-white/70 border border-emerald-100 rounded-s">
                        <span className="block font-bold">4. Lock-in</span>
                        <span className="text-[9px] text-emerald-800">Secure LOIs for Sequoia/YC prep.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blocker Troubleshooting */}
                <div className="mt-8 bg-paper p-6 border border-border-subtle rounded-xs">
                  <h3 className="text-xl font-serif text-ink tracking-tight font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle size={18} className="text-rose-600" /> Blocker Elimination Logs
                  </h3>
                  <div className="divide-y divide-border-subtle">
                    {BLOCKERS.map((b, i) => (
                      <div key={i} className="py-4 first:pt-0 last:pb-0">
                        <h4 className="text-sm font-mono font-bold text-ink">{b.title}</h4>
                        <p className="text-xs text-rose-800 font-serif italic mt-1">⚠️ {b.problem}</p>
                        <p className="text-xs text-emerald-800 font-serif mt-1">✓ {b.fix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monk Manifesto Laws */}
              <div>
                <div className="bg-paper p-6 border border-border-subtle rounded-xs sticky top-28">
                  <h3 className="text-lg font-serif text-ink tracking-tight font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck size={18} className="text-sepia" /> Monk Laws
                  </h3>
                  <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 no-scrollbar">
                    {MONK_LAWS.map(law => (
                      <div key={law.id} className="border-b border-border-subtle/40 pb-3 last:border-0 last:pb-0">
                        <div className="flex gap-2 items-baseline">
                          <span className="font-serif italic text-sepia text-xs font-bold leading-none">{law.id}.</span>
                          <h4 className="font-mono font-bold text-xs leading-tight text-ink uppercase tracking-tight">{law.title}</h4>
                        </div>
                        <p className="text-xs text-sepia/85 font-serif italic leading-relaxed mt-1">{law.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TABS 3: MILESTONE LIST CHECKBOX ARCS */}
        {activeTab === 'milestones' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-paper p-6 border border-border-subtle rounded-xs mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-serif text-ink tracking-tight font-semibold">🗺️ 12-Month Alignment Target</h3>
                  <p className="text-xs text-sepia font-serif italic">Check milestones as you materialize them</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-bold text-ink">
                    {Math.round((completedMilestones.length / MILESTONES.length) * 100)}% Complete
                  </div>
                  <div className="font-mono text-[10px] text-sepia/50 mt-0.5">
                    {completedMilestones.length} of {MILESTONES.length} logged
                  </div>
                </div>
              </div>
              <div className="w-full bg-cream h-1.5 mt-4 rounded-full overflow-hidden border border-border-subtle/50">
                <div 
                  className="bg-sepia h-full transition-all duration-500"
                  style={{ width: `${(completedMilestones.length / MILESTONES.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-border-subtle/50">
              {MILESTONES.map((m) => {
                const checked = completedMilestones.includes(m.id);
                return (
                  <div key={m.id} className="relative bg-paper/30 border border-border-subtle/75 p-5 rounded-xs hover:bg-paper transition-all duration-300">
                    <span className={`absolute -left-[30px] top-6 w-3 h-3 rounded-full border ${checked ? 'bg-sepia border-sepia animate-pulse' : 'bg-cream border-sepia/40'}`} />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-[10px] text-sepia/50 font-bold uppercase tracking-wider">{m.date}</span>
                        <h4 className={`text-base font-serif font-bold text-ink mt-0.5 ${checked ? 'line-through text-sepia/60' : ''}`}>
                          {m.title}
                        </h4>
                        <p className="text-xs text-sepia/80 font-serif italic leading-relaxed mt-2">
                          {m.desc}
                        </p>
                      </div>
                      <button 
                        onClick={() => toggleMilestone(m.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono rounded-xs border transition-all ${
                          checked 
                            ? 'bg-sepia text-white border-sepia' 
                            : 'border-border-subtle text-sepia hover:bg-black/5'
                        }`}
                      >
                        <CheckSquare size={11} />
                        {checked ? 'Done' : 'Pending'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
