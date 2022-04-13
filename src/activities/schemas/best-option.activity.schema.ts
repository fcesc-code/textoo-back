import mongoose from 'mongoose';
const { Schema } = mongoose;

const BestOptionActivityOptionSchema = new Schema({
  text: String,
  correct: Boolean,
  index: Number,
});

const BestOptionActivityQuestionSchema = new Schema({
  id: String,
  position: Number,
  options: [BestOptionActivityOptionSchema],
});

const BestOptionActivitySchema = new Schema({
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
});

export { BestOptionActivitySchema };
