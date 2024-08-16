import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SneakersDto, SneakerSizesDto } from './dto/sneakers.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class SneakersService {
    constructor(private prisma: PrismaService) {}

    async addSneaker(dto: SneakersDto) {
        try {
            return await this.prisma.sneakers.create({
                data: dto
            })
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async getSneakers() {
        try {
            return await this.prisma.sneakers.findMany()
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async addSizeToSneaker(dto: SneakerSizesDto) {
        try {
            return await this.prisma.sneakerSizes.create({
                data: dto
            })
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async getSneakersBySize(size: Decimal) {
        try {
            return await this.prisma.$queryRaw`SELECT * FROM sneakers JOIN sneaker_sizes ON sneakers.uuid = sneaker_sizes.sneaker_uuid 
                JOIN sizes ON sizes.uuid = sneaker_sizes.size_uuid WHERE sizes.size = ${size}`
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async getSneakersByBrand() {

    }

    async updatePrice(sneakerUuid: string, newPrice: Decimal) {
        try {
            return await this.prisma.sneakers.update({
                where: {
                    uuid: sneakerUuid
                },
                data: {
                    price: newPrice
                }
            })
        } catch (error){
            console.log(error.message)
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
    async updateQuantity(sneakerUuid: string, newQuantity: number) {
        try {
            return await this.prisma.sneakers.update({
                where: {
                    uuid: sneakerUuid
                },
                data: {
                    quantity: newQuantity
                }
            })
        } catch (error){
            console.log(error.message)
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
}
