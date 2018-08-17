var express=require("express");
var app=express();
var passport=require("passport")
//Passport config
require('./config/passport')(passport);


//auth routes
var auth=require("./routes/auth")
app.use("/auth",auth)

app.get("/",(req,res)=>{
  res.send("It Works")
})
const port=process.env.PORT||5000;
app.listen(port,()=>{
  console.log("Server has started");
})