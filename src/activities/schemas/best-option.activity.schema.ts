import { DB_ACTIVITIES_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import * as mongoose from 'mongoose';

const BestOptionActivityOptionSchema = new mongoose.Schema({
  text: String,
  correct: Boolean,
  index: Number,
});

const BestOptionActivityQuestionSchema = new mongoose.Schema({
  id: String,
  position: Number,
  options: [BestOptionActivityOptionSchema],
});

const BestOptionActivitySchema = new mongoose.Schema(
  {
    title: String,
    task: String,
    author: String,
    type: String,
    language: String,
    text: String,
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
      author: String,
      year: Number,
      work: String,
      reference: String,
    },
    keywords: [String],
    questions: [BestOptionActivityQuestionSchema],
  },
  { collection: DB_ACTIVITIES_COLLECTION },
);

// const BestOptionActivityModel = mongoose.model(
//   'BestOptionActivity',
//   BestOptionActivitySchema,
// );

export { BestOptionActivitySchema };
