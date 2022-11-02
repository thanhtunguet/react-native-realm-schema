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

  /**
   * Create a new instance of this class
   *
   * instance instanceof BaseSchema will return true
   */
  public static create<T extends BaseSchema>(): T {
    return Object.create(this.prototype);
  }

  /**
   * Returns a string representing the object
   *
   * @override
   */
  public toString(): string {
    return JSON.stringify(this);
  }
}
