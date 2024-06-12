import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Foundation API')
    .setDescription('API de una fundación')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = process.env.PORT || 5000;
  const HOST = process.env.HOST || '192.168.100.4';

  await app.listen(PORT, HOST, () => {
    console.log(`🚀 Application is running on: http://${HOST}:${PORT}`);
    // swagger docs
    console.log(`📖 Swagger UI is available at http://${HOST}:${PORT}/docs`);
    console.log('📦 Press Ctrl+C to quit.');
  });
}
bootstrap();
