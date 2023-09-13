INSERT INTO department (id, name)
VALUES (1, 'Sales'),
       (2, "Engineering"),
       (3, 'Finance'),
       (4, "Legal");


INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000, 'Sales', 1),
       (2, "Salesperson", 80000, "Sales", 1),
       (3, 'Lead Engineer', 150000, 'Engineering', 2),
       (4, "Software Engineer", 120000, 'Engineering', 2),
       (5, "Account Manager", 160000, 'Engineering', 2),
       (6, 'Accountant', 125000, 'Finance', 3),
       (7, "Legal Team Lead", 250000, 'Finance', 3),
       (8, 'Lawyer', 190000, 'Finance', 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1,'John', 'Doe', 1, 1),
    (2, 'Mike', 'Chan', 2, 2),
    (3, 'Ashley', 'Rodrigues', 3, 3),
    (4, 'Kevin', 'Tupik', 4, 4),
    (5, 'Kunal', 'Singh', 5, 5),
    (6, 'Malia', 'Brown', 6, 6),
    (7, 'Sarah', 'Lourd', 7, 7),
    (8, 'Tom', 'Allen', 8, 8);

