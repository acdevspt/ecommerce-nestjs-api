/*
  Warnings:

  - Added the required column `size` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_items" ADD COLUMN     "size" TEXT NOT NULL;
