import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { UserDto } from '../dtos/users.dtos';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class ExistUserEmailPipe implements PipeTransform {
  constructor(private usersDB: UsersRepository) {}
  async transform(value: Partial<UserDto>) {
    const exists: boolean = await this.usersDB.emailAlreadyExist(value);
    if (exists) {
      throw new BadRequestException('User email already exists');
    }

    return value;
  }
}
