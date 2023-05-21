import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Создание объекта Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation for your project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Установка Swagger на пути /api-docs
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();