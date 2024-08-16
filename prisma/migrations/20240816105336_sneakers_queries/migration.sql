/*
  Warnings:

  - You are about to drop the column `orderUuid` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `productUuid` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `userUuid` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `order_uuid` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchase_price` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sneaker_uuid` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_uuid` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_token_hash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_orderUuid_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_productUuid_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userUuid_fkey";

-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_categoryUuid_fkey";

-- DropForeignKey
ALTER TABLE "product_categories" DROP CONSTRAINT "product_categories_productUuid_fkey";

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "orderUuid",
DROP COLUMN "productUuid",
ADD COLUMN     "order_uuid" TEXT NOT NULL,
ADD COLUMN     "purchase_price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "sneaker_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "userUuid",
ADD COLUMN     "ordered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "refresh_token_hash" TEXT NOT NULL;

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "product_categories";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "sneakers" (
    "uuid" TEXT NOT NULL,
    "model_uuid" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "sneakers_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "sneaker_sizes" (
    "uuid" TEXT NOT NULL,
    "size_uuid" TEXT NOT NULL,
    "sneaker_uuid" TEXT NOT NULL,

    CONSTRAINT "sneaker_sizes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "sizes" (
    "uuid" TEXT NOT NULL,
    "size" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "models" (
    "uuid" TEXT NOT NULL,
    "brand_uuid" TEXT NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "brands" (
    "uuid" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "sizes_size_key" ON "sizes"("size");

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_key" ON "brands"("brand");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_uuid_fkey" FOREIGN KEY ("order_uuid") REFERENCES "orders"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_sneaker_uuid_fkey" FOREIGN KEY ("sneaker_uuid") REFERENCES "sneakers"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sneakers" ADD CONSTRAINT "sneakers_model_uuid_fkey" FOREIGN KEY ("model_uuid") REFERENCES "models"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sneaker_sizes" ADD CONSTRAINT "sneaker_sizes_size_uuid_fkey" FOREIGN KEY ("size_uuid") REFERENCES "sizes"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sneaker_sizes" ADD CONSTRAINT "sneaker_sizes_sneaker_uuid_fkey" FOREIGN KEY ("sneaker_uuid") REFERENCES "sneakers"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brand_uuid_fkey" FOREIGN KEY ("brand_uuid") REFERENCES "brands"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
