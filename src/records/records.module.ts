import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_RECORDS_COLLECTION } from 'keys/BBDD.KEYS';
import { RecordsController } from './controllers/records.controller';
import { MODELS } from './models/records.models';
import { RecordsRepository } from './repositories/records.repository';

import { RecordSchema } from './schemas/records.schemas';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: MODELS.record,
          schema: RecordSchema,
        },
      ],
      DB_RECORDS_COLLECTION,
    ),
  ],
  controllers: [RecordsController],
  providers: [RecordsRepository],
})
export class RecordsModule {}
