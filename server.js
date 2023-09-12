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
