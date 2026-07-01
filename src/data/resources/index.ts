import type { Resource, ResourceInput } from '../../types';
import { SCHOLAR_RESOURCES } from '../vault/scholar-resources';

export function slugFromName(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function withIds(resources: ResourceInput[]): Resource[] {
  return resources.map((resource) => ({
    ...resource,
    id: slugFromName(resource.name),
  }));
}

/** Scholar / polymath ledger — Vault tab */
export const VAULT_RESOURCES: Resource[] = withIds(SCHOLAR_RESOURCES);
