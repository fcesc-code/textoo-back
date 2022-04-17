import {
  Controller,
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { DB_USERS_COLLECTION } from 'KEYS/BBDD.KEYS';
import { UserConstructor, UserDto } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';

@Controller(DB_USERS_COLLECTION)
export class UserController {
  constructor(private userDB: UserRepository) {}

  TITLE = 'UserController';

  @Get('/all')
  async getAll(@Res() res): Promise<UserDto[]> {
    const data = await this.userDB.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:userId')
  async getUser(@Res() res, @Param('userId') userId: string): Promise<UserDto> {
    const data = await this.userDB.findById(userId);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User Not Found',
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async createUser(
    @Res() res,
    @Body() user: UserConstructor,
  ): Promise<UserDto> {
    const userExists = await this.userDB.exists(user);
    if (userExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'User already exists',
      });
    }
    const data = await this.userDB.create(user);
    return res.status(HttpStatus.CREATED).json({
      message: 'User Successfully Created',
      user: data,
    });
  }

  @Delete('/:userId')
  async deleteUser(
    @Res() res,
    @Param('userId') userId: string,
  ): Promise<UserDto> {
    const idExists = await this.userDB.findById(userId);
    if (!idExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'User does not exist',
      });
    }
    const data = await this.userDB.delete(userId);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Deleted',
      user: data,
    });
  }

  @Put('/:userId')
  async updateUser(
    @Res() res,
    @Param('userId') userId: string,
    @Body() changes: unknown,
  ): Promise<UserDto> {
    const userExists = await this.userDB.findById(userId);
    if (!userExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'User does not exist',
      });
    }
    const data = await this.userDB.update(userId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'User Successfully Updated',
      user: data,
    });
  }
}
