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
import { ActivitiesRepository } from '../repositories/activities.repository';
import { ActivitiesService } from '../services/activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(
    private activitiesService: ActivitiesService,
    private activitiesDB: ActivitiesRepository,
  ) {}

  @Get('/api/activities/best-option')
  async getAllBestOptionActivities(): Promise<ActivitiesDto[]> {
    return this.activitiesDB.findAllBestOptionActivity();
  }

  @Get('/api/activities/select-text')
  async getAllSelectTextActivities(): Promise<ActivitiesDto[]> {
    return this.activitiesDB.findAllSelectTextActivity();
  }

  @Get('/api/activities/transform-aspect')
  async getAllTransformAspectActivities(): Promise<ActivitiesDto[]> {
    return this.activitiesDB.findAllTransformAspectActivity();
  }
}
