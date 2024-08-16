import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { SneakersDto, SneakerSizesDto, SneakerUpdateDto } from './dto/sneakers.dto';
import { Sneakers } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

@Controller('sneakers')
export class SneakersController {
    constructor(private sneakerService: SneakersService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addSneaker(@Body() dto: SneakersDto) {
        return this.sneakerService.addSneaker(dto)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getSneakers() {
        return this.sneakerService.getSneakers()
    }

    @Get("/by/size")
    @HttpCode(HttpStatus.OK)
    async getSneakersBySize(@Body() data: string) {
        console.log(data["size"])
        return this.sneakerService.getSneakersBySize(data["size"])
    }

    @Get("/by/brand")
    @HttpCode(HttpStatus.OK)
    async getSneakersByBrand(@Body() data: string) {
        return this.sneakerService.getSneakersByBrand(data["brand"])
    }

    @Post("/set/size")
    @HttpCode(HttpStatus.CREATED)
    async addSizeToSneakers(@Body() dto: SneakerSizesDto) {
        return this.sneakerService.addSizeToSneaker(dto)
    }

    @Put("/update/price")
    @HttpCode(HttpStatus.OK)
    async updateSneakerPrice(@Body() dto: SneakerUpdateDto) {
        console.log(dto)
        return this.sneakerService.updatePrice(dto.sneaker_uuid, dto.price)
    }

    @Put("/update/quantity")
    @HttpCode(HttpStatus.OK)
    async updateSneakerQuantity(@Body() dto: SneakerUpdateDto) {
        console.log(dto)
        return this.sneakerService.updateQuantity(dto.sneaker_uuid, dto.quantity)
    }
    
    @Delete("/delete")
    @HttpCode(HttpStatus.OK)
    async removeSneaker(@Body() data: string) {
        return this.sneakerService.removeSneaker(data["sneaker_uuid"])
    }
}
