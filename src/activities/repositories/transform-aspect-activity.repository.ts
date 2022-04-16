import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DB_ACTIVITIES_NAME } from 'KEYS/BBDD.KEYS';
import { Model } from 'mongoose';
import { TransformAspectActivityDto } from '../dtos/transform-aspect.activity.dto';

@Injectable()
export class TransformAspectActivitiesRepository {
  constructor(
    @InjectModel(DB_ACTIVITIES_NAME)
    private TransformAspectActivityModel: Model<TransformAspectActivityDto>,
  ) {}

  async findAllTransformAspectActivity(): Promise<
    TransformAspectActivityDto[]
  > {
    return this.TransformAspectActivityModel.find();
  }
}
