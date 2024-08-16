import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [SizesService],
  controllers: [SizesController],
  imports: [PrismaModule]
})
export class SizesModule {}
