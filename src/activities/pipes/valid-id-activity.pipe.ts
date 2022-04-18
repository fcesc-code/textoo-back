import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { SharedActivitiesRepository } from '../repositories/shared.activities.repository';

@Injectable()
export class ValidActivityIdPipe implements PipeTransform {
  constructor(private activitiesDB: SharedActivitiesRepository) {}
  async transform(activityId: string) {
    try {
      await this.activitiesDB.findById(activityId);
    } catch (err) {
      throw new BadRequestException('Activity ID does not exist');
    }
    return activityId;
  }
}
