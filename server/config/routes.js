'use strict';
const passport = require('passport');

module.exports = function(app) {
  app.get('/partials/*', (req,res) => {
    res.render(`partials/${req.params[0]}`);
  });

app.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log("body parsing", req.body);
  console.log("user is ", req.user);
  /*let auth = passport.authenticate('local', (err, user) => {
    console.log("hmm " + user);
    if(err) { return next(err) }
    if(!user) { res.send({success:false}) }
    req.logIn(user, (err) => {
      if(err) { return next(err); }
      res.send({success: true, user: user});
    });
  });
  auth(res, req, next);*/
})

app.get('*', (req, res) => {
    res.render('index');
  });
}
