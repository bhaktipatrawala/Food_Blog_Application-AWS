const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    port: process.env.RDS_PORT
})
db.connect(function(err){
    if(err){
      console.error('Database connection failed: ' + err.stack);
      return
    }
    console.log('Connected to database');
  });

module.exports = {db}