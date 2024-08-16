import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addUser(@Body() dto: UsersDto) {
        return this.userService.addUser(dto)
    }

    @Get()
    @HttpCode(HttpStatus.CREATED)
    async getUsers() {
        return this.userService.getUsers()
    }
}
