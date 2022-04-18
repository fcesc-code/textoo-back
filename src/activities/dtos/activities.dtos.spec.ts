import { BestOptionActivityDto } from './best-option.activity.dto';
import { MOCK_ACTIVITY_BEST_OPTION } from '../../../mockdata/activity.mock';
import { BestOptionActivityConstructor } from './best-option.activity.interfaces';

describe('BestOptionActivityDto', () => {
  const TITLE = 'DTOs instantaination';
  it(`${TITLE} 1 > instance of BestOptionActivityDto should be defined`, () => {
    const {
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
});
