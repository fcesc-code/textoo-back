import { DB_ACTIVITIES_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import * as mongoose from 'mongoose';

const SelectTextActivityPositionSchema = new mongoose.Schema({
  start: Number,
  end: Number,
  index: Number,
});

const SelectTextActivitySchema = new mongoose.Schema(
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
    positions: [SelectTextActivityPositionSchema],
  },
  { collection: DB_ACTIVITIES_COLLECTION },
);

// const SelectTextActivityModel = mongoose.model(
//   'SelectTextActivity',
//   SelectTextActivitySchema,
// );

export { SelectTextActivitySchema };
