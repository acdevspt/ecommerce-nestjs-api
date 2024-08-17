import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.dto';
import { Timestamp } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async addUser(dto: UsersDto) {
        try {
            return await this.prisma.users.create({
                data: {
                    firstName: dto.first_name,
                    lastName: dto.last_name,
                    email: dto.last_name,
                    password_hash: dto.password_hash,
                    refresh_token_hash: dto.refresh_token_hash
                }
            })
        } catch {
            throw new InternalServerErrorException("Something when wrong!")
        }
    }

    async getUsers() {
        try {
            return await this.prisma.users.findMany()
        } catch {
            throw new InternalServerErrorException("Something when wrong!")
        }
    }

    async getUserOrders(user_uuid: string) {
        try {
            return await this.prisma.$queryRaw`SELECT order_items.* FROM order_items JOIN orders ON order_items.order_uuid = orders.uuid WHERE orders.user_uuid = ${user_uuid}`
        } catch {
            throw new InternalServerErrorException("Something when wrong!")
        }
    }
}
