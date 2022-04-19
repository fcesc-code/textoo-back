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
} from '@nestjs/common';
import { DB_RECORDS_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import { RecordConstructor, RecordDto } from '../dtos/records.dtos';
import { RecordsRepository } from '../repositories/records.repository';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller(DB_RECORDS_COLLECTION)
export class RecordsController {
  constructor(private recordDB: RecordsRepository) {}

  @Get('/:recordId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getRecord(
    @Res() res,
    @Param('recordId') recordId: string,
  ): Promise<RecordDto> {
    const data = await this.recordDB.findById(recordId);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Record Not Found',
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:recordId/:activityId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getRecordsOfActivity(
    @Res() res,
    @Param('recordId') recordId: string,
    @Param('activityId') activityId: string,
  ): Promise<RecordDto[]> {
    const data = await this.recordDB.findByActivityAndUser(
      recordId,
      activityId,
    );
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Record Not Found',
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Get('/:recordId/:language')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async getRecordsOfLanguage(
    @Res() res,
    @Param('recordId') recordId: string,
    @Param('language') language: string,
  ): Promise<RecordDto[]> {
    const data = await this.recordDB.findByActivityAndUser(recordId, language);
    if (!data) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Record Not Found',
      });
    }
    return res.status(HttpStatus.OK).json(data);
  }

  @Post()
  async createRecord(
    @Res() res,
    @Body() record: RecordConstructor,
  ): Promise<RecordDto> {
    const recordExists = await this.recordDB.findById(record._id.toHexString());
    if (recordExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Record already exists',
      });
    }
    const data = await this.recordDB.create(record);
    return res.status(HttpStatus.CREATED).json({
      message: 'Record Successfully Created',
      record: data,
    });
  }

  @Delete('/:recordId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async deleteRecord(
    @Res() res,
    @Param('recordId') recordId: string,
  ): Promise<RecordDto> {
    const idExists = await this.recordDB.findById(recordId);
    if (!idExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Record does not exist',
      });
    }
    const data = await this.recordDB.delete(recordId);
    return res.status(HttpStatus.OK).json({
      message: 'Record Successfully Deleted',
      record: data,
    });
  }

  @Put('/:recordId')
  @ApiBearerAuth('access_token')
  @UseGuards(AuthGuard('jwt'))
  async updateRecord(
    @Res() res,
    @Param('recordId') recordId: string,
    @Body() changes: Partial<RecordDto>,
  ): Promise<RecordDto> {
    const recordExists = await this.recordDB.findById(recordId);
    if (!recordExists) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Record does not exist',
      });
    }
    const data = await this.recordDB.update(recordId, changes);
    return res.status(HttpStatus.OK).json({
      message: 'Record Successfully Updated',
      record: data,
    });
  }
}
