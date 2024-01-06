/*
  Warnings:

  - You are about to drop the column `orderNo` on the `orders` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpDate` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "orderNo",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "orderId" TEXT,
ADD COLUMN     "pickUpDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
