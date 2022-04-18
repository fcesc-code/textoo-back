import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DB_ACTIVITIES_KEYS,
  DB_ACTIVITIES_COLLECTION,
  DB_GROUPS_KEYS,
  DB_GROUPS_COLLECTION,
  DB_USERS_KEYS,
  DB_USERS_COLLECTION,
} from 'src/KEYS/BBDD.KEYS';
import { ActivitiesModule } from './activities/activities.module';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(DB_ACTIVITIES_KEYS, {
      connectionName: DB_ACTIVITIES_COLLECTION,
    }),
    MongooseModule.forRoot(DB_GROUPS_KEYS, {
      connectionName: DB_GROUPS_COLLECTION,
    }),
    MongooseModule.forRoot(DB_USERS_KEYS, {
      connectionName: DB_USERS_COLLECTION,
    }),
    ActivitiesModule,
    UsersModule,
    GroupsModule,
    AuthModule,
  ],
})
export class AppModule {}
