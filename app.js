var express=require("express");
var app=express();
var cookieParser = require('cookie-parser')
var passport=require("passport"),
session=require("express-session"),
exphbs=require("express-handlebars"),
mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/storybook",{useNewUrlParser:true})
.then(console.log("database connected"));
app.use(cookieParser())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
//Passport config
require('./config/passport')(passport);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

app.use(passport.initialize());
app.use(passport.session());

//users
app.use((req,res,next)=>{
  res.locals.user=req.user||null
next()
})
//auth routes
var auth=require("./routes/auth")
var index=require("./routes/index")
app.use("/auth",auth)
app.use("/",index);

app.get("/",(req,res)=>{
  res.send("It Works")
})
const port=process.env.PORT||2000;
app.listen(port,()=>{
  console.log("Server has started");
})

