import type { ObjectSchema } from 'realm';
import { REALM_SYMBOL_PROPERTIES, REALM_SYMBOL_SCHEMA } from './symbols';
import type { BaseSchema } from './BaseSchema';

export function getClassSchema(target: Object): ObjectSchema['properties'] {
  return Reflect.getMetadata(REALM_SYMBOL_PROPERTIES, target) ?? {};
}

export function getSchema(target: typeof BaseSchema): ObjectSchema {
  return Reflect.getMetadata(REALM_SYMBOL_SCHEMA, target);
}
