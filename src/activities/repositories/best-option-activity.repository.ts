import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BestOptionActivityDto } from '../dtos/best-option.activity.dto';
import { MODELS } from '../models/activities.models';
// import { BestOptionActivityValidator } from '../validators/best-option-activity.validator';
// import { BestOptionActivityModel } from '../schemas/best-option.activity.schema';

@Injectable()
export class BestOptionActivitiesRepository {
  constructor(
    @InjectModel(MODELS.bestOption)
    private BestOptionActivityModel: Model<BestOptionActivityDto>,
  ) {}

  async findAll(): Promise<any[]> {
    return this.BestOptionActivityModel.find();
  }
}
