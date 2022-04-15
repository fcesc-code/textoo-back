import { Module } from '@nestjs/common';
import { ActivitiesController } from './controllers/activities.controller';
import { ActivitiesService } from './services/activities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BestOptionActivitySchema } from './schemas/best-option.activity.schema';
import { SelectTextActivitySchema } from './schemas/select-text.activity.schema';
import { TransformAspectActivitySchema } from './schemas/transform-aspect.activity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'BestOptionActivitySchema',
        schema: BestOptionActivitySchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'SelectTextActivitySchema',
        schema: SelectTextActivitySchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'TransformAspectActivitySchema',
        schema: TransformAspectActivitySchema,
      },
    ]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService], // add here ActivitiesMapper
  exports: [ActivitiesService],
})
export class ActivitiesModule {}
