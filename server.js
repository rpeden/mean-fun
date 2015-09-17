const express = require('express');
const stylus = require('stylus');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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


//Mongo related items
mongoose.connect('mongodb://localhost/multivision');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error.'));
db.once('open', () => {
  console.log('multivision db opened');
})

const messageSchema = mongoose.Schema({
  message: String
});

const Message = mongoose.model('Message', messageSchema);

var mongoMessage;
Message.findOne().exec((err, messageDoc) => {
  mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', (req,res) => {
  res.render(`partials/${req.params.partialPath}`);
});

app.get('*', (req, res) => {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

const port = 3030;
app.listen(port)

console.log(`Listning on port ${port}...`);
