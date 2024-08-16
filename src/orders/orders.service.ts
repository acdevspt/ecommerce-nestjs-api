import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderItemsDto, OrdersDto } from './dto/orders.dto';

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) {}

    async addOrder(dto: OrdersDto) {
        try {
            return await this.prisma.orders.create({
                data: dto
            })           
        } catch {
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }

    async addOrderItems(dto: OrderItemsDto) {
        try {
            return await this.prisma.orderItems.create({
                data: {
                    order_uuid: dto.order_uuid,
                    sneaker_uuid: dto.sneaker_uuid,
                    sneaker_size_uuid: dto.sneaker_size_uuid,
                    quantity: dto.quantity,
                    purchase_price: dto.purchase_price
                }
            })           
        } catch (error) {
            console.log(error.message)
            throw new InternalServerErrorException("Something went wrong!") 
        }
    }
}


/*

 const orderItems = await this.prisma.orderItems.create({
                data: {
                    order_uuid: order.uuid,
                    sneaker_uuid: "sneaker_uuid",
                    quantity: 10,
                    purchase_price: 100.99
                }
            })
            return order

*/