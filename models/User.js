const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'), //Step 1 hashing password
    User = require('../models/User');
    userSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
  })
      
//Incrypting the password by using hashing      
userSchema.methods.generateHash = function(password) { 
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

      
userSchema.methods.isValidPassword = function(password) { //is what the user typed in the same as what is stored in the database.
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next) { //Before saving
  if (this.isModified('password')) {  //Check to see if the password was saved
    this.password = this.generateHash(this.password)
  };
      // Next Step
  next();
})


// const User = mongoose.model('User', userSchema)
module.exports = User