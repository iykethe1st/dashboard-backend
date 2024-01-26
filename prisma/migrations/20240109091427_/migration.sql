/*
  Warnings:

  - Made the column `dailyOrderCount` on table `couriers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `availability` on table `couriers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "couriers" ALTER COLUMN "dailyOrderCount" SET NOT NULL,
ALTER COLUMN "dailyOrderCount" SET DEFAULT 0,
ALTER COLUMN "availability" SET NOT NULL,
ALTER COLUMN "availability" SET DEFAULT 'offline';
