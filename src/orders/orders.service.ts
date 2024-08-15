import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class OrdersService {
    constructor(private prismaClient: PrismaClient) {}

    
}
