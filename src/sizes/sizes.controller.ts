import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesDto } from './dto/sizes.dto';

@Controller('sneakers')
export class SizesController {
    constructor(private sizesService: SizesService) {}

    @Post("/sizes")
    @HttpCode(HttpStatus.CREATED)
    async addSize(@Body() dto: SizesDto): Promise<any> {
        console.log(dto)
        return this.sizesService.addSize(dto)
    }

    @Get("/sizes")
    @HttpCode(HttpStatus.OK)
    async getSizes() {
        return this.sizesService.getSizes()
    }
    
}
