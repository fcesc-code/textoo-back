import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SharedActivitiesService } from '../services/shared.activities.service';
import { MODELS } from '../models/activities.models';
import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';
import { ActivityDto, NewActivityDto } from '../dtos/activities.dto';

@Injectable()
export class SelectTextActivitiesRepository {
  constructor(
    @InjectModel(MODELS.selectText)
    private SelectTextActivityModel: Model<SelectTextActivityDto>,
    private activitiesService: SharedActivitiesService,
  ) {}

  async create(user: NewActivityDto): Promise<ActivityDto> {
    const userWithId: ActivityDto = this.activitiesService.addId(user);
    const data = await this.SelectTextActivityModel.create(userWithId);
    return data;
  }

  async delete(id: string): Promise<ActivityDto> {
    const data = await this.SelectTextActivityModel.findByIdAndDelete(
      id,
    ).exec();
    return data;
  }

  async update(
    activityId: string,
    changes: Partial<ActivityDto>,
  ): Promise<ActivityDto> {
    const data = await this.SelectTextActivityModel.findByIdAndUpdate(
      { _id: activityId },
      changes,
      { returnOriginal: false },
    ).exec();
    return data;
  }
}
