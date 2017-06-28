DROP DATABASE IF EXISTS gravitas;

CREATE DATABASE gravitas;

USE gravitas;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  handle varchar(30) NOT NULL,
  email varchar(50) NOT NULL,
  avatar_url varchar(200) NOT NULL,
  github_token varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql  // run this to drop the database and create it
 *  to create the database and the tables.*/
