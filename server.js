const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

const config = require('./server/config/config')[env]
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

const User = mongoose.model('User');
passport.use(new LocalStrategy( (username, password, done) => {
  console.log('trying to find user ' + username);
  User.findOne({userName: username}).exec( (err, user) => {
    if(user) {
      console.log(`found ${username}`)
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
}));

passport.serializeUser( (user, done) => {
  if(user) {
    done(null, user._id);
  }
});

passport.deserializeUser( (id, done) => {
  User.findOne({_id: id}).exec( (err, user) => {
    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
})
app.listen(config.port)

console.log(`Listning on port ${config.port}...`);
