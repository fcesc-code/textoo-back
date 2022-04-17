import { ApiProperty } from '@nestjs/swagger';
import { SupportedLanguages } from 'src/shared/interfaces/global.interfaces';

export abstract class UserDto {
  @ApiProperty()
  readonly _id!: string | null;

  @ApiProperty()
  readonly alias!: string;

  @ApiProperty()
  readonly avatar!: string;

  @ApiProperty()
  readonly activeGroups!: string[];

  @ApiProperty()
  readonly roles!: Roles[];

  @ApiProperty()
  readonly likedActivities!: string[];

  @ApiProperty()
  readonly preferences!: Preferences;

  constructor({
    _id,
    alias,
    avatar,
    activeGroups,
    roles,
    likedActivities,
    preferences,
  }: UserConstructor) {
    this._id = _id || null;
    this.alias = alias;
    this.avatar = avatar;
    this.activeGroups = activeGroups;
    this.roles = roles;
    this.likedActivities = likedActivities;
    this.preferences = preferences;
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
  _id?: string | null;
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
