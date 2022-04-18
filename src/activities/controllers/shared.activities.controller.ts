import {
  Controller,
  Get,
  Param,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ActivityDto } from '../dtos/activities.dto';
import { SharedActivitiesRepository } from '../repositories/shared.activities.repository';
import { MODELS } from '../models/activities.models';
import { ValidActivityIdPipe } from '../pipes/valid-id-activity.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller(`${MODELS.root}`)
export class SharedActivitiesController {
  constructor(private activityDB: SharedActivitiesRepository) {}

  @Get('/all')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getAll(@Res() res): Promise<ActivityDto[]> {
    const data = await this.activityDB.findAll();
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getById(
    @Res() res,
    @Param('activityId', ValidActivityIdPipe) activityId: string,
  ): Promise<ActivityDto> {
    const data = await this.activityDB.findById(activityId);
    // if (!data) {
    //   return res.status(HttpStatus.NOT_FOUND).json({
    //     message: 'Activity not found',
    //   });
    // }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/byType/:type')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getByType(
    @Res() res,
    @Param('type') type: string,
  ): Promise<ActivityDto[]> {
    const data = await this.activityDB.findByType(type);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: `No activities found for the ${type} type`,
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/byUser/:userId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getByUserId(
    @Res() res,
    @Param('userId') userId: string,
  ): Promise<ActivityDto[]> {
    const data = await this.activityDB.findByUserId(userId);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: `No activities found for this user`,
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/byKeyword/:keyword')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getByKeyword(
    @Res() res,
    @Param('keyword') keyword: string,
  ): Promise<ActivityDto[]> {
    const data = await this.activityDB.findByKeyword(keyword);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: `No activities found for the ${keyword} keyword`,
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/byLanguage/:language')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getByLanguage(
    @Res() res,
    @Param('language') language: string,
  ): Promise<ActivityDto[]> {
    const data = await this.activityDB.findByLanguage(language);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: `No activities found for the ${language} language`,
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/byTitle/:title')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getByTitle(
    @Res() res,
    @Param('title') title: string,
  ): Promise<ActivityDto[]> {
    const data = await this.activityDB.findByTitle(title);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: `No activities found with title: ${title}`,
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }
}
