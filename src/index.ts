import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';
import cors from 'cors';

const server = express();

const corsOptions = {
  origin: ['https://textoo-fcd1f.web.app, http://localhost:4200/'],
  optionSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};

export const createNestServer = async (
  expressInstance: express.Application,
) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.use(cors(corsOptions));
  await app.init();
  return app;
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((e) => console.log('Nest could not start', e));

export const api = functions.region('europe-west1').https.onRequest(server);
