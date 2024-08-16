import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BrandsDto } from './dto/brands.dto';

@Injectable()
export class BrandsService {
    constructor(private prisma: PrismaService) {}

    async addBrand(dto: BrandsDto) {
        try {
            return await this.prisma.brands.create({
                data: {
                    brand: dto.name
                }
            })
        } catch {
            throw new InternalServerErrorException("That brand is already inserte!") 
        }
    }

    async getBrands() {
        try {
            return await this.prisma.brands.findMany()
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
}
