import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SizesDto } from './dto/sizes.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SizesService {
    constructor(private prisma: PrismaService) {}

    async addSize(dto: SizesDto) {
        try {
            return await this.prisma.sizes.create({
                data: dto
            })
        } catch {
            throw new InternalServerErrorException("Size is already inserted.") 
        }
    }

    async getSizes() {
        try {
            return await this.prisma.sizes.findMany()
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
}
