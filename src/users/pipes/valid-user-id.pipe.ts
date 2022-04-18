import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class ValidUserIdPipe implements PipeTransform {
  constructor(private usersDB: UsersRepository) {}
  async transform(userId: string) {
    try {
      await this.usersDB.findById(userId);
    } catch (err) {
      throw new BadRequestException('User ID does not exist');
    }
    return userId;
  }
}
