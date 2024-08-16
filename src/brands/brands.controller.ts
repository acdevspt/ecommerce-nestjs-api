import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsDto } from './dto/brands.dto';

@Controller('sneakers')
export class BrandsController {
    constructor(private brandsService: BrandsService) {}

    @Post("/brands")
    @HttpCode(HttpStatus.CREATED)
    async addBrand(@Body() dto: BrandsDto) {
        return this.brandsService.addBrand(dto)
    }

    @Get("/brands")
    @HttpCode(HttpStatus.OK)
    async getBrands() {
        return this.brandsService.getBrands()
    }
}
