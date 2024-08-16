import { Module } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { SneakersController } from './sneakers.controller';

@Module({
  providers: [SneakersService],
  controllers: [SneakersController]
})
export class SneakersModule {}
