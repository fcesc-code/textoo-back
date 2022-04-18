import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

import { ActivityDto } from './activity.dto';
import { ActivityType } from './activity.interfaces';
import {
  BestOptionActivityConstructor,
  Question_ActivityBestOption,
} from './best-option.activity.interfaces';

export class NewBestOptionActivityDto extends ActivityDto {
  @ApiProperty()
  readonly _text: string;

  @ApiProperty()
  _questions: Question_ActivityBestOption[];

  constructor({
    language,
    author,
    task,
    font,
    title,
    scores,
    timestamps,
    keywords,
    text,
    questions,
  }: BestOptionActivityConstructor) {
    super({
      type: ActivityType.BEST_OPTION,
      language,
      author,
      task,
      font,
      title,
      scores,
    });
    this.keywords = keywords;
    this.timestamps = timestamps;
    this._text = text;
    this._questions = questions;
  }
  addQuestion(question: Question_ActivityBestOption) {
    const stringifiedQuestions = [...this._questions].map((element) =>
      JSON.stringify(element),
    );
    const stringifiedNewQuestion = JSON.stringify(question);
    this._questions = Array.from(
      new Set([...stringifiedQuestions, stringifiedNewQuestion]),
    ).map((element) => JSON.parse(element));
  }
  removeQuestion(question: Question_ActivityBestOption) {
    this._questions = [...this._questions].filter(
      (element) => JSON.stringify(element) !== JSON.stringify(question),
    );
  }
}

export class BestOptionActivityDto extends NewBestOptionActivityDto {
  @ApiProperty()
  readonly _id: ObjectId;

  constructor({
    _id,
    language,
    author,
    task,
    font,
    title,
    scores,
    timestamps,
    keywords,
    text,
    questions,
  }: BestOptionActivityConstructor) {
    super({
      language,
      author,
      task,
      font,
      title,
      scores,
      timestamps,
      keywords,
      text,
      questions,
    });
    this._id = _id;
  }
}
