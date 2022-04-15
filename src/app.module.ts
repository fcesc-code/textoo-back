import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
    ActivitiesModule,
    MongooseModule.forRoot(DB_ACTIVITIES_KEYS, {
      connectionName: DB_ACTIVITIES_NAME,
    }),
    MongooseModule.forRoot(DB_GROUPS_KEYS, {
      connectionName: DB_GROUPS_NAME,
    }),
    MongooseModule.forRoot(DB_USERS_KEYS, {
      connectionName: DB_USERS_NAME,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
