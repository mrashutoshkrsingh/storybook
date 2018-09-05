const express=require("express"),
app=express.Router();
const {isLogin}=require("../helpers/auth")
app.get("/",(req,res)=>{
  //if(user)
  res.render("./index/welcome")
})

app.get("/dashboard",isLogin,(req,res)=>{
  res.render("index/dashboard")
})
app.get('/logout', (req, res) => {
  req.logout();
  //req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports=app;