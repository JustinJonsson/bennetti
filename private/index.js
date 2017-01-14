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

function getUserPrefs(userId, res){
  MongoClient.connect(dburl,function(err,db){
    var locales = db.collection('locales');
    var prefs = db.collection('prefs');
 
    locales.find().toArray(function(err, docs){
      console.log(docs);
      if(docs) {
        db.close();
        //res.json(docs);
        res.json(testArray);
      }
    });
  });
}

app.post('/', function (req, res) {
  var action = req.body.action;

  console.log('action: ', action);
  switch(action){
    
    case 'home':
      console.log('got in');
      var userId = req.body.userId;
      getUserPrefs(userId, res);
      break;

    default:
      console.log('default');
      break;
  }
});

var testArray = [
    {
      name: 'Growler',
      like: true,
      donotlike: false
    },
    {
      name: 'Ulysses',
      like: true,
      donotlike: false
    },
    {
      name: 'GoGo',
      like: false,
      donotlike: true
    },
    {
      name: 'Flavors',
      like: false,
      donotlike: true
    },
    {
      name: 'Chopt',
      like: true,
      donotlike: false
    },
    {
      name: 'Naya Express',
      like: true,
      donotlike: false
    },
    {
      name: 'Dig Inn',
      like: false,
      donotlike: true
    },
    {
      name: 'Lenwich',
      like: false,
      donotlike: false
    }
  ];
