import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /*
        A small security thing:
        The purpose is => to make sure that there's no extra property 
        in the request body that we don't expect...
      */
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
