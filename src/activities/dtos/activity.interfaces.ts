import { SupportedLanguages } from 'src/shared/interfaces/global.interfaces';

export interface Timestamps {
  created: Date;
  modified: Date;
}

export interface Score {
  maxPossibleScore?: number;
  questions?: number;
  scorePerQuestion: number;
  timeToComplete: number;
}

export interface Font {
  display: boolean;
  author: string;
  year: number;
  work: string;
  reference: string;
}

export interface ActivityConstructor {
  language: SupportedLanguages;
  task: string;
  font: Font;
  title: string;
  author: string;
  activityId?: string;
  scores: Score;
}

export interface AbstractActivityConstructor extends ActivityConstructor {
  type: ActivityType;
}

export enum ActivityType {
  SELECT_TEXT = 'select_text',
  FILL_GAPS = 'fill_gaps',
  BEST_OPTION = 'best_option',
  INTRUDER_OPTION = 'intruder_option',
  CORRECT_TEXT = 'correct_text',
  ORDER_ELEMENTS = 'order_elements',
  ASSOCIATE_HEADLINES = 'associate_headlines',
  TRANSLATE_TEXT = 'translate_text',
  FLEXIVE_WORDS = 'flexive_words',
  REMOVE_SURPLUS_WORDS = 'remove_surplus_words',
  ADD_MISSING_WORDS = 'add_missing_words',
  TRANSFORM_ASPECT = 'transform_aspect',
}
