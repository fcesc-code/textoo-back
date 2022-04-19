import * as mongoose from 'mongoose';

const ActivityRecordDetailSchema = new mongoose.Schema({
  question: { type: String, trim: true },
  correct: Boolean,
  incorrect: Boolean,
  unanswered: Boolean,
});

const ActivityRecordSchema = new mongoose.Schema({
  activityId: { type: String, trim: true },
  played: Date,
  time: Number,
  points: Number,
  points100: Number,
  completed: Boolean,
  correctAnswers: Number,
  wrongAnswers: Number,
  totalQuestions: Number,
  unanswered: Number,
  details: [ActivityRecordDetailSchema],
});

const RecordSchema = new mongoose.Schema({
  _id: { type: String, trim: true },
  activitiesRecord: [ActivityRecordSchema],
});

export { RecordSchema, ActivityRecordSchema, ActivityRecordDetailSchema };
