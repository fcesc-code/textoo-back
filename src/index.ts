import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as functions from 'firebase-functions';
import * as express from 'express';
// import cors from 'cors';

const server = express();

const WHITELIST = ['https://textoo-fcd1f.web.app', 'http://localhost:4200'];
const corsOptions = {
  origin: (origin, callback) => {
    if (WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  // optionSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: true,
};

export const createNestServer = async (
  expressInstance: express.Application,
) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  // app.use(cors(corsOptions));

  // app.use(function (req, res, next) {
  //   console.log('req.headers', req.headers);
  //   res.setHeader(
  //     'Access-Control-Allow-Origin',
  //     'https://textoo-fcd1f.web.app, http://localhost:4200',
  //   );
  //   res.setHeader(
  //     'Access-Control-Allow-Methods',
  //     'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //   );
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept',
  //   );
  //   res.setHeader('Access-Control-Allow-Credentials', true);
  //   next();
  // });

  // app.use(cors());

  app.enableCors(corsOptions);

  // app.enableCors();

  await app.init();
  return app;
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((e) => console.log('Nest could not start', e));

export const api = functions.region('europe-west1').https.onRequest(server);
