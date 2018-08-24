const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../keys/keys');
const User=require("../models/user")
module.exports = function(passport){
  passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret:keys.googleClientSecret,
      callbackURL:'/auth/google/callback',
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
      // console.log(accessToken);
      // console.log(profile);

      var  image=profile.photos[0].value;
      image=image.substring(0,image.indexOf('?'));
      //console.log(image)
      const newUser=new User();
      process.nextTick(function(){
        User.findOne({"google.id":profile.id},function(err,user){
            if(err)
            return done(err);
            if(user)
            return done(null,user);
            else{
                var newUser=new User();
                newUser.googleID    = profile.id;
                newUser.firstName  = profile.name.givenName;
                newUser.lastName  = profile.name.familyName;
                newUser.email = profile.emails[0].value; 
                newUser.image=image;
            }
            newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
        })
    })
    })
  )
  passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
}