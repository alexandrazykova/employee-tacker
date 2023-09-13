INSERT INTO department (id, name)
VALUES (1, 'Sales'),
       (2, "Engineering"),
       (3, 'Finance'),
       (4, "Legal");


INSERT INTO role (id, title, department, salary)
VALUES (1, 'Sales Lead', 'Sales', 100000),
       (2, "Salesperson", "Sales", 80000),
       (3, 'Lead Engineer', 'Engineering', 150000),
       (4, "Software Engineer", 'Engineering', 120000),
       (5, "Account Manager", 'Engineering', 160000),
       (6, 'Accountant', 'Finance', 125000),
       (8, "Legal Team Lead", 'Finance', 250000),
       (8, 'Lawyer', 'Finance', 190000);