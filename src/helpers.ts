import type { ObjectSchema } from 'realm';
import { REALM_SYMBOL_PROPERTIES } from './symbols';
import type { BaseSchema } from './BaseSchema';

/**
 * Get schema properties of a class prototype
 *
 * @param target {Record<string, any>}
 *
 * @returns {ObjectSchema['properties']}
 */
export function getClassSchema(target: Object): ObjectSchema['properties'] {
  return Reflect.getMetadata(REALM_SYMBOL_PROPERTIES, target) ?? {};
}

/**
 * Get schema list from a class list
 *
 * @param schemaClasses {Array<typeof BaseSchema>}
 *
 * @returns {ObjectSchema[]}
 */
export function schemaListOf(
  ...schemaClasses: Array<typeof BaseSchema>
): ObjectSchema[] {
  return schemaClasses.map(
    (schemaClass: typeof BaseSchema) => schemaClass.schema
  );
}
