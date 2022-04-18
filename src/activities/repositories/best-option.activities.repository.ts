import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SharedActivitiesService } from '../services/shared.activities.service';
import { MODELS } from '../models/activities.models';
import { BestOptionActivityDto } from '../dtos/best-option.activity.dto';
import { ActivityDto, NewActivityDto } from '../dtos/activities.dto';

@Injectable()
export class BestOptionActivitiesRepository {
  constructor(
    @InjectModel(MODELS.bestOption)
    private BestOptionActivityModel: Model<BestOptionActivityDto>,
    private activitiesService: SharedActivitiesService,
  ) {}

  async create(user: NewActivityDto): Promise<ActivityDto> {
    const userWithId: ActivityDto = this.activitiesService.addId(user);
    const data = await this.BestOptionActivityModel.create(userWithId);
    return data;
  }

  async delete(id: string): Promise<ActivityDto> {
    const data = await this.BestOptionActivityModel.findByIdAndDelete(
      id,
    ).exec();
    return data;
  }

  async update(
    activityId: string,
    changes: Partial<ActivityDto>,
  ): Promise<ActivityDto> {
    const data = await this.BestOptionActivityModel.findByIdAndUpdate(
      { _id: activityId },
      changes,
      { returnOriginal: false },
    ).exec();
    return data;
  }
}
