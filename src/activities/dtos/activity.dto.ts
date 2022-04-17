import { ApiProperty } from '@nestjs/swagger';
import {
  AbstractActivityConstructor,
  ActivityType,
  Font,
  Score,
  Timestamps,
} from './activity.interfaces';
import { SupportedLanguages } from 'src/shared/interfaces/global.interfaces';

export abstract class ActivityDto {
  @ApiProperty()
  readonly id: string | null;

  @ApiProperty()
  readonly type: ActivityType;

  @ApiProperty()
  timestamps: Timestamps;

  @ApiProperty()
  readonly scores: Score;

  @ApiProperty()
  readonly author: string;

  @ApiProperty()
  readonly language: SupportedLanguages;

  @ApiProperty()
  readonly task: string;

  @ApiProperty()
  readonly font: Font;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  keywords: string[];

  constructor({
    type,
    language,
    author,
    task,
    font,
    title,
    scores,
    id,
  }: AbstractActivityConstructor) {
    this.id = id || null;
    this.type = type;
    this.language = language;
    this.author = author;
    this.task = task;
    this.font = font;
    this.title = title;
    this.scores = scores;
  }
}
