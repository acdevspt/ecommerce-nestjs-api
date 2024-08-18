import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ModelsDto } from './dto/models.dto';
import { ModelsService } from './models.service';

@Controller('sneakers/models')
export class ModelsController {
    constructor(private modelService: ModelsService) {}

    // add a new model
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addBrand(@Body() dto: ModelsDto) {
        return this.modelService.addModelToBrand(dto)
    }

    // gets all models
    @Get()
    @HttpCode(HttpStatus.OK)
    async getAllModels() {
        return this.modelService.getAllModels()
    }

    // gets the brand that owns the model
    @Get("/:model_uuid/brand")
    @HttpCode(HttpStatus.OK)
    async getBrandModels(@Param("model_uuid") modelUuid: string) {
        return this.modelService.getBrandModels(modelUuid)
    }
}
