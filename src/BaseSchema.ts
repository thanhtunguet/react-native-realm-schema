import { REALM_SYMBOL_SCHEMA } from './symbols';
import type { ObjectSchema } from 'realm';

export abstract class BaseSchema {
  /**
   * Object schema getter
   *
   * @type {ObjectSchema}
   */
  public static get schema(): ObjectSchema {
    return Reflect.getMetadata(REALM_SYMBOL_SCHEMA, this);
  }
}
