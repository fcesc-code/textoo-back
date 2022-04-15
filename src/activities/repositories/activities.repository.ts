import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BestOptionActivityDto } from '../dtos/best-option.activity.dto';
import { SelectTextActivityDto } from '../dtos/select-text-activity.dto';
import { TransformAspectActivityDto } from '../dtos/transform-aspect.activity.dto';

@Injectable()
export class ActivitiesRepository {
  constructor(
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
