import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewUserDto, UserDto } from '../dtos/users.dtos';
import { DB_USERS_COLLECTION } from '../../KEYS/BBDD.KEYS';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(DB_USERS_COLLECTION)
    private UserModel: Model<UserDto>,
  ) {}

  async findAll(): Promise<UserDto[]> {
    const data = await this.UserModel.find().exec();
    return data;
  }

  async findById(id: string): Promise<UserDto> {
    const data = await this.UserModel.findById(id).exec();
    return data;
  }

  async create(user: NewUserDto): Promise<UserDto> {
    const userWithId: UserDto = this.addId(user);
    const data = await this.UserModel.create(userWithId);
    return data;
  }

  addId(user: NewUserDto): UserDto {
    const userWithId: UserDto = {
      ...user,
      _id: new Types.ObjectId(),
    };
    return userWithId;
  }
  async exists(user: NewUserDto): Promise<boolean> {
    const aliasExists = await this.UserModel.findOne({
      alias: user.alias,
    }).exec();
    return aliasExists ? true : false;
  }

  async delete(id: string): Promise<UserDto> {
    const data = await this.UserModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(userId: string, changes: Partial<UserDto>): Promise<UserDto> {
    const data = await this.UserModel.findByIdAndUpdate(
      { _id: userId },
      changes,
      { returnOriginal: false },
    ).exec();
    return data;
  }
}
