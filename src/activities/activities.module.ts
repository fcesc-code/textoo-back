import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_ACTIVITIES_COLLECTION } from './../keys/BBDD.KEYS';
import { MODELS } from './models/activities.models';

import { BestOptionActivitySchema } from './schemas/best-option.activity.schema';
import { BestOptionActivitiesRepository } from './repositories/best-option.activities.repository';
import { BestOptionActivitiesController } from './controllers/best-option.activities.controller';

import { SelectTextActivitySchema } from './schemas/select-text.activity.schema';
import { SelectTextActivitiesRepository } from './repositories/select-text.activities.repository';
import { SelectTextActivitiesController } from './controllers/select-text.activities.controller';

import { TransformAspectActivitySchema } from './schemas/transform-aspect.activity.schema';
import { TransformAspectActivitiesRepository } from './repositories/transform-aspect.activities.repository';
import { TransformAspectActivitiesController } from './controllers/transform-aspect.activities.controller';

import { SharedActivitySchema } from './schemas/shared.activity.shema';
import { SharedActivitiesRepository } from './repositories/shared.activities.repository';
import { SharedActivitiesController } from './controllers/shared.activities.controller';

import { SharedActivitiesService } from './services/shared.activities.service';

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
        {
          name: MODELS.shared,
          schema: SharedActivitySchema,
        },
      ],
      DB_ACTIVITIES_COLLECTION,
    ),
  ],
  controllers: [
    BestOptionActivitiesController,
    SelectTextActivitiesController,
    TransformAspectActivitiesController,
    SharedActivitiesController,
  ],
  providers: [
    BestOptionActivitiesRepository,
    SelectTextActivitiesRepository,
    TransformAspectActivitiesRepository,
    SharedActivitiesRepository,
    SharedActivitiesService,
  ],
})
export class ActivitiesModule {}
