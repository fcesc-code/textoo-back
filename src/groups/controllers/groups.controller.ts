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
import { DB_GROUPS_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import { GroupConstructor, GroupDto } from '../dtos/groups.dtos';
import { GroupsRepository } from '../repositories/groups.repository';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ValidGroupIdPipe } from '../pipes/valid-id.group.pipe';
import { ExistGroupAliasPipe } from '../pipes/exist-alias-group.pipe';

@Controller(DB_GROUPS_COLLECTION)
export class GroupsController {
  constructor(private groupDB: GroupsRepository) {}

  @Get('/all')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getAll(@Res() res): Promise<GroupDto[]> {
    const data = await this.groupDB.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:groupId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getGroup(
    @Res() res,
    @Param('groupId', ValidGroupIdPipe) groupId: string,
  ): Promise<GroupDto> {
    const data = await this.groupDB.findById(groupId);
    // if (!data) {
    //   return res.status(HttpStatus.NOT_FOUND).json({
    //     message: 'Group Not Found',
    //   });
    // }
    return res.status(HttpStatus.OK).json(data);
  }

  @Post()
  @UsePipes(ExistGroupAliasPipe)
  async createGroup(
    @Res() res,
    @Body() group: GroupConstructor,
  ): Promise<GroupDto> {
    const groupExists = await this.groupDB.exists(group);
    if (groupExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Group already exists',
      });
    }
    const data = await this.groupDB.create(group);
    return res.status(HttpStatus.CREATED).json({
      message: 'Group Successfully Created',
      group: data,
    });
  }

  @Delete('/:groupId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async deleteGroup(
    @Res() res,
    @Param('groupId', ValidGroupIdPipe) groupId: string,
  ): Promise<GroupDto> {
    // const idExists = await this.groupDB.findById(groupId);
    // if (!idExists) {
    //   return res.status(HttpStatus.BAD_REQUEST).json({
    //     message: 'Group does not exist',
    //   });
    // }
    const data = await this.groupDB.delete(groupId);
    return res.status(HttpStatus.OK).json({
      message: 'Group Successfully Deleted',
      group: data,
    });
  }

  @Put('/:groupId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async updateGroup(
    @Res() res,
    @Param('groupId', ValidGroupIdPipe) groupId: string,
    @Body() changes: Partial<GroupDto>,
  ): Promise<GroupDto> {
    // const groupExists = await this.groupDB.findById(groupId);
    // if (!groupExists) {
    //   return res.status(HttpStatus.BAD_REQUEST).json({
    //     message: 'Group does not exist',
    //   });
    // }
    const data = await this.groupDB.update(groupId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'Group Successfully Updated',
      group: data,
    });
  }
}
