import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransformAspectActivityDto } from '../dtos/transform-aspect.activity.dto';
import { MODELS } from '../models/activities.models';

@Injectable()
export class TransformAspectActivitiesRepository {
  constructor(
    @InjectModel(MODELS.transformAspect)
    private TransformAspectActivityModel: Model<TransformAspectActivityDto>,
  ) {}

  async findAllTransformAspectActivity(): Promise<
    TransformAspectActivityDto[]
  > {
    return this.TransformAspectActivityModel.find();
  }
}
