DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  `objectId` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(30) NULL,
  `message` VARCHAR(250) NULL DEFAULT NULL,
  `room_id` VARCHAR(30) NULL DEFAULT 'lobby',
  `createdAt` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`objectId`)

);

/* Create other tables and define schemas for them here! */

CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomName` VARCHAR(20) UNIQUE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) UNIQUE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

