-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('sysadmin', 'seller', 'buyer') NOT NULL DEFAULT 'buyer';
