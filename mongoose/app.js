var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://localhost/test');


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
  var kittySchema = new mongoose.Schema({
    name: String
  })

  kittySchema.methods.speak = function(){
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I dont have a name"
    console.log(greeting);
  }

  var Kitten = db.model('Kitten', kittySchema)

  var silence = new Kitten({ name: 'Silence'})
  console.log(silence.name)
  var fluffy = new Kitten({name: 'Fluffy'});
  fluffy.speak()
  fluffy.save(function(err, fluffy){
    if(err)
      console.log(err);
    fluffy.speak();
  });
});