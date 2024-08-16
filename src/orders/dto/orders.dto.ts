import { Decimal } from "@prisma/client/runtime/library"

export class OrdersDto {
    user_uuid: string
}

export class OrderItemsDto {
    order_uuid: string
    sneaker_uuid: string
    sneaker_size_uuid: string
    quantity: number
    purchase_price: Decimal
}