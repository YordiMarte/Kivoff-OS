import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  findAll() {
    return this.prisma.task.findMany({ orderBy: { date: 'asc' } });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}