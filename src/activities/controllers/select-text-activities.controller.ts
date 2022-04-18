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
import { SelectTextActivitiesRepository } from '../repositories/select-text.activities.repository';

@Controller('activities')
export class SelectTextActivitiesController {
  constructor(private selectTextActivitiesDB: SelectTextActivitiesRepository) {}

  @Get('/api/activities/select-text')
  async getAllSelectTextActivities(): Promise<ActivityDto[]> {
    return this.selectTextActivitiesDB.findAllSelectTextActivity();
  }
}
