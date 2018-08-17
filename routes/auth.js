var express=require("express");
var app=express.Router()
var passport=require("passport")


app.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

app.get( '/google/callback',
	passport.authenticate( 'google', {
		successRedirect: '/auth/google/success',
		failureRedirect: '/auth/google/failure'
}));

module.exports=app