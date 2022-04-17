import {
  Controller,
  Get,
  // Body,
  // Delete,
  // Get,
  // Param,
  // Post,
  // Put,
} from '@nestjs/common';
import { DB_USERS_COLLECTION } from 'KEYS/BBDD.KEYS';
import { UserDto } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Controller(DB_USERS_COLLECTION)
export class UserController {
  constructor(private userDB: UserRepository) {}

  @Get('/all')
  async getAllUser(): Promise<UserDto[]> {
    const result = await this.userDB.findAll();
    console.log('RECEIVED AT CONTROLLER: ', result);
    return result;
  }
}
