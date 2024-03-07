import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './entities/hello.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hello])],
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
