/*
  Warnings:

  - You are about to drop the column `pickUpDate` on the `orders` table. All the data in the column will be lost.
  - Added the required column `address` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Made the column `orderStatus` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `orderId` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "pickUpDate",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "orderStatus" SET NOT NULL,
ALTER COLUMN "orderId" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT;
