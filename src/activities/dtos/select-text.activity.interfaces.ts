import { ObjectId } from 'mongodb';

import { ActivityConstructor, Timestamps } from './activity.interfaces';

export interface Position {
  start: number;
  end: number;
  index: number;
}

export interface SelectTextActivityConstructor extends ActivityConstructor {
  _id?: ObjectId;
  text: string;
  positions: Position[];
  timestamps: Timestamps;
  keywords: string[];
}

export interface TextSelection {
  selected: string;
  start: number;
  end: number;
  value?: boolean;
}
