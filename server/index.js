var express = require('express');
var bodyParser = require('body-parser');
// var db = require('../database-mysql/queries');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '../react-client/dist'));
app.use(bodyParser.json()); // augment the req with body property which will have json from the post's body
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})


// app.get('/users', function (req, res) {
//   db.selectAll()
//     .then(results => {
//       console.log('these are the results from /users get', results);
//       res.status(200).end(JSON.stringify(results));
//     })
//     .catch(err => {
//       console.error('we have a error ', err);
//       res.status(500).end();
//     });
// });
//
// app.post('/users', function (req, res) {
//   db.addUser(req.body)
//     .then(results => {
//       console.log('these are the results from /users post ', results);
//       res.status(201).end();
//     })
//     .catch(err => {
//       console.error('we have a error ', err);
//       res.status(500).end();
//     });
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
