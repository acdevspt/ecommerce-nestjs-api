import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [OrdersService, PrismaClient],
  controllers: [OrdersController]
})
export class OrdersModule {}
