import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SharedActivitiesService } from '../services/shared.activities.service';
import { MODELS } from '../models/activities.models';
import {
  NewTransformAspectActivityDto,
  TransformAspectActivityDto,
} from '../dtos/transform-aspect.activity.dto';
import { ActivityDto } from '../dtos/activities.dto';

@Injectable()
export class TransformAspectActivitiesRepository {
  constructor(
    @InjectModel(MODELS.bestOption)
    private TransformAspectActivityModel: Model<TransformAspectActivityDto>,
    private activitiesService: SharedActivitiesService,
  ) {}

  async create(
    activity: NewTransformAspectActivityDto,
  ): Promise<TransformAspectActivityDto> {
    const activityWithId: ActivityDto = this.activitiesService.addId(activity);
    const data: TransformAspectActivityDto =
      await this.TransformAspectActivityModel.create(activityWithId);
    return data;
  }

  async delete(id: string): Promise<TransformAspectActivityDto> {
    const data: TransformAspectActivityDto =
      await this.TransformAspectActivityModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(
    activityId: string,
    changes: Partial<TransformAspectActivityDto>,
  ): Promise<TransformAspectActivityDto> {
    const data: TransformAspectActivityDto =
      await this.TransformAspectActivityModel.findByIdAndUpdate(
        { _id: activityId },
        changes,
        { returnOriginal: false },
      ).exec();
    return data;
  }
}
