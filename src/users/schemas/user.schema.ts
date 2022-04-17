import { DB_USERS_COLLECTION } from 'KEYS/BBDD.KEYS';
import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    _id: String,
    alias: String,
    avatar: String,
    activeGroups: [String],
    roles: [String],
    likedActivities: [String],
    preferences: {
      language: String,
    },
  },
  { collection: DB_USERS_COLLECTION },
);

export { UserSchema };
