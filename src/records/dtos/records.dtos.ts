import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { SupportedLanguages } from './../../shared/interfaces/global.interfaces';

export abstract class RecordDto {
  @ApiProperty()
  readonly _id: ObjectId;

  @ApiProperty()
  readonly activitiesRecord: ActivityRecord[];

  constructor({ _id, activitiesRecord }: RecordConstructor) {
    this._id = _id;
    this.activitiesRecord = activitiesRecord;
  }
}

export interface RecordConstructor {
  _id: ObjectId;
  activitiesRecord: ActivityRecord[];
}

export interface ActivityRecord {
  activityId: string;
  played: Date;
  time: number;
  points: number;
  points100: number;
  completed: boolean;
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  unanswered: number;
  language: SupportedLanguages;
  details: ActivityRecordDetail[];
}

export interface ActivityRecordDetail {
  question: string;
  correct: boolean;
  incorrect: boolean;
  unanswered: boolean;
}
