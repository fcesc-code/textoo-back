import * as mongoose from 'mongoose';

const Preferences = new mongoose.Schema({
  language: { type: String, trim: true },
});

const UserSchema = new mongoose.Schema({
  _id: { type: String, trim: true },
  alias: { type: String, trim: true },
  avatar: { type: String, trim: true },
  activeGroups: [{ type: String, trim: true }],
  roles: [{ type: String, trim: true }],
  likedActivities: [{ type: String, trim: true }],
  preferences: Preferences,
  email: { type: String, trim: true },
  password: { type: String, trim: true },
});

export { UserSchema };
