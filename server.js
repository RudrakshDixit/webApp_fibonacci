const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
var n=req.body.NUM;
var phi=(1+Math.sqrt(5))/2;
var ans=Math.round(Math.pow(phi,n)/Math.sqrt(5));

res.send("The number at "+ n +" is "+ ans);
});

app.listen(2002,function(){
  console.log("Server is running on port 2002");
});
