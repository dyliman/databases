var mysql = require('mysql');

var server = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat',
  multipleStatements: true
})

server.connect((err) => {
  if(err) throw err;
  console.log('success server')
})

// Create a database connection and export it from this file.
// You will need to connect with the user "student", password student,
// and to the database "chat".


exports.server = server;