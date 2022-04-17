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
import { BestOptionActivitiesRepository } from '../repositories/best-option-activity.repository';

@Controller('activities')
export class BestOptionActivitiesController {
  constructor(private bestOptionActivitiesDB: BestOptionActivitiesRepository) {}

  @Get('/best-option')
  async getAllBestOptionActivities(): Promise<ActivitiesDto[]> {
    const result = await this.bestOptionActivitiesDB.findAll();
    console.log('RECEIVED AT CONTROLLER: ', result);
    return result;
  }
}
