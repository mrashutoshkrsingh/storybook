var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const mongoose=require("mongoose")
const keys=require("../keys/keys")
module.exports=function(passport){
  passport.use(new GoogleStrategy({
    clientID:     keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: keys.callbackURL,
    passReqToCallback   : true,
    proxy:true //to load with https
  },
  function(req, accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(profile)
  }
));
}