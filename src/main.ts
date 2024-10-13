import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation pipe for DTO validation
  app.useGlobalPipes(new ValidationPipe());

  // Optionally enable CORS if needed
  app.enableCors();

  // Start the application on a specific port
  await app.listen(3000);
}
bootstrap();
