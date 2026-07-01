import type { SignalResourceInput } from '../../types';
import { slugFromName } from '../resources';
import { STUDIO_RESOURCE_INPUTS } from './resources';
export { STUDIO_DOMAINS, STUDIO_STARTER_RIG } from './domains';
export { STUDIO_SECTIONS, sectionLabel } from './sections';
export { STUDIO_PHASES } from './phases';
export { STUDIO_MILESTONES } from './milestones';
export { GEAR_ROWS, GEAR_NOTES } from './gear';

export interface StudioResource extends SignalResourceInput {
  id: string;
}

function withIds(resources: SignalResourceInput[]): StudioResource[] {
  return resources.map((r) => ({ ...r, id: slugFromName(r.name) }));
}

export const STUDIO_RESOURCES = withIds(STUDIO_RESOURCE_INPUTS);
