const express = require('express');
const stylus = require('stylus');
const logger = require('morgan');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

const compile = (str, path) => {
    return stylus(str).set('filename', path);
}

app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'jade');
app.use(stylus.middleware(
  {
    src: `${__dirname}/public`,
    compile: compile
  }
));
app.use(express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.render('index');
});

const port = 3030;
app.listen(port)

console.log(`Listning on port ${port}...`);
