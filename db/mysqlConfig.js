const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root', // your MySQL password
  database: 'pdfmanagementandcollab'
});

module.exports = db;
