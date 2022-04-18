import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_USERS_COLLECTION } from 'src/KEYS/BBDD.KEYS';
import { UsersController } from './controllers/users.controller';
import { MODELS } from './models/users.models';
import { UsersRepository } from './repositories/users.repository';

import { UserSchema } from './schemas/users.schemas';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: MODELS.user,
          schema: UserSchema,
        },
      ],
      DB_USERS_COLLECTION,
    ),
  ],
  controllers: [UsersController],
  providers: [UsersRepository],
})
export class UsersModule {}
