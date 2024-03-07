import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './hello/entities/hello.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Hello],
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
