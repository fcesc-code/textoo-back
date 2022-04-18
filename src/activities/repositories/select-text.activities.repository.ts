import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SharedActivitiesService } from '../services/shared.activities.service';
import { MODELS } from '../models/activities.models';
import {
  NewSelectTextActivityDto,
  SelectTextActivityDto,
} from '../dtos/select-text-activity.dto';
import { ActivityDto } from '../dtos/activities.dto';

@Injectable()
export class SelectTextActivitiesRepository {
  constructor(
    @InjectModel(MODELS.selectText)
    private SelectTextActivityModel: Model<SelectTextActivityDto>,
    private activitiesService: SharedActivitiesService,
  ) {}

  async create(
    activity: NewSelectTextActivityDto,
  ): Promise<SelectTextActivityDto> {
    const activityWithId: ActivityDto = this.activitiesService.addId(activity);
    const data: SelectTextActivityDto =
      await this.SelectTextActivityModel.create(activityWithId);
    return data;
  }

  async delete(id: string): Promise<SelectTextActivityDto> {
    const data: SelectTextActivityDto =
      await this.SelectTextActivityModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(
    activityId: string,
    changes: Partial<SelectTextActivityDto>,
  ): Promise<SelectTextActivityDto> {
    const data: SelectTextActivityDto =
      await this.SelectTextActivityModel.findByIdAndUpdate(
        { _id: activityId },
        changes,
        { returnOriginal: false },
      ).exec();
    return data;
  }
}
