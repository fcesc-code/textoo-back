import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_GROUPS_COLLECTION } from 'keys/BBDD.KEYS';
import { GroupsController } from './controllers/groups.controller';
import { MODELS } from './models/groups.models';
import { GroupsRepository } from './repositories/groups.repository';

import { GroupSchema } from './schemas/groups.schemas';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: MODELS.group,
          schema: GroupSchema,
        },
      ],
      DB_GROUPS_COLLECTION,
    ),
  ],
  controllers: [GroupsController],
  providers: [GroupsRepository],
})
export class GroupsModule {}
