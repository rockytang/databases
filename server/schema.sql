CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username VARCHAR(50),
  message VARCHAR(300),
  roomname VARCHAR(50)
  /* Describe your table here.*/
);

CREATE TABLE users (
  username VARCHAR(50)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

