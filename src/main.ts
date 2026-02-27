import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security: Enable Helmet for security headers
  app.use(helmet());

  // Security: Enable CORS with restrictive settings
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || false, // Restrict to specific origins
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
