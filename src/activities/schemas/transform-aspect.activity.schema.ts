import * as mongoose from 'mongoose';

const TransformAspectActivityQuestionSchema = new mongoose.Schema({
  start: Number,
  end: Number,
  providedText: String,
  validSolutions: [String],
});

const TransformAspectActivitySchema = new mongoose.Schema({
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
  questions: [TransformAspectActivityQuestionSchema],
});

// const TransformAspectActivityModel = mongoose.model(
//   'TransformAspectActivity',
//   TransformAspectActivitySchema,
// );

export { TransformAspectActivitySchema };
