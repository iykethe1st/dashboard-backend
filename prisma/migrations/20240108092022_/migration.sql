/*
  Warnings:

  - Made the column `courierDetails` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "couriers" ALTER COLUMN "Orders" DROP NOT NULL;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "courierDetails" SET NOT NULL;
