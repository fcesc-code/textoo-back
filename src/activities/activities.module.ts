import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_ACTIVITIES_NAME } from 'KEYS/BBDD.KEYS';
import { MODELS } from './models/activities.models';

import { BestOptionActivitySchema } from './schemas/best-option.activity.schema';
import { BestOptionActivitiesRepository } from './repositories/best-option-activity.repository';
import { BestOptionActivitiesController } from './controllers/best-option-activities.controller';

import { SelectTextActivitySchema } from './schemas/select-text.activity.schema';
import { SelectTextActivitiesRepository } from './repositories/select-text-activity.repository';
import { SelectTextActivitiesController } from './controllers/select-text-activities.controller';

import { TransformAspectActivitySchema } from './schemas/transform-aspect.activity.schema';
import { TransformAspectActivitiesRepository } from './repositories/transform-aspect-activity.repository';
import { TransformAspectActivitiesController } from './controllers/transform-aspect-activities.controller';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: MODELS.bestOption,
          schema: BestOptionActivitySchema,
        },
        {
          name: MODELS.selectText,
          schema: SelectTextActivitySchema,
        },
        {
          name: MODELS.transformAspect,
          schema: TransformAspectActivitySchema,
        },
      ],
      DB_ACTIVITIES_NAME,
    ),
  ],
  controllers: [
    BestOptionActivitiesController,
    SelectTextActivitiesController,
    TransformAspectActivitiesController,
  ],
  providers: [
    BestOptionActivitiesRepository,
    SelectTextActivitiesRepository,
    TransformAspectActivitiesRepository,
  ],
})
export class ActivitiesModule {}
