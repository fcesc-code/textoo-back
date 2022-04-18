import * as mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
  _id: { type: String, trim: true },
  alias: { type: String, trim: true },
  avatar: { type: String, trim: true },
  users: [{ type: String, trim: true }],
  activitiesRecord: [{ type: String, trim: true }],
});

export { GroupSchema };
