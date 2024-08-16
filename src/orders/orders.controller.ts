import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderItemsDto, OrdersDto } from './dto/orders.dto';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addOrder(@Body() dto: OrdersDto) {
        return this.orderService.addOrder(dto)
    }


    @Post("/item")
    @HttpCode(HttpStatus.CREATED)
    async addOrderItems(@Body() dto: OrderItemsDto) {
        return this.orderService.addOrderItems(dto)
    }
}
