import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';
import { SizesModule } from './sizes/sizes.module';
import { BrandsModule } from './brands/brands.module';
import { ModelsController } from './models/models.controller';
import { ModelsService } from './models/models.service';
import { ModelsModule } from './models/models.module';
import { SneakersModule } from './sneakers/sneakers.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController, ModelsController],
  providers: [AppService, ModelsService],
  imports: [SizesModule, BrandsModule, ModelsModule, SneakersModule, UsersModule, OrdersModule],
})
export class AppModule {}
