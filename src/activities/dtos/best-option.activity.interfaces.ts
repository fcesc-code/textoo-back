import { ActivityConstructor, Timestamps } from './activity.interfaces';

export interface Question_ActivityBestOption {
  id: string;
  position: number;
  options: Option_ActivityBestOption[];
}

export interface Option_ActivityBestOption {
  text: string;
  correct: boolean;
  index: number;
}

export interface ActivityBestOptionConstructor extends ActivityConstructor {
  text: string;
  questions: Question_ActivityBestOption[];
  keywords: string[];
  timestamps: Timestamps;
}

export interface OptionSelection {
  position: number;
  option: string;
  index: number;
}