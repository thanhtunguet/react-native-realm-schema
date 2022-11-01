# react-native-realm-schema
Well-defined schema syntax for React Native Realm
## Installation

```sh
npm install react-native-realm-schema
```

or using yarn:

```bash
yarn add react-native-realm-schema
```

## Config your project

1. Enable decorator feature in `tsconfig.json`

```json
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
  }
}
```

2. Using `@babel/plugin-proposal-decorators`:

  ```javascript
  module.exports = {
    // ...
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ]
  }
  ```

## Usage

### Creating a schema

```typescript
import {BaseSchema, RealmProperty, RealmSchema} from 'react-native-realm-schema';
import nameof from 'ts-nameof.macro';

@RealmSchema({
  // name of the schema
  name: nameof(DeviceSchema),
  // primary key
  primaryKey: nameof(DeviceSchema.prototype._id),
})
export class DeviceSchema extends BaseSchema {
  @RealmProperty('uuid', true)
  public _id: string;

  @RealmProperty('string')
  public name: string;

  @RealmProperty('string')
  public status?: string;
}
```

### Get schema object

```typescript
import { getSchema } from 'src/helpers';

const schema = getSchema(DeviceSchema);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
