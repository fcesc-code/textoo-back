import { ActivityConstructor, Timestamps } from './activity.interfaces';

export interface Question_ActivityTransformAspect {
  start: number;
  end: number;
  providedText: string;
  validSolutions: string[];
}

export interface TransformAspectActivityConstructor
  extends ActivityConstructor {
  _id?: string;
  text: string;
  questions: Question_ActivityTransformAspect[];
  keywords: string[];
  timestamps: Timestamps;
}
