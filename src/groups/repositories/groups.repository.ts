import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { NewGroupDto, GroupDto } from '../dtos/groups.dtos';
import { DB_GROUPS_COLLECTION } from '../../KEYS/BBDD.KEYS';

@Injectable()
export class GroupsRepository {
  constructor(
    @InjectModel(DB_GROUPS_COLLECTION)
    private GroupModel: Model<GroupDto>,
  ) {}

  async findAll(): Promise<GroupDto[]> {
    const data = await this.GroupModel.find().exec();
    return data;
  }

  async findById(id: string): Promise<GroupDto> {
    const data = await this.GroupModel.findById(id).exec();
    return data;
  }

  async create(group: NewGroupDto): Promise<GroupDto> {
    const groupWithId: GroupDto = this.addId(group);
    const data = await this.GroupModel.create(groupWithId);
    return data;
  }

  addId(group: NewGroupDto): GroupDto {
    const groupWithId: GroupDto = {
      ...group,
      _id: new Types.ObjectId(),
    };
    return groupWithId;
  }
  async exists(group: NewGroupDto): Promise<boolean> {
    const aliasExists = await this.GroupModel.findOne({
      alias: group.alias,
    }).exec();
    return aliasExists ? true : false;
  }

  async delete(id: string): Promise<GroupDto> {
    const data = await this.GroupModel.findByIdAndDelete(id).exec();
    return data;
  }

  async update(groupId: string, changes: Partial<GroupDto>): Promise<GroupDto> {
    const data = await this.GroupModel.findByIdAndUpdate(
      { _id: groupId },
      changes,
      { returnOriginal: false },
    ).exec();
    return data;
  }
  async aliasAlreadyExist(group: Partial<GroupDto>): Promise<boolean> {
    const exists = await this.GroupModel.findOne({ alias: group.alias })
      .limit(1)
      .count()
      .exec();
    return exists > 0 ? true : false;
  }
}
