-- Deletes and creates the database --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- Uses the database --
USE employee_db;


CREATE TABLE departments (
  id INT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  department INT,
  salary INT NOT NULL,
  FOREIGN KEY (department)
  REFERENCES departments(id)
  ON DELETE CASCADE
);
