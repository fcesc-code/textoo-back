import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  SwaggerModule.setup('API-1', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
  });

  console.log('ready to go and...');

  await app.listen(3000);
}
bootstrap();
