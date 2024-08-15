import { Decimal } from "@prisma/client/runtime/library"

export class ProductDto {
    name: string
    description: string
    price: Decimal
}