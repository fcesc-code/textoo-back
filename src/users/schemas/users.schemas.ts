import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: { type: String, trim: true },
  alias: { type: String, trim: true },
  avatar: { type: String, trim: true },
  activeGroups: [{ type: String, trim: true }],
  roles: [{ type: String, trim: true }],
  likedActivities: [{ type: String, trim: true }],
  preferences: {
    language: { type: String, trim: true },
  },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
});

export { UserSchema };
