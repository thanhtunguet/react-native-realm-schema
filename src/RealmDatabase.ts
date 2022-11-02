import Realm, { ObjectSchema } from 'realm';

export abstract class RealmDatabase {
  private database: Realm;

  public abstract get schemas(): ObjectSchema[];

  public abstract get path(): string;

  public get realm(): Realm {
    return this.database;
  }

  public async init() {
    this.database = await Realm.open({
      path: this.path,
      schema: this.schemas,
    });
  }
}
