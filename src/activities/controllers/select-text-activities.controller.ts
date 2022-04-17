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
import { SelectTextActivitiesRepository } from '../repositories/select-text-activity.repository';

@Controller('activities')
export class SelectTextActivitiesController {
  constructor(private selectTextActivitiesDB: SelectTextActivitiesRepository) {}

  @Get('/api/activities/select-text')
  async getAllSelectTextActivities(): Promise<ActivitiesDto[]> {
    return this.selectTextActivitiesDB.findAllSelectTextActivity();
  }
}
