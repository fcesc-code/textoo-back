import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { SupportedLanguages } from 'src/shared/interfaces/global.interfaces';

export abstract class NewUserDto {
  @ApiProperty()
  readonly alias: string;

  @ApiProperty()
  readonly avatar: string;

  @ApiProperty()
  readonly activeGroups: string[];

  @ApiProperty()
  readonly roles: Roles[];

  @ApiProperty()
  readonly likedActivities: string[];

  @ApiProperty()
  readonly preferences: Preferences;

  constructor({
    alias,
    avatar,
    activeGroups,
    roles,
    likedActivities,
    preferences,
  }: UserConstructor) {
    this.alias = alias;
    this.avatar = avatar;
    this.activeGroups = activeGroups;
    this.roles = roles;
    this.likedActivities = likedActivities;
    this.preferences = preferences;
  }
}

export class UserDto extends NewUserDto {
  @ApiProperty()
  readonly _id: ObjectId;

  constructor({
    _id,
    alias,
    avatar,
    activeGroups,
    roles,
    likedActivities,
    preferences,
  }: UserConstructor) {
    super({ alias, avatar, activeGroups, roles, likedActivities, preferences });
    this._id = _id;
  }
}

export interface Preferences {
  language: SupportedLanguages;
}

export interface UserInfo {
  id: string;
  alias: string;
  avatar: string;
  preferences: Preferences;
}

export interface UserConstructor {
  _id?: ObjectId;
  alias: string;
  avatar: string;
  activeGroups: string[];
  roles: Roles[];
  likedActivities: string[];
  preferences: Preferences;
}

export enum Roles {
  'administrator',
  'teacher',
  'learner',
}

export class UserNotFoundError extends Error {
  constructor(id: string) {
    super(`User ${id} not found`);
    this.name = 'UserNotFoundError';
  }
}

export class UserAlreadyExistsError extends Error {
  constructor(username: string) {
    super(`User ${username} already exists`);
    this.name = 'UserAlreadyExistsError';
  }
}
