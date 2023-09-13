-- Deletes and creates the database --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- Uses the database --
USE employee_db;


CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE CASCADE
);
