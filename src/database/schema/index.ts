import { appSchema } from '@nozbe/watermelondb';

import { userSchema } from './UserSchema';
import { carsSchema } from './CarsSchema';

export const schemas = appSchema({
  version: 2,
  tables: [
    userSchema,
    carsSchema
  ]
});
