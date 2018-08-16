var express=require("express");
var app=express();


const port=process.env.PORT||5000;
app.listen(port,()=>{
  console.log("Server has started");
})