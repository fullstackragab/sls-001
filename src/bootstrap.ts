import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';

// let cachedServer;
export const bootstrap = async () => {
  //   if (!cachedServer) {
  const app = await NestFactory.create(AppModule);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({
    app: expressApp,
  });
  //   }
  //   return cachedServer;
};
