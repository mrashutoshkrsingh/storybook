const express=require("express"),
app=express.Router();

app.get("/",(req,res)=>{
  res.send("It Works")
})

app.get("/dashboard",(req,res)=>{
  res.send("Here is your dashboard")
})

module.exports=app;