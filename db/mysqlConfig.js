const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Shashi@321', // your MySQL password
  database: 'pdfmanagementandcollab'
});

module.exports = db;
