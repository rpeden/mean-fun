'use strict';
const passport = require('passport');

module.exports = function(app) {
  app.get('/partials/*', (req,res) => {
    res.render(`partials/${req.params[0]}`);
  });

app.post('/login', (req, res, next) => {
  let auth = passport.authenticate('local', (err, user) => {
    if(err) { return next(err) }
    if(!user) { res.send({success:false}) }
    req.logIn(user, (err) => {
      if(err) { return next(err); }
      res.send({success: true, user: user});
    });
  });
  auth(res, req, next);
})

app.get('*', (req, res) => {
    res.render('index');
  });
}
