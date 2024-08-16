import { Decimal } from "@prisma/client/runtime/library"

export class SneakersDto {
  model_uuid: string
  description: string
  quantity: number
  price: Decimal
}

export class SneakerSizesDto {
    size_uuid: string
    sneaker_uuid: string
}

export class SneakerUpdateDto {
    sneaker_uuid: string
    price: Decimal
    description: string
    quantity: number
}