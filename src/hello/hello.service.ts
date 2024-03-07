import { Injectable } from '@nestjs/common';
import { UpdateHelloDto } from './dto/update-hello.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hello } from './entities/hello.entity';

@Injectable()
export class HelloService {
  constructor(@InjectRepository(Hello) private repo: Repository<Hello>) {}
  create(hlo: Hello) {
    const hl = this.repo.create();
    hl.title = hlo.title;
    this.repo.save(hl);
  }

  findAll() {
    return `This action returns all hello`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hello`;
  }

  update(id: number, updateHelloDto: UpdateHelloDto) {
    return `This action updates a #${id} hello`;
  }

  remove(id: number) {
    return `This action removes a #${id} hello`;
  }
}
