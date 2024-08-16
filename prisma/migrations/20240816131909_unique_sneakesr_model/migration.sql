/*
  Warnings:

  - A unique constraint covering the columns `[model_uuid]` on the table `sneakers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sneakers_model_uuid_key" ON "sneakers"("model_uuid");
