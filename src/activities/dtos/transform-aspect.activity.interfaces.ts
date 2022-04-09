import { ActivityConstructor, Timestamps } from './activity.interfaces';

export interface Question_ActivityTransformAspect {
  start: number;
  end: number;
  providedText: string;
  validSolutions: string[];
}

export interface ActivityTransformAspectConstructor
  extends ActivityConstructor {
  text: string;
  questions: Question_ActivityTransformAspect[];
  keywords: string[];
  timestamps: Timestamps;
}
