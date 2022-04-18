import {
  Controller,
  HttpStatus,
  Body,
  Delete,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import {
  SelectTextActivityDto,
  NewSelectTextActivityDto,
} from '../dtos/select-text-activity.dto';
import { SelectTextActivitiesRepository } from '../repositories/select-text.activities.repository';
import { SharedActivitiesRepository } from '../repositories/shared.activities.repository';
import { MODELS } from '../models/activities.models';

@Controller(`${MODELS.root}/${MODELS.selectText}`)
export class SelectTextActivitiesController {
  constructor(
    private activityDB: SelectTextActivitiesRepository,
    private sharedActivitiesDB: SharedActivitiesRepository,
  ) {}

  @Post()
  async createSelectTextActivity(
    @Res() res,
    @Body() activity: NewSelectTextActivityDto,
  ): Promise<SelectTextActivityDto> {
    const data = await this.activityDB.create(activity);
    return res.status(HttpStatus.CREATED).json({
      message: 'SelectTextActivity Successfully Created',
      activity: data,
    });
  }

  @Delete('/:activityId')
  async deleteSelectTextActivity(
    @Res() res,
    @Param('activityId') activityId: string,
  ): Promise<SelectTextActivityDto> {
    const idExists = await this.sharedActivitiesDB.findById(activityId);
    if (!idExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'SelectTextActivity does not exist',
      });
    }
    const data = await this.activityDB.delete(activityId);
    return res.status(HttpStatus.OK).json({
      message: 'SelectTextActivity Successfully Deleted',
      activity: data,
    });
  }

  @Put('/:activityId')
  async updateSelectTextActivity(
    @Res() res,
    @Param('activityId') activityId: string,
    @Body() changes: Partial<SelectTextActivityDto>,
  ): Promise<SelectTextActivityDto> {
    const activityExists = await this.sharedActivitiesDB.findById(activityId);
    if (!activityExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'SelectTextActivity does not exist',
      });
    }
    const data = await this.activityDB.update(activityId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'SelectTextActivity Successfully Updated',
      activity: data,
    });
  }
}
