var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');

var dburl = 'mongodb://localhost:27017/bennetti';

var app = express();

var server = app.listen(3001, function(){
  console.log("Bennetti server listening on port 3001.");
});

app.use(bodyParser.json());

app.all('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

function getuserPrefs(userId, res){
  MongoClient.connect(dburl,function(err,db){
    var locales = db.collection('locales');
    var prefs = db.collection('prefs');
 
    locales.find().toArray(function(err, docs){
      console.log(docs);
      db.close();
    });
  });
}

app.get('/', function (req, res) {
  var action = req.body.Action;

  switch(action){
    
    case 'getUserPrefs':
      var userId = req.body.UserId;
      getUserPrevs(userId, res);
      break;

    default:
      break;
  }
});
