import Realm, { ObjectSchema } from 'realm';

export abstract class RealmDatabase {
  private database: Realm;

  /**
   * Define the database schemas
   *
   * @type {ObjectSchema[]}
   */
  public abstract get schemas(): ObjectSchema[];

  /**
   * Define the database path
   *
   * @type {String}
   */
  public abstract get path(): string;

  /**
   * Realm database getter
   */
  public get realm(): Realm {
    return this.database;
  }

  /**
   * Initializes the database
   *
   * @returns {Promise<Realm>}
   */
  public async init(): Promise<Realm> {
    this.database = await Realm.open({
      path: this.path,
      schema: this.schemas,
    });
    return this.database;
  }
}
