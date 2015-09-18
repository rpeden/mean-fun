const express = require('express');
const mongoose = require('mongoose');

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

const config = {
  rootPath: __dirname
}
require('./server/config/express')(app,config);
//Mongo related items
mongoose.connect('mongodb://localhost/multivision');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));
db.once('open', () => {
  console.log('multivision db opened');
})

app.get('/partials/*', (req,res) => {
  res.render(`partials/${req.params[0]}`);
});

app.get('*', (req, res) => {
  res.render('index');
});

const port = 3030;
app.listen(port)

console.log(`Listning on port ${port}...`);
