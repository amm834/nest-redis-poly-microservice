import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'relaxed-impala-43224.upstash.io',
      port: 43224,
      password: '18585731692e4651955cb41201113596',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
