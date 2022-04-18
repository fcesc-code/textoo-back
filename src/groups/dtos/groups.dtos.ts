import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';

export abstract class NewGroupDto {
  @ApiProperty()
  readonly alias: string;

  @ApiProperty()
  readonly avatar: string;

  @ApiProperty()
  readonly users: string[];

  @ApiProperty()
  readonly activitiesRecord: string[];

  constructor({ alias, avatar, users, activitiesRecord }: GroupConstructor) {
    this.alias = alias;
    this.avatar = avatar;
    this.users = users;
    this.activitiesRecord = activitiesRecord;
  }
}

export abstract class GroupDto extends NewGroupDto {
  @ApiProperty()
  readonly _id: ObjectId;

  constructor({
    _id,
    alias,
    avatar,
    users,
    activitiesRecord,
  }: GroupConstructor) {
    super({ alias, avatar, users, activitiesRecord });
    this._id = _id;
  }
}

export interface GroupConstructor {
  _id?: ObjectId;
  alias: string;
  avatar: string;
  users: string[];
  activitiesRecord: string[];
}
