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

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  slast_name VARCHAR(30),
  role_id INT
 manager_id INT 
 FOREIGN KEY()
--  manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
);
