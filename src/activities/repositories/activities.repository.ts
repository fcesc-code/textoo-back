import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DB_ACTIVITIES_NAME } from 'KEYS/BBDD.KEYS';
import { Model } from 'mongoose';
import { BestOptionActivityDto } from '../dtos/best-option.activity.dto';
import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';
import { TransformAspectActivityDto } from '../dtos/transform-aspect.activity.dto';

@Injectable()
export class ActivitiesRepository {
  constructor(
    @InjectModel(DB_ACTIVITIES_NAME)
    private BestOptionActivityModel: Model<BestOptionActivityDto>,
    private SelectTextActivityModel: Model<SelectTextActivityDto>,
    private TransformAspectActivityModel: Model<TransformAspectActivityDto>,
  ) {}

  async findAllBestOptionActivity(): Promise<BestOptionActivityDto[]> {
    return this.BestOptionActivityModel.find();
  }

  async findAllSelectTextActivity(): Promise<SelectTextActivityDto[]> {
    return this.SelectTextActivityModel.find();
  }

  async findAllTransformAspectActivity(): Promise<
    TransformAspectActivityDto[]
  > {
    return this.TransformAspectActivityModel.find();
  }
}
