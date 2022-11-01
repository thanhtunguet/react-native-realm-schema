import type { ObjectSchema } from 'realm';

export interface SchemaInfo extends Pick<ObjectSchema, 'name' | 'primaryKey'> {}
