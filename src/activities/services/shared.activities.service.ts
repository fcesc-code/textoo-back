import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ActivityDto, NewActivityDto } from '../dtos/activities.dto';

@Injectable()
export class SharedActivitiesService {
  addId(activity: NewActivityDto): ActivityDto {
    const activityWithId = {
      ...activity,
      _id: new Types.ObjectId(),
    };
    return activityWithId as ActivityDto;
  }
}
