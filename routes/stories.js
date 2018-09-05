const express=require("express"),
app=express.Router();
const {isLogin}=require("../helpers/auth")
app.get("/",(req,res)=>{
  res.render("stories/index");
})

app.get("/edit",isLogin,(req,res)=>{
  res.render("stories/edit");
})

app.get("/add",isLogin,(req,res)=>{
  res.render("stories/add");
})

module.exports=app;