import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { SneakersService } from './sneakers.service';
import { SneakersDto } from './dto/sneakers.dto';
import { Sneakers } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

@Controller('sneakers')
export class SneakersController {
    constructor(private sneakerService: SneakersService) {}

    // create a new sneaker
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addSneaker(@Body() dto: SneakersDto) {
        return this.sneakerService.addSneaker(dto)
    }

    // delete a specific sneaker
    @Delete("/:sneaker_uuid")
    @HttpCode(HttpStatus.OK)
    async removeSneaker(@Param("sneaker_uuid") sneakerUuid: string) {
        return this.sneakerService.removeSneaker(sneakerUuid)
    }

    // get all sneakers or by brand with an option query parameter
    @Get()
    @HttpCode(HttpStatus.OK)
    async getSneakers(@Query("brand") brand: string) {
        if (brand) {
            console.log(brand)
            return this.sneakerService.getSneakersByBrand(brand)
        } 
        return this.sneakerService.getSneakers()
    }

    // define a sneaker size
    @Post("/:sneaker_uuid/size")
    @HttpCode(HttpStatus.CREATED)
    async addSizeToSneakers(
        @Param("sneaker_uuid") sneakerUuid: string,
        @Body() data: string
    ) {
        console.log(sneakerUuid)
        console.log(data["size"])
        return this.sneakerService.addSizeToSneaker(sneakerUuid, data["size"])
    }

    // update a sneaker price
    @Patch("/:sneaker_uuid/price")
    @HttpCode(HttpStatus.OK)
    async updateSneakerPrice(
        @Param("sneaker_uuid") sneakerUuid: string,
        @Body() data: string
    ) {
        return this.sneakerService.updatePrice(sneakerUuid, data["price"])
    }

    // update the sneaker stock quantity
    @Patch("/:sneaker_uuid/quantity")
    @HttpCode(HttpStatus.OK)
    async updateSneakerQuantity(
        @Param("sneaker_uuid") sneakerUuid: string,
        @Body() data: string
    ) {
        return this.sneakerService.updateQuantity(sneakerUuid, data["quantity"])
    }
}
