import type { PropertyType } from 'realm';
import { getClassSchema } from './helpers';
import { REALM_SYMBOL_PROPERTIES } from './symbols';

export function RealmProperty(
  type: PropertyType,
  required: boolean = false
): PropertyDecorator {
  return function (target: Object, property: string | symbol) {
    if (typeof property !== 'string') {
      throw new Error('Property key is not a string');
    }

    const dataType = required ? type : `${type}?`;

    const properties = getClassSchema(target);
    Reflect.defineMetadata(
      REALM_SYMBOL_PROPERTIES,
      {
        ...properties,
        [property]: dataType,
      },
      target
    );
  };
}
