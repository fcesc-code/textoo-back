import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from '../dtos/user.dto';
import { MODELS } from '../models/user.models';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(MODELS.user)
    private UserModel: Model<UserDto>,
  ) {}

  async findAll(): Promise<UserDto[]> {
    const data = await this.UserModel.find();
    console.log('RECEIVED AT REPOSITORY: ', data);
    return data;
  }
}
