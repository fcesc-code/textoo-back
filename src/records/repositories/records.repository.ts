import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RecordDto } from '../dtos/records.dtos';
import { DB_RECORDS_COLLECTION } from '../../KEYS/BBDD.KEYS';

@Injectable()
export class RecordsRepository {
  constructor(
    @InjectModel(DB_RECORDS_COLLECTION)
    private RecordModel: Model<RecordDto>,
  ) {}

  async findByActivityAndUser(
    userId: string,
    activityId: string,
  ): Promise<RecordDto[]> {
    const data = await this.RecordModel.find({
      $and: [
        { _id: userId },
        {
          activitiesRecord: { activityId },
        },
      ],
    }).exec();
    return data;
  }

  async findByLanguageAndUser(
    userId: string,
    language: string,
  ): Promise<RecordDto[]> {
    const data = await this.RecordModel.find({
      $and: [
        { _id: userId },
        {
          activitiesRecord: { language },
        },
      ],
    }).exec();
    return data;
  }

  async findById(id: string): Promise<RecordDto> {
    const data = await this.RecordModel.findById(id).exec();
    return data;
  }

  async create(record: RecordDto): Promise<RecordDto> {
    const data = await this.RecordModel.create(record);
    return data;
  }

  async delete(id: string): Promise<RecordDto> {
    const data = await this.RecordModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(
    recordId: string,
    changes: Partial<RecordDto>,
  ): Promise<RecordDto> {
    const data = await this.RecordModel.findByIdAndUpdate(
      { _id: recordId },
      changes,
      { returnOriginal: false },
    ).exec();
    return data;
  }
}
