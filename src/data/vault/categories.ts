import {
  BookOpen, Calculator, Cpu, Brain, Settings, Zap, GraduationCap, Users, Hammer,
  Flame, TrendingUp, Coins, Scale,
} from 'lucide-react';
import type { Category } from '../../types';

export const VAULT_CATEGORIES: Category[] = [
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
];
