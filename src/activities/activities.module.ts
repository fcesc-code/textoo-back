import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BestOptionActivitiesController } from './controllers/best-option-activities.controller';
import { BestOptionActivitySchema } from './schemas/best-option.activity.schema';
import { BestOptionActivitiesRepository } from './repositories/best-option-activity.repository';

import { SelectTextActivitiesController } from './controllers/select-text-activities.controller';
import { SelectTextActivitySchema } from './schemas/select-text.activity.schema';
import { SelectTextActivitiesRepository } from './repositories/select-text-activity.repository';

import { TransformAspectActivitiesController } from './controllers/transform-aspect-activities.controller';
import { TransformAspectActivitySchema } from './schemas/transform-aspect.activity.schema';
import { TransformAspectActivitiesRepository } from './repositories/transform-aspect-activity.repository';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   {
    //     name: 'BestOptionActivitySchema',
    //     schema: BestOptionActivitySchema,
    //   },
    //   {
    //     name: 'SelectTextActivitySchema',
    //     schema: SelectTextActivitySchema,
    //   },
    //   {
    //     name: 'TransformAspectActivitySchema',
    //     schema: TransformAspectActivitySchema,
    //   },
    // ]),
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
