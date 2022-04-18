import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SharedActivitiesService } from '../services/shared.activities.service';
import { MODELS } from '../models/activities.models';
import {
  BestOptionActivityDto,
  NewBestOptionActivityDto,
} from '../dtos/best-option.activity.dto';
import { ActivityDto } from '../dtos/activities.dto';

@Injectable()
export class BestOptionActivitiesRepository {
  constructor(
    @InjectModel(MODELS.bestOption)
    private BestOptionActivityModel: Model<BestOptionActivityDto>,
    private activitiesService: SharedActivitiesService,
  ) {}

  async create(
    activity: NewBestOptionActivityDto,
  ): Promise<BestOptionActivityDto> {
    const activityWithId: ActivityDto = this.activitiesService.addId(activity);
    const data: BestOptionActivityDto =
      await this.BestOptionActivityModel.create(activityWithId);
    return data;
  }

  async delete(id: string): Promise<BestOptionActivityDto> {
    const data: BestOptionActivityDto =
      await this.BestOptionActivityModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(
    activityId: string,
    changes: Partial<BestOptionActivityDto>,
  ): Promise<BestOptionActivityDto> {
    const data: BestOptionActivityDto =
      await this.BestOptionActivityModel.findByIdAndUpdate(
        { _id: activityId },
        changes,
        { returnOriginal: false },
      ).exec();
    return data;
  }
}
