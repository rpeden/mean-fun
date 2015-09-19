var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    stylus = require('stylus'),
    session = require('express-session');


module.exports = function(app, config) {
  const compile = (str, path) => {
      return stylus(str).set('filename', path);
  }

  app.set('views', `${config.rootPath}/server/views`);
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser());
  app.use(session({secret:'multi vision unicorns'}));

  app.use(stylus.middleware(
    {
      src: `${config.rootPath}/public`,
      compile: compile
    }
  ));
  app.use(express.static(`${config.rootPath}/public`));
}
