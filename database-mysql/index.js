var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL);
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'gravitas'
// });

connection.connect();
// connection.connect(function(err) {
//   if (err) {
//     console.log('Error connecting to mysql database');
//     throw err;
//   }
//
//   console.log("Connected to mysql database!");
// });



module.exports = connection;
