import { getClassSchema } from './helpers';
import type { SchemaInfo } from './SchemaInfo';
import type { ObjectSchema } from 'realm';
import 'reflect-metadata';
import { REALM_ID_FIELD, REALM_SYMBOL_SCHEMA } from './symbols';

export function RealmSchema(options: SchemaInfo): ClassDecorator {
  return function (target: Function & { schema?: ObjectSchema }) {
    const { primaryKey = REALM_ID_FIELD, name } = options;

    const schemaName = name || target.name;

    const schema: ObjectSchema = {
      name: schemaName,
      primaryKey,
      properties: getClassSchema(target.prototype),
    };

    Reflect.defineMetadata(REALM_SYMBOL_SCHEMA, schema, target);
  };
}
