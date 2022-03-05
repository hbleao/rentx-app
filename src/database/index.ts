import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { schemas } from './schema';
import { User } from './model/User';

const adapter = new SQLiteAdapter({
  schema: schemas
})

export const wMelonDatabase = new Database({
  adapter,
  modelClasses: [User],
});
