import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

import { ActivityDto } from './activity.dto';
import { ActivityType } from './activity.interfaces';
import {
  SelectTextActivityConstructor,
  Position,
} from './select-text.activity.interfaces';

export class NewSelectTextActivityDto extends ActivityDto {
  @ApiProperty()
  readonly _text: string;

  @ApiProperty()
  _positions: Position[];

  constructor({
    language,
    author,
    task,
    font,
    title,
    scores,
    keywords,
    timestamps,
    text,
    positions,
  }: SelectTextActivityConstructor) {
    super({
      type: ActivityType.SELECT_TEXT,
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
    this._positions = positions;
  }
  addPosition(position: Position) {
    const stringifiedPositions = [...this._positions].map((element) =>
      JSON.stringify(element),
    );
    const stringifiedNewPosition = JSON.stringify(position);
    this._positions = Array.from(
      new Set([...stringifiedPositions, stringifiedNewPosition]),
    ).map((element) => JSON.parse(element));
  }
  removePosition(position: Position) {
    this._positions = [...this._positions].filter(
      (element) => JSON.stringify(element) !== JSON.stringify(position),
    );
  }
}

export class SelectTextActivityDto extends NewSelectTextActivityDto {
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
    positions,
  }: SelectTextActivityConstructor) {
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
      positions,
    });
    this._id = new ObjectId(_id);
  }
}
