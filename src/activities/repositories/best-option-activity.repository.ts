import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DB_ACTIVITIES_NAME } from 'KEYS/BBDD.KEYS';
import { Model } from 'mongoose';
import { BestOptionActivityDto } from '../dtos/best-option.activity.dto';

@Injectable()
export class BestOptionActivitiesRepository {
  constructor(
    @InjectModel(DB_ACTIVITIES_NAME)
    private BestOptionActivityModel: Model<BestOptionActivityDto>,
  ) {}

  async findAllBestOptionActivity(): Promise<BestOptionActivityDto[]> {
    return this.BestOptionActivityModel.find();
  }
}
