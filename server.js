const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// create the connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'employee_db',
        password: 'pass'
    },
    console.log(`Connected to the database.`)
);

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
            if (answers.menu == 'view all departments') {
                viewAllDepatments();

            }

        });
}

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

employeeData();