import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { bootstrapPipes, bootstrapSwagger } from './bootstrap';
import { ClientModule } from './client.module';
import appConfig from './config';

async function bootstrapServer() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  bootstrapSwagger(app);
  bootstrapPipes(app);

  await app.listen(appConfig.port, () => console.log(`Listening on port ${appConfig.port}`));
}

async function bootstrapClient() {
  const app = await NestFactory.create<NestFastifyApplication>(ClientModule, new FastifyAdapter());

  await app.listen(3000, () => console.log(`Listening on port ${appConfig.port}`));
}

async function bootstrap() {
  if (process.env.NODE_ENV === 'client') {
    return bootstrapClient();
  }

  return bootstrapServer();
}

bootstrap();
