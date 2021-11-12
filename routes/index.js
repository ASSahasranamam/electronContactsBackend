var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var database;
const uri = "mongodb+srv://root:root@connectplacecluster.0gdr9.gcp.mongodb.net/nodeJSNewTest?retryWrites=true&w=majority";

const userInfoModel = require("../public/javascripts/userinfo")
mongoose.connect(uri, ()=>{
  console.log("Connected to mongoose ")
})
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var database;

// client.connect( () => {  
//   database = client.db("nodeJSTestServer");
 
//    console.log("Connected");
 
// })

router.post('/addTest',function(req,res,next){
  console.log(req.body);

  var {firstName} = req.body;
  var {lastName} = req.body;
  var {address} = req.body;
  var {email} = req.body;
  var {gender} = req.body;
  var {number} = req.body;

  var newUserInfoModel = new userInfoModel({
    firstName: firstName,
    lastName: lastName,
    address: address,
    email: email,
    gender: gender,
    number: number
  })

  newUserInfoModel.save()

res.send('{"hello":"Hello"}');
});


router.post('/getAll', async function(req, res, next){
  try {
    var allData = await userInfoModel.find({});
    res.status(201).json({success: true ,data: allData})
  
    
  } catch (e) {
    res.status(409).json({success: false, error:e ,data: [] })
  
  }
});


router.post('/test', function(req, res, next) {
  console.log(req.body);
  var dataCal;

  // MongoClient.connect(uri, {useNewUrlParser: true}, function(err, db){
  //   if(err) throw err;
  //   var dbo = db.db('nodeJSTestServer');
  //   var myObj = [{name: 'Company Inc', address: 'Highway 37'}];
  //   var collection = db.collection('Customers');
  //   collection.insertOne(myObj, function(err, res){
  //     if(err) throw err;
  //     db.close();

  //     res.json({value: '1 document inserted!'});
  //   });
  // }); 




  // });
 
  

});
module.exports = router;
