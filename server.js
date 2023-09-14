const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Create the connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'employee_db',
        password: 'pass'
    },
    console.log(`Connected to the database.`)
);

// Inquirer function for user prompt
const employeeData = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "menu",
                message: "What would you like to do?",
                choices: ['view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role']
            }
        ])
        .then((answers) => {
            switch (answers.menu) {
                case 'view all departments':
                    viewAllDepatments();
                    break;

                case 'view all roles':
                    viewAllRoles();
                    break;

                case 'view all employees':
                    viewAllEmployees();
                    break;

                case 'add a department':
                    addDepartment();
                    break;

                case 'add a role':
                    addRole();
                    break;

                case 'add an employee':
                    addEmployee();
                    break;

                case 'update an employee role':
                    updateEmployeeRole();
                    break;
            }
        });
};

// Function to display departments
const viewAllDepatments = () => {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.table(res);
        }
        employeeData();
    });
}

// Function to display roles
const viewAllRoles = () => {
    db.query('SELECT * FROM role', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.table(res);
        }
        employeeData();
    });
}

// Function to display employees
const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.table(res);
        }
        employeeData();
    });
}

// Function to add department
const addDepartment = () => {
    inquirer
        .prompt([{
            type: "input",
            name: "department",
            message: "What department would you like to add?",
        }])
        .then(body = (response) => {
            const param = [body.department];
            db.query(`INSERT INTO department (name) VALUES ('${response.department}')`, param, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.table(res);
                }
                viewAllDepatments();
            });
        });
};

// Function to add role
const addRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the job title?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary for the role?"
            },
            {
                type: "input",
                name: "department_id",
                message: "What department id does this role have?"
            },
        ])
        .then(body = (response) => {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${response.title}", "${response.salary}", "${response.department_id}" );`, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.table(res);
                }
                viewAllRoles();
            });
        });
};

// Function to add employee
const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "Enter employee's first name"
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter employee's last name"
            },
            {
                type: "number",
                name: "roleId",
                message: "What is the role id for the new employee?"
            },
            {
                type: "number",
                name: "managerId",
                message: "What is employee's manager id?"
            },
        ])
        .then(body = (response) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${response.firstName}", "${response.lastName}", "${response.roleId}", "${response.managerId}");`, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.table(res);
                }
                viewAllEmployees();
            });
        });
};

// Function to update employee role
const updateEmployeeRole = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter employee's id you would like to update"
            },
            {
                type: "list",
                name: "details",
                message: "What details would you like to update?",
                choices: [
                    'first_name',
                    'last_name',
                    'role_id',
                    'manager_id'
                ]
            },
            {
                type: "newDetails",
                name: "input",
                message: "Enter the changed value"
            }
        ])
        .then(body = (response) => {
            db.query(`UPDATE employee SET '${response.details}' = "${response.newDetails}" WHERE id = '${response.id}'`, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.table(res);
                }
                viewAllEmployees();
            });

        });
};

// Call the function
employeeData();