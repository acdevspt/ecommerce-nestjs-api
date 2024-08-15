import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(private prismaClient: PrismaClient) {}

    async addProduct(dto: ProductDto) {
        await this.prismaClient.products.create({
            data: dto
        })
    }
}
