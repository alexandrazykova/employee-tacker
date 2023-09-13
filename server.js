const mysql = require('mysql2');
const inquirer = require('inquirer');

// create the connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: ''
    },
    console.log(`Connected to the database.`)
);

inquirer
.prompt([
    {
    type: "list",
    name: "table",
    message: "What would you like to do?",
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']}
])
.then(() =>{

});