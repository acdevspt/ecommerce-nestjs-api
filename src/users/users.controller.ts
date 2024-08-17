import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    // create a new order
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async addUser(@Body() dto: UsersDto) {
        return this.userService.addUser(dto)
    }

    // the the orders of all users
    @Get()
    @HttpCode(HttpStatus.CREATED)
    async getUsers() {
        return this.userService.getUsers()
    }

    // retrieve the user orders
    @Get(":user_uuid/orders")
    @HttpCode(HttpStatus.CREATED)
    async getUserOrders(@Param("user_uuid") userUuid: string) {
        return this.userService.getUserOrders(userUuid)
    }
}
