import { Injectable } from '@nestjs/common';
import { CreateTasascambioInput } from './dto/create-tasascambio.input';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';
import { PrismaService } from 'src/prisma/prisma.service';
import {  Prisma } from '@prisma/client';

@Injectable()
export class TasascambioService {

  constructor(private prisma: PrismaService) {}

  create(createTasascambioInput: CreateTasascambioInput) {
    return 'This action adds a new tasascambio';
  }

  findAll() {
    return `This action returns all tasascambio`;
  }

  async findRates(FECHATASA: Date){
    return this.prisma.Rates.findMany({ where: { EXCHDATE:FECHATASA },
     });
  }

  update(id: number, updateTasascambioDto: UpdateTasacambioInput) {
    return `This action updates a #${id} tasascambio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasascambio`;
  }
}
