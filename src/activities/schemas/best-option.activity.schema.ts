import { DB_ACTIVITIES_COLLECTION } from 'keys/BBDD.KEYS';
import * as mongoose from 'mongoose';

const BestOptionActivityOptionSchema = new mongoose.Schema({
  text: { type: String, trim: true },
  correct: Boolean,
  index: Number,
});

const BestOptionActivityQuestionSchema = new mongoose.Schema({
  id: { type: String, trim: true },
  position: Number,
  options: [BestOptionActivityOptionSchema],
});

const BestOptionActivitySchema = new mongoose.Schema(
  {
    title: { type: String, trim: true },
    task: { type: String, trim: true },
    author: { type: String, trim: true },
    type: { type: String, trim: true },
    language: { type: String, trim: true },
    text: { type: String, trim: true },
    scores: {
      scorePerQuestion: Number,
      timeToComplete: Number,
    },
    timestamps: {
      created: Date,
      modified: Date,
    },
    font: {
      display: Boolean,
      author: { type: String, trim: true },
      year: Number,
      work: { type: String, trim: true },
      reference: { type: String, trim: true },
    },
    keywords: [String],
    questions: [BestOptionActivityQuestionSchema],
  },
  { collection: DB_ACTIVITIES_COLLECTION },
);

export { BestOptionActivitySchema };
