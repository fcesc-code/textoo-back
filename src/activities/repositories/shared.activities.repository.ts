import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ActivityDto, CommonActivityDto } from '../dtos/activities.dto';
import { MODELS } from '../models/activities.models';

@Injectable()
export class SharedActivitiesRepository {
  constructor(
    @InjectModel(MODELS.shared)
    private ActivityModel: Model<CommonActivityDto>,
  ) {}

  async findAll(): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find().exec();
    return data;
  }

  async findById(id: string): Promise<ActivityDto> {
    const data = await this.ActivityModel.findById(id).exec();
    return data;
  }

  async findByType(type: string): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find({ type }).exec();
    return data;
  }

  async findByUserId(userId: string): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find({ author: userId }).exec();
    return data;
  }

  async findByKeyword(keyword: string): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find({
      keywords: keyword,
    }).exec();
    return data;
  }

  async findByLanguage(language: string): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find({ language }).exec();
    return data;
  }

  async findByTitle(title: string): Promise<ActivityDto[]> {
    const data = await this.ActivityModel.find({ title }).exec();
    return data;
  }
}
