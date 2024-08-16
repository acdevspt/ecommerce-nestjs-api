import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ModelsDto } from './dto/models.dto';
import { ModelsService } from './models.service';
import { BrandsDto } from 'src/brands/dto/brands.dto';

@Controller('sneakers')
export class ModelsController {
    constructor(private modelService: ModelsService) {}

    @Post("/models")
    @HttpCode(HttpStatus.CREATED)
    async addBrand(@Body() dto: ModelsDto) {
        return this.modelService.addModelToBrand(dto)
    }

    @Get("/models")
    @HttpCode(HttpStatus.OK)
    async getAllModels() {
        return this.modelService.getAllModels()
    }

    @Get("/models/brand")
    @HttpCode(HttpStatus.OK)
    async getBrandModels(@Body() dto: ModelsDto) {
        return this.modelService.getBrandModels(dto.brand_uuid)
    }
}
