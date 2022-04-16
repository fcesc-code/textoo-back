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
import { ActivitiesDto } from '../dtos/activities.dto';
import { TransformAspectActivitiesRepository } from '../repositories/transform-aspect-activity.repository';

@Controller('activities')
export class TransformAspectActivitiesController {
  constructor(
    private transformAspectActivitiesDB: TransformAspectActivitiesRepository,
  ) {}

  @Get('/api/activities/transform-aspect')
  async getAllTransformAspectActivities(): Promise<ActivitiesDto[]> {
    return this.transformAspectActivitiesDB.findAllTransformAspectActivity();
  }
}
