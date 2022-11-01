import { getClassSchema } from './helpers';
import type { SchemaInfo } from './SchemaInfo';
import type { ObjectSchema } from 'realm';
import 'reflect-metadata';
import { REALM_SYMBOL_SCHEMA } from './symbols';

export function RealmSchema(options: SchemaInfo): ClassDecorator {
  return function (target: Function & { schema?: ObjectSchema }) {
    const { primaryKey, name } = options;

    const schema: ObjectSchema = {
      name,
      primaryKey,
      properties: getClassSchema(target.prototype),
    };

    Reflect.defineMetadata(REALM_SYMBOL_SCHEMA, schema, target);
  };
}
