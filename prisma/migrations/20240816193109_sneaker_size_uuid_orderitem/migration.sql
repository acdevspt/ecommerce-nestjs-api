/*
  Warnings:

  - You are about to drop the column `size` on the `order_items` table. All the data in the column will be lost.
  - Added the required column `sneaker_size_uuid` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "size",
ADD COLUMN     "sneaker_size_uuid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_sneaker_size_uuid_fkey" FOREIGN KEY ("sneaker_size_uuid") REFERENCES "sneaker_sizes"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
