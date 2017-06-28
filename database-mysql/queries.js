var db = require('./index');

db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

db.end();

// var selectAll = function() {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT * FROM users', function (err, results) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
//
// var addUser = function(user) {
//   return new Promise((resolve, reject) => {
//     db.query(
//       `INSERT INTO users VALUES (null, '${user.name}', '${user.email}', '${user.gitHub}')`,
//       function (err, results) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };



module.exports = {
  selectAll: selectAll,
  addUser: addUser
};
