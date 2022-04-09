import { Module } from '@nestjs/common';
import { ActivitiesController } from './controllers/activities.controller';
import { ActivitiesService } from './services/activities.service';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService], // add here ActivitiesMapper
  exports: [ActivitiesService],
})
export class ActivitiesModule {}
