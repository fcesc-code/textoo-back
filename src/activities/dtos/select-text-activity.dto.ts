import { ApiProperty } from '@nestjs/swagger';
import { ActivityDto } from './activity.dto';
import { ActivityType } from './activity.interfaces';
import {
  ActivitySelectTextConstructor,
  Position,
} from './select-text.activity.interfaces';

export class SelectTextActivityDto extends ActivityDto {
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
    activityId,
    scores,
    keywords,
    timestamps,
    text,
    positions,
    id,
  }: ActivitySelectTextConstructor) {
    super({
      type: ActivityType.SELECT_TEXT,
      language,
      author,
      task,
      font,
      title,
      activityId,
      scores,
      id,
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
