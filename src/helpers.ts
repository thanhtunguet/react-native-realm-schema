import type { ObjectSchema } from 'realm';
import { REALM_SYMBOL_PROPERTIES } from './symbols';

/**
 * Get schema properties of a class prototype
 *
 * @param target {Record<string, any>}
 */
export function getClassSchema(target: Object): ObjectSchema['properties'] {
  return Reflect.getMetadata(REALM_SYMBOL_PROPERTIES, target) ?? {};
}
