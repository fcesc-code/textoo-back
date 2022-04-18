import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ActivityDto, NewActivityDto } from '../dtos/activities.dto';

@Injectable()
export class SharedActivitiesService {
  addId(user: NewActivityDto): ActivityDto {
    const userWithId: ActivityDto = {
      ...user,
      _id: new Types.ObjectId(),
    };
    return userWithId;
  }
}
