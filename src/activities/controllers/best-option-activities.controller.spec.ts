import { Test, TestingModule } from '@nestjs/testing';
import { BestOptionActivitiesController } from './best-option-activities.controller';

describe('ActivitiesController', () => {
  let controller: BestOptionActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestOptionActivitiesController],
    }).compile();

    controller = module.get<BestOptionActivitiesController>(
      BestOptionActivitiesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
