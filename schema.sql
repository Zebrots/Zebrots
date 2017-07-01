-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Create the database
-- ---

DROP DATABASE IF EXISTS `GRAVITAS`;

CREATE DATABASE `GRAVITAS`;

USE `GRAVITAS`;

-- ---
-- Table 'TOPICS'
--
-- ---

DROP TABLE IF EXISTS `TOPICS`;

CREATE TABLE `TOPICS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_q_id` INTEGER NOT NULL,
  `topic` VARCHAR(50) NOT NULL,
  `user_a_id` INTEGER NULL,
  `takeaway_id` INTEGER NULL,
  `timestamp` TIMESTAMP DEFAULT NOW(),

   PRIMARY KEY (`id`)
);

-- ---
-- Table 'USERS'
--
-- ---

DROP TABLE IF EXISTS `USERS`;

CREATE TABLE USERS (
  id int NOT NULL AUTO_INCREMENT,
  handle varchar(30) NOT NULL,
  email varchar(50) NOT NULL,
  avatar_url varchar(200) NOT NULL,
  github_token varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

-- ---
-- Table 'TAKEAWAYS'
--
--
-- ---

DROP TABLE IF EXISTS `TAKEAWAYS`;

CREATE TABLE `TAKEAWAYS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `topic` VARCHAR(50) NOT NULL,
  `date` DATETIME NOT NULL,
  `takeaway` VARCHAR(255) NOT NULL,
  `user_id` INTEGER NOT NULL,
  `user_A_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'EVENTS'
--
-- ---

DROP TABLE IF EXISTS `EVENTS`;

CREATE TABLE `EVENTS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(32) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `time` DATETIME NOT NULL,
  `user_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'RSVP'
--
-- ---
DROP TABLE IF EXISTS `RSVP`;

CREATE TABLE `RSVP` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `event_id` INTEGER NOT NULL,
  `user_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'TAGS'
--
-- ---

DROP TABLE IF EXISTS `TAGS`;

CREATE TABLE `TAGS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `tagname` CHAR(32) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'TAGS_JOIN_TOPICS'
--
-- ---

DROP TABLE IF EXISTS `TAGS_JOIN_TOPICS`;

CREATE TABLE `TAGS_JOIN_TOPICS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `tag_id` INTEGER NOT NULL,
  `topic_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

<<<<<<< HEAD
ALTER TABLE `TOPICS` ADD FOREIGN KEY (user_q_id) REFERENCES `USERS` (`id`);
ALTER TABLE `TOPICS` ADD FOREIGN KEY (user_a_id) REFERENCES `USERS` (`id`);
=======
ALTER TABLE `TAKEAWAYS` ADD FOREIGN KEY (user_A_id) REFERENCES `USERS` (`id`);

ALTER TABLE `TOPICS` ADD FOREIGN KEY (user_A_id) REFERENCES `USERS` (`id`);
>>>>>>> Add more test data
ALTER TABLE `TOPICS` ADD FOREIGN KEY (takeaway_id) REFERENCES `TAKEAWAYS` (`id`);

ALTER TABLE `EVENTS` ADD FOREIGN KEY (user_id) REFERENCES `USERS` (`id`);

ALTER TABLE `RSVP` ADD FOREIGN KEY (event_id) REFERENCES `EVENTS` (`id`);
ALTER TABLE `RSVP` ADD FOREIGN KEY (user_id) REFERENCES `USERS` (`id`);
<<<<<<< HEAD
ALTER TABLE `TAGS_JOIN_TOPICS` ADD FOREIGN KEY (tag_id) REFERENCES `TAGS` (`id`);
ALTER TABLE `TAGS_JOIN_TOPICS` ADD FOREIGN KEY (invite_id) REFERENCES `TOPICS` (`id`);
=======

ALTER TABLE `TAGS_JOIN_TOPICS` ADD FOREIGN KEY (tag_id) REFERENCES `TAGS` (`id`);
ALTER TABLE `TAGS_JOIN_TOPICS` ADD FOREIGN KEY (topic_id) REFERENCES `TOPICS` (`id`);
>>>>>>> Add more test data

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `TAKEAWAYS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `TOPICS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `USERS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `EVENTS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `TAGS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `TAGS_JOIN_INQUIRIES` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `RSVP` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `TAGS_JOIN_TOPICS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `USERS` (`id`,`handle`,`email`,`avatar_url`,`github_token`) VALUES
(1,'interdigitize','kamie.lyn@gmail.com','https://avatars2.githubusercontent.com/u/17533722?v=3&s=460','TOKEN_KAMIE');
INSERT INTO `USERS` (`id`,`handle`,`email`,`avatar_url`,`github_token`) VALUES
(2,'ThalyaFlourishing','ThalyaFlourishing@gmail.com','https://avatars0.githubusercontent.com/u/22850224?v=3&s=460','TOKEN_KURT');
INSERT INTO `USERS` (`id`,`handle`,`email`,`avatar_url`,`github_token`) VALUES
(3,'nubered','tradeelf@gmail.com','https://avatars0.githubusercontent.com/u/3600698?v=3&s=460','TOKEN_REUBEN');

INSERT INTO `TOPICS` (`id`,`user_id`,`topic`,`user_A_id`,`takeaway_id`,`timestamp`) VALUES
(1,2,'Forgot how to spell my name...',null,null,'1970-01-01 00:00:01');
INSERT INTO `TOPICS` (`id`,`user_id`,`topic`,`user_A_id`,`takeaway_id`,`timestamp`) VALUES
(2,1,'How can I square the circle?',null,null,'2017-06-30 14:23:42');
INSERT INTO `TOPICS` (`id`,`user_id`,`topic`,`user_A_id`,`takeaway_id`,`timestamp`) VALUES
(3,3,'My code sux',null,null,'2020-07-26 17:55:20');

INSERT INTO `TAKEAWAYS` (`id`,`topic`,`date`,`takeaway`,`user_id`,`user_A_id`) VALUES
(1,'MySQL no workee','1970-01-01 00:10:21','MySQL gets confused about where its files are >_<','1','2');
INSERT INTO `TAKEAWAYS` (`id`,`topic`,`date`,`takeaway`,`user_id`,`user_A_id`) VALUES
(2,'Programming is hard...','2017-06-30 14:33:21','Programming is fun!','2','3');
INSERT INTO `TAKEAWAYS` (`id`,`topic`,`date`,`takeaway`,`user_id`,`user_A_id`) VALUES
(3,'Question re: How to hack Pentagon','2020-07-26 18:05:44','Pair-programming is hard','3','1');

-- INSERT INTO `EVENTS` (`id`,`title`,`description`,`time`,`user_id`) VALUES
-- ('','','','','');
-- INSERT INTO `TAGS` (`id`,`tagname`) VALUES
-- ('','');
-- INSERT INTO `TAGS_JOIN_INQUIRIES` (`id`,`tag_id`,`topic_id`) VALUES
-- ('','','');
-- INSERT INTO `RSVP` (`id`,`event_id`,`user_id`) VALUES
-- ('','','');
-- INSERT INTO `TAGS_JOIN_TOPICS` (`id`,`tag_id`,`topic_id`) VALUES
-- ('','','');

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql  // run this to drop the database and create it
 *  to create the database and the tables.*/
