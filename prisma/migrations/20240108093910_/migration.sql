/*
  Warnings:

  - You are about to drop the column `Orders` on the `couriers` table. All the data in the column will be lost.
  - Added the required column `courierId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "couriers" DROP COLUMN "Orders";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "courierId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "couriers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
