import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as os from 'os';

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

  const getLocalIPv4 = (): string => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          continue;
        }
        return iface.address;
      }
    }
    return '127.0.0.1'; // fallback to localhost
  };

  const localIPv4 = getLocalIPv4();
  const PORT = 5000;

  await app.listen(PORT, () => {
    console.log('\n');
    console.log('=========================================');
    console.log('🚀  Application is running on:');
    console.log(`    - Local:   http://localhost:${PORT}`);
    console.log(`    - Network: http://${localIPv4}:${PORT}`);
    console.log('-----------------------------------------');
    console.log('📖  Swagger UI is available at:');
    console.log(`    - http://${localIPv4}:${PORT}/docs`);
    console.log('=========================================');
    console.log('📦  Press Ctrl+C to quit.');
    console.log('\n');
  });
}
bootstrap();
