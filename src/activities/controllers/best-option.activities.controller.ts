import {
  Controller,
  HttpStatus,
  Body,
  Delete,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  BestOptionActivityDto,
  NewBestOptionActivityDto,
} from '../dtos/best-option.activity.dto';
import { BestOptionActivitiesRepository } from '../repositories/best-option.activities.repository';
import { SharedActivitiesRepository } from '../repositories/shared.activities.repository';
import { MODELS } from '../models/activities.models';
import { ValidActivityIdPipe } from '../pipes/valid-id-activity.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller(`${MODELS.root}/${MODELS.selectText}`)
export class BestOptionActivitiesController {
  constructor(
    private activityDB: BestOptionActivitiesRepository,
    private sharedActivitiesDB: SharedActivitiesRepository,
  ) {}

  @Post()
  async createBestOptionActivity(
    @Res() res,
    @Body() activity: NewBestOptionActivityDto,
  ): Promise<BestOptionActivityDto> {
    const data = await this.activityDB.create(activity);
    return res.status(HttpStatus.CREATED).json({
      message: 'BestOptionActivity Successfully Created',
      activity: data,
    });
  }

  @Delete('/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async deleteBestOptionActivity(
    @Res() res,
    @Param('activityId', ValidActivityIdPipe) activityId: string,
  ): Promise<BestOptionActivityDto> {
    const idExists = await this.sharedActivitiesDB.findById(activityId);
    if (!idExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'BestOptionActivity does not exist',
      });
    }
    const data = await this.activityDB.delete(activityId);
    return res.status(HttpStatus.OK).json({
      message: 'BestOptionActivity Successfully Deleted',
      activity: data,
    });
  }

  @Put('/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async updateBestOptionActivity(
    @Res() res,
    @Param('activityId', ValidActivityIdPipe) activityId: string,
    @Body() changes: Partial<BestOptionActivityDto>,
  ): Promise<BestOptionActivityDto> {
    const activityExists = await this.sharedActivitiesDB.findById(activityId);
    if (!activityExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'BestOptionActivity does not exist',
      });
    }
    const data = await this.activityDB.update(activityId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'BestOptionActivity Successfully Updated',
      activity: data,
    });
  }
}
