import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';
// import cors from 'cors';

const server = express();

const WHITELIST = [
  'https://textoo-fcd1f.web.app/',
  'https://textoo-fcd1f.web.app',
  'http://localhost:4200',
  '*',
  undefined,
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (WHITELIST.filter((x) => x && x.startsWith(origin))) {
      console.log('The CORS policy for this site allow access from ', origin);
      callback(null, true);
    } else {
      console.log(
        '\n\n\nThe CORS policy for this site does not allow access from ',
        origin,
      );
      callback(
        new Error(
          '\n\n\n\n\n The CORS policy for this site does not allow access from ' +
            origin,
        ),
        false,
      );
    }
  },
  allowedHeaders: [
    'origin',
    'x-requested-with',
    'x-http-method-override',
    'content-type',
    'accept',
    'authorization',
    'connection',
    'observe',
    'referer',
  ],
  // optionSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  preflightContinue: false,
  optionSuccessStatus: 200,
};
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log(origin);
//     if (WHITELIST.filter((x) => x && x.startsWith(origin))) {
//       console.log('The CORS policy for this site allow access from ', origin);
//       callback(null, true);
//     } else {
//       console.log(
//         '\n\n\nThe CORS policy for this site does not allow access from ',
//         origin,
//       );
//       callback(
//         new Error(
//           '\n\n\n\n\n The CORS policy for this site does not allow access from ' +
//             origin,
//         ),
//         false,
//       );
//     }
//   },
//   allowedHeaders:
//     'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
//   methods: 'GET, OPTIONS',
//   credentials: true,
//   preflightContinue: true,
//   optionsSuccessStatus: 200,
// };

export const createNestServer = async (
  expressInstance: express.Application,
) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.enableCors(corsOptions);
  // app.enableCors();
  // app.enableCors({ origin: true });

  await app.init();
  return app;
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((e) => console.log('Nest could not start', e));

export const api = functions.region('europe-west1').https.onRequest(server);
