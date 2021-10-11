const express = require('express');
const app = express();
const morgan = require('morgan');
let users = [
  { id: 1, name: 'jong' },
  { id: 2, name: 'hyuk' },
  { id: 3, name: 'woo' },
];

app.use(morgan('dev'));

app.get('/users', function (req, res) {
  res.json(users);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
