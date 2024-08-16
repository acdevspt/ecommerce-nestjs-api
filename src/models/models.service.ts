import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ModelsDto } from './dto/models.dto';

@Injectable()
export class ModelsService {
    constructor(private prisma: PrismaService) {}

    async addModelToBrand(dto: ModelsDto) {
        try {
            return await this.prisma.models.create({
                data: {
                    model: dto.name,
                    brand_uuid: dto.brand_uuid
                }
            })
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async getAllModels() {
        try {
            return await this.prisma.models.findMany()
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async getBrandModels(brand_uuid: string) {
        console.log(brand_uuid)
        try {
            return await this.prisma.models.findMany({
                where: {
                    brand_uuid: brand_uuid
                }
            })
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
}
