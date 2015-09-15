const express = require('express');
const stylus = require('stylus');


const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'jade');

app.get('*', (req, res) => {
  res.render('index');
});

const port = 3030;
app.listen(port)

console.log(`Listning on port ${port}...`);
