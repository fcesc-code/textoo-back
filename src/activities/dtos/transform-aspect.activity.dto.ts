import { ApiProperty } from '@nestjs/swagger';
import { ActivityDto } from './activity.dto';
import { ActivityType } from './activity.interfaces';
import {
  ActivityTransformAspectConstructor,
  Question_ActivityTransformAspect,
} from './transform-aspect.activity.interfaces';

export class TransformAspectActivityDto extends ActivityDto {
  @ApiProperty()
  readonly _text: string;

  @ApiProperty()
  _questions: Question_ActivityTransformAspect[];

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
    id,
  }: ActivityTransformAspectConstructor) {
    super({
      type: ActivityType.BEST_OPTION,
      language,
      author,
      task,
      font,
      title,
      scores,
      id,
    });
    this.keywords = keywords;
    this.timestamps = timestamps;
    this._text = text;
    this._questions = questions;
  }

  addQuestion(question: Question_ActivityTransformAspect) {
    const stringifiedQuestions = [...this._questions].map((element) =>
      JSON.stringify(element),
    );
    const stringifiedNewQuestion = JSON.stringify(question);
    this._questions = Array.from(
      new Set([...stringifiedQuestions, stringifiedNewQuestion]),
    ).map((element) => JSON.parse(element));
  }
  removeQuestion(question: Question_ActivityTransformAspect) {
    this._questions = [...this._questions].filter(
      (element) => JSON.stringify(element) !== JSON.stringify(question),
    );
  }
}
