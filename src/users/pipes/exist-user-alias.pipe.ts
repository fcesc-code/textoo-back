import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { UserConstructor } from '../dtos/users.dtos';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class ExistUserAliasPipe implements PipeTransform {
  constructor(private usersDB: UsersRepository) {}
  async transform(value: UserConstructor) {
    const exists: boolean = await this.usersDB.userAliasAlreadyExist(value);

    if (exists) {
      throw new BadRequestException('User alias already exists');
    }

    return value;
  }
}
