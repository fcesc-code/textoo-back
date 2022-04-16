import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DB_ACTIVITIES_NAME } from 'KEYS/BBDD.KEYS';
import { Model } from 'mongoose';
import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';

@Injectable()
export class SelectTextActivitiesRepository {
  constructor(
    @InjectModel(DB_ACTIVITIES_NAME)
    private SelectTextActivityModel: Model<SelectTextActivityDto>,
  ) {}

  async findAllSelectTextActivity(): Promise<SelectTextActivityDto[]> {
    return this.SelectTextActivityModel.find();
  }
}
