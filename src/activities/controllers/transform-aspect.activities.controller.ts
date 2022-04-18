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
  TransformAspectActivityDto,
  NewTransformAspectActivityDto,
} from '../dtos/transform-aspect.activity.dto';
import { TransformAspectActivitiesRepository } from '../repositories/transform-aspect.activities.repository';
import { SharedActivitiesRepository } from '../repositories/shared.activities.repository';
import { MODELS } from '../models/activities.models';
import { ValidActivityIdPipe } from '../pipes/valid-id-activity.pipe';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller(`${MODELS.root}/${MODELS.selectText}`)
export class TransformAspectActivitiesController {
  constructor(
    private activityDB: TransformAspectActivitiesRepository,
    private sharedActivitiesDB: SharedActivitiesRepository,
  ) {}

  @Post()
  async createTransformAspectActivity(
    @Res() res,
    @Body() activity: NewTransformAspectActivityDto,
  ): Promise<TransformAspectActivityDto> {
    const data = await this.activityDB.create(activity);
    return res.status(HttpStatus.CREATED).json({
      message: 'TransformAspectActivity Successfully Created',
      activity: data,
    });
  }

  @Delete('/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async deleteTransformAspectActivity(
    @Res() res,
    @Param('activityId', ValidActivityIdPipe) activityId: string,
  ): Promise<TransformAspectActivityDto> {
    const idExists = await this.sharedActivitiesDB.findById(activityId);
    if (!idExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'TransformAspectActivity does not exist',
      });
    }
    const data = await this.activityDB.delete(activityId);
    return res.status(HttpStatus.OK).json({
      message: 'TransformAspectActivity Successfully Deleted',
      activity: data,
    });
  }

  @Put('/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async updateTransformAspectActivity(
    @Res() res,
    @Param('activityId', ValidActivityIdPipe) activityId: string,
    @Body() changes: Partial<TransformAspectActivityDto>,
  ): Promise<TransformAspectActivityDto> {
    const activityExists = await this.sharedActivitiesDB.findById(activityId);
    if (!activityExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'TransformAspectActivity does not exist',
      });
    }
    const data = await this.activityDB.update(activityId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'TransformAspectActivity Successfully Updated',
      activity: data,
    });
  }
}
