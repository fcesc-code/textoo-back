import {
  MOCK_ACTIVITY_BEST_OPTION,
  MOCK_ACTIVITY_SELECT_TEXT,
  MOCK_ACTIVITY_TRANSFORM_ASPECT,
} from '../../../mockdata/activity.mock';
import { BestOptionActivityConstructor } from './best-option.activity.interfaces';
import { BestOptionActivityDto } from './best-option.activity.dto';
import { SelectTextActivityConstructor } from './select-text.activity.interfaces';
import { SelectTextActivityDto } from './select-text-activity.dto';
import { TransformAspectActivityConstructor } from './transform-aspect.activity.interfaces';
import { TransformAspectActivityDto } from './transform-aspect.activity.dto';

describe('BestOptionActivityDto', () => {
  const TITLE = 'DTOs instantaination test';
  it(`${TITLE} 1 > instance of BestOptionActivityDto should be defined`, () => {
    const {
      _id,
      text,
      keywords,
      timestamps,
      questions,
      language,
      task,
      font,
      title,
      author,
      scores,
    }: BestOptionActivityConstructor = {
      ...MOCK_ACTIVITY_BEST_OPTION,
    };
    expect(
      new BestOptionActivityDto({
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
      }),
    ).toBeDefined();
  });

  it(`${TITLE} 2 > instance of SelectTextActivityDto should be defined`, () => {
    const {
      _id,
      text,
      keywords,
      timestamps,
      positions,
      language,
      task,
      font,
      title,
      author,
      scores,
    }: SelectTextActivityConstructor = {
      ...MOCK_ACTIVITY_SELECT_TEXT,
    };
    expect(
      new SelectTextActivityDto({
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
      }),
    ).toBeDefined();
  });

  it(`${TITLE} 3 > instance of TransformAspectActivityDto should be defined`, () => {
    const {
      _id,
      text,
      keywords,
      timestamps,
      questions,
      language,
      task,
      font,
      title,
      author,
      scores,
    }: TransformAspectActivityConstructor = {
      ...MOCK_ACTIVITY_TRANSFORM_ASPECT,
    };
    expect(
      new TransformAspectActivityDto({
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
      }),
    ).toBeDefined();
  });
});
