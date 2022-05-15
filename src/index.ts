import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';

// const expressServer = express();

const server = express();

export const createNestServer = async (
  expressInstance: express.Application,
) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  await app.init();
  return app;
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((e) => console.log('Nest could not start', e));

export const api = functions.region('europe-west1').https.onRequest(server);

// const createFunction = async (expressInstance): Promise<void> => {
//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(expressInstance),
//   );

//   await app.init();
// };

// export const api = functions
//   .region('europe-west1')
//   .https.onRequest(async (request, response) => {
//     await createFunction(expressServer);
//     expressServer(request, response);
//   });
