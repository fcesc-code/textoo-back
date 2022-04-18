import { Test, TestingModule } from '@nestjs/testing';
import { SharedActivitiesService } from './shared.activities.service';

describe('SharedActivitiesService', () => {
  const TITLE = 'shared activities service';
  let service: SharedActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedActivitiesService],
    }).compile();

    service = module.get<SharedActivitiesService>(SharedActivitiesService);
  });

  it(`${TITLE} 1 > should be defined`, () => {
    expect(service).toBeDefined();
  });
});
