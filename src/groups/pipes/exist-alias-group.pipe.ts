import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { GroupDto } from '../dtos/groups.dtos';
import { GroupsRepository } from '../repositories/groups.repository';

@Injectable()
export class ExistGroupAliasPipe implements PipeTransform {
  constructor(private groupsDB: GroupsRepository) {}
  async transform(value: Partial<GroupDto>) {
    const exists: boolean = await this.groupsDB.aliasAlreadyExist(value);

    if (exists) {
      throw new BadRequestException('Group alias already exists');
    }

    return value;
  }
}
