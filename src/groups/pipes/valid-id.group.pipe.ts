import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { GroupsRepository } from '../repositories/groups.repository';

@Injectable()
export class ValidGroupIdPipe implements PipeTransform {
  constructor(private groupsDB: GroupsRepository) {}
  async transform(groupId: string) {
    try {
      await this.groupsDB.findById(groupId);
    } catch (err) {
      throw new BadRequestException('Group ID does not exist');
    }
    return groupId;
  }
}
