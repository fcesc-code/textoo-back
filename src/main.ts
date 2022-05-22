import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  const config = new DocumentBuilder()
    .setTitle('Textoo backend API 1')
    .setDescription('Textoo backend API for asynchronous activities')
    .setVersion('0.1')
    .addTag('activities-async')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access_token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('API', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

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

  // app.use(function (req, res, next) {
  //   console.log('res.headers', res.headers);
  //   console.log('res.error', res.error);
  //   console.log('res.message', res.message);
  //   console.log('res.status', res.status);
  //   console.log('res.statusText', res.statusText);
  //   // res.setHeader('Access-Control-Allow-Credentials', true);
  //   next();
  // });

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
