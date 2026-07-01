import type { LucideIcon } from 'lucide-react';

export interface Resource {
  id: string;
  category: string;
  name: string;
  desc: string;
  url?: string;
  tags: string[];
}

export type ResourceInput = Omit<Resource, 'id'>;

export interface SignalResourceInput extends ResourceInput {
  section: string;
}

export interface SignalChainSection {
  id: string;
  label: string;
  order: number;
}

export interface SignalFilterCategory {
  id: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface MonkLaw {
  id: number;
  title: string;
  text: string;
}

export interface Blocker {
  title: string;
  problem: string;
  fix: string;
}

export interface ScheduleBlock {
  time: string;
  type: string;
  title: string;
  desc: string;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  desc: string;
}

export interface SignalPhase {
  phase: string;
  when: string;
  title: string;
  focus: string;
  output: string;
}

export interface GearRow {
  ministry: string;
  console: string;
  monitors: string;
  pa: string;
  studio: string;
}

export interface SignalSection {
  id: string;
  label: string;
  order: number;
}
