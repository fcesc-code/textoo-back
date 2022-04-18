import {
  Controller,
  Get,
  // Body,
  // Delete,
  // Get,
  // Param,
  // Post,
  // Put,
} from '@nestjs/common';
import { ActivityDto } from '../dtos/activities.dto';
import { TransformAspectActivitiesRepository } from '../repositories/transform-aspect.activities.repository';

@Controller('activities')
export class TransformAspectActivitiesController {
  constructor(
    private transformAspectActivitiesDB: TransformAspectActivitiesRepository,
  ) {}

  @Get('/api/activities/transform-aspect')
  async getAllTransformAspectActivities(): Promise<ActivityDto[]> {
    return this.transformAspectActivitiesDB.findAllTransformAspectActivity();
  }
}
