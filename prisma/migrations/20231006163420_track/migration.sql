/*
  Warnings:

  - You are about to drop the column `destination` on the `lacak` table. All the data in the column will be lost.
  - You are about to drop the column `origin` on the `lacak` table. All the data in the column will be lost.
  - Added the required column `statusPengiriman` to the `lacak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lacak` DROP COLUMN `destination`,
    DROP COLUMN `origin`,
    ADD COLUMN `statusPengiriman` VARCHAR(191) NOT NULL;
