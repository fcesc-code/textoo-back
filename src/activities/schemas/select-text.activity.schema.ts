import mongoose from 'mongoose';
const { Schema } = mongoose;

const SelectTextActivityPositionSchema = new Schema({
  start: Number,
  end: Number,
  index: Number,
});

const SelectTextActivitySchema = new Schema({
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
});

export { SelectTextActivitySchema };
