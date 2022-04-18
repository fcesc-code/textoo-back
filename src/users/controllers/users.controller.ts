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
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { DB_USERS_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import { UserConstructor, UserDto } from '../dtos/users.dtos';
import { UsersRepository } from '../repositories/users.repository';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

import { ExistUserAliasPipe } from '../pipes/exist-user-alias.pipe';
import { ExistUserEmailPipe } from '../pipes/exist-user-email.pipe';
import { ValidUserIdPipe } from '../pipes/valid-user-id.pipe';

@Controller(DB_USERS_COLLECTION)
export class UsersController {
  constructor(private userDB: UsersRepository) {}

  TITLE = 'UserController';

  @Get('/all')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getAll(@Res() res): Promise<UserDto[]> {
    const data = await this.userDB.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:userId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getUser(
    @Res() res,
    @Param('userId', ValidUserIdPipe) userId: string,
  ): Promise<UserDto> {
    const data = await this.userDB.findById(userId);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'User Not Found',
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Post()
  @UsePipes(ExistUserAliasPipe, ExistUserEmailPipe)
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
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(
    @Res() res,
    @Param('userId', ValidUserIdPipe) userId: string,
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
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Res() res,
    @Param('userId', ValidUserIdPipe) userId: string,
    @Body() changes: Partial<UserDto>,
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
