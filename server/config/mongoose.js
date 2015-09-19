const mongoose = require('mongoose');

module.exports = function(config){
  mongoose.connect(config.db);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error.'));
  db.once('open', () => {
    console.log('multivision db opened');
  })

  const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
  });

  const User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err,collection){
    if(collection.length === 0) {
      User.create({firstName:'John', lastName:'Nobody', userName: 'John'});
      User.create({firstName:'Bob', lastName:'Jones', userName: 'Bob'});
      User.create({firstName:'Tom', lastName:'Smith', userName: 'Tom'});
    }
  });
}
