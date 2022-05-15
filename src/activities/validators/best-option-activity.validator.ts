import { IsString, IsMongoId } from 'class-validator';
import {
  ActivityType,
  Font,
  Score,
  Timestamps,
} from '../dtos/activity.interfaces';
import { SupportedLanguages } from './../../shared/interfaces/global.interfaces';
import { Question_ActivityBestOption } from '../dtos/best-option.activity.interfaces';

export class BestOptionActivityValidator {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString()
  type: ActivityType;

  timestamps: Timestamps;

  scores: Score;

  @IsString()
  author: string;

  @IsString()
  language: SupportedLanguages;

  @IsString()
  task: string;

  font: Font;

  @IsString()
  title: string;

  keywords: string[];

  @IsString()
  text: string;

  questions: Question_ActivityBestOption[];
}
