module.exports = function(mongoose) {
  var Schema = mongoose.Schema; // Shortens the code
  var schemas = {};
  
  /* User schema */
  var userSchema = Schema({
    username:  String,
    password:  String,
    firstname: String,
    lastname:  String
    
    // Extend here
  });
  schemas.User = mongoose.model('User', userSchema);

  return schemas;
}
