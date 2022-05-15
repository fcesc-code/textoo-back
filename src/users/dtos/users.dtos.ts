import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { SupportedLanguages } from './../../shared/interfaces/global.interfaces';
import { UserRoles } from './../../shared/interfaces/global.interfaces';

export abstract class NewUserDto {
  @ApiProperty()
  readonly alias: string;

  @ApiProperty()
  readonly avatar: string;

  @ApiProperty()
  readonly activeGroups: string[];

  @ApiProperty()
  readonly roles: UserRoles[];

  @ApiProperty()
  readonly likedActivities: string[];

  @ApiProperty()
  readonly preferences: Preferences;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  constructor({
    alias,
    avatar,
    activeGroups,
    roles,
    likedActivities,
    preferences,
    email,
    password,
  }: UserConstructor) {
    this.alias = alias;
    this.avatar = avatar;
    this.activeGroups = activeGroups;
    this.roles = roles;
    this.likedActivities = likedActivities;
    this.preferences = preferences;
    this.email = email;
    this.password = password;
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
    email,
    password,
  }: UserConstructor) {
    super({
      alias,
      avatar,
      activeGroups,
      roles,
      likedActivities,
      preferences,
      email,
      password,
    });
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
  email: string;
}

export interface UserConstructor {
  _id?: ObjectId;
  alias: string;
  avatar: string;
  activeGroups: string[];
  roles: UserRoles[];
  likedActivities: string[];
  preferences: Preferences;
  email: string;
  password: string;
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
