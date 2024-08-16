import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersDto } from './dto/users.dto';

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
}
