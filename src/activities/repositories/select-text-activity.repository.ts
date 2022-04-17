import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';
import { MODELS } from '../models/activities.models';

@Injectable()
export class SelectTextActivitiesRepository {
  constructor(
    @InjectModel(MODELS.selectText)
    private SelectTextActivityModel: Model<SelectTextActivityDto>,
  ) {}

  async findAllSelectTextActivity(): Promise<SelectTextActivityDto[]> {
    return this.SelectTextActivityModel.find();
  }
}
