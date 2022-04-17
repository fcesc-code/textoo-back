import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DB_ACTIVITIES_KEYS,
  DB_ACTIVITIES_NAME,
  DB_GROUPS_KEYS,
  DB_GROUPS_NAME,
  DB_USERS_KEYS,
  DB_USERS_NAME,
} from 'KEYS/BBDD.KEYS';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [
    MongooseModule.forRoot(DB_ACTIVITIES_KEYS, {
      connectionName: DB_ACTIVITIES_NAME,
    }),
    MongooseModule.forRoot(DB_GROUPS_KEYS, {
      connectionName: DB_GROUPS_NAME,
    }),
    MongooseModule.forRoot(DB_USERS_KEYS, {
      connectionName: DB_USERS_NAME,
    }),
    ActivitiesModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('DB_ACTIVITIES_KEYS: ', DB_ACTIVITIES_KEYS);
    console.log('DB_GROUPS_KEYS: ', DB_GROUPS_KEYS);
    console.log('DB_USERS_KEYS: ', DB_USERS_KEYS);
  }
}
