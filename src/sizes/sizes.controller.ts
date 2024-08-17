import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesDto } from './dto/sizes.dto';

@Controller('sneakers/sizes')
export class SizesController {
    constructor(private sizesService: SizesService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addSize(@Body() dto: SizesDto): Promise<any> {
        console.log(dto)
        return this.sizesService.addSize(dto)
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getSizes() {
        return this.sizesService.getSizes()
    }
}
