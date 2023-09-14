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

// Call the function
employeeData();