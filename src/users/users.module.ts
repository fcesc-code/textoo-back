import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_USERS_COLLECTION } from 'KEYS/BBDD.KEYS';
import { UserController } from './controllers/user.controller';
import { MODELS } from './models/user.models';
import { UserRepository } from './repositories/user.repository';

import { UserSchema } from './schemas/user.schema';

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
  controllers: [UserController],
  providers: [UserRepository],
})
export class UsersModule {}
