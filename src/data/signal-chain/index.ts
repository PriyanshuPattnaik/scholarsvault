import type { SignalResourceInput } from '../../types';
import { slugFromName } from '../resources';
import { SIGNAL_RESOURCE_INPUTS } from './resources';

export interface SignalResource extends SignalResourceInput {
  id: string;
}

function withIds(resources: SignalResourceInput[]): SignalResource[] {
  return resources.map((resource) => ({
    ...resource,
    id: slugFromName(resource.name),
  }));
}

export const SIGNAL_RESOURCES: SignalResource[] = withIds(SIGNAL_RESOURCE_INPUTS);

export { SIGNAL_PHASES } from './phases';
export { SIGNAL_MILESTONES } from './milestones';
export {
  SIGNAL_SECTIONS,
  SIGNAL_FILTER_CATEGORIES,
} from './sections';
export { GEAR_ROWS, GEAR_NOTES } from './gear';
export { SIGNAL_RESOURCE_INPUTS } from './resources';

export type {
  SignalPhase,
  Milestone,
  SignalChainSection,
  SignalFilterCategory,
  GearRow,
  SignalResourceInput,
} from '../../types';
