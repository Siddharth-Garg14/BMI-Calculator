import express from "express";
import path from "path";
import bodyParser from "body-parser";
var __dirname =path.resolve();
const app =express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");


});


app.post("/",function(req,res){
  var weight=Number(req.body.weight);
  var hieght=Number(req.body.hieght);
  var result=weight/(hieght*hieght);

  res.send("Your BMI is :" + result)
})


app.listen(3000,function(){
  console.log("Server started at :3000");
});
