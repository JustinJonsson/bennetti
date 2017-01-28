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
    var returnArr = []; 

    prefs.findOne({userid:userId, like:{$in: [1000002]}},function(err,result){
    //var prefret = prefs.findOne(query,function(err,result){
      console.log('TOPone', userId,result);
    });
    
    locales.find().forEach(
      function (resdoc){
        prefs.findOne({userid: userId, like: {$in: [resdoc.localeid]}}, function(err,prefdoc){
          resdoc.like = true;
          /*console.log('localeid', resdoc.localeid);
          console.log('resdoc', resdoc);
          console.log('like', prefdoc.like);
          console.log('dislike', prefdoc.donotlike);*/
        });
        prefs.findOne({userid: userId, donotlike: {$in: [resdoc.localeid]}}, function(err,prefdoc){
          resdoc.donotlike = true;
        });
        //console.log(prefs.findOne({userid: userId, donotlike: {$in: doc.localeid}}));
        //doc.like = (prefs.findOne({userid: userId, like: {$in: doc.localeid}})?true:false);
        //doc.donotlike = (prefs.findOne({userid: userId, donotlike: {$in: doc.localeid}})?true:false);
        //console.log(doc);
    });

    //console.log(returnArr);
    //locales.find().toArray(function(err, docs){
    //prefs.find({userid:userId}).toArray(function(err, docs){
    prefs.find({userid:userId}).toArray(function(err, docs){
      if(docs) {
        db.close();
        console.log(docs);
        res.json(docs);
        //res.json(testArray);
      }
    });
  });
}

app.post('/', function (req, res) {
  var action = req.body.action;

  switch(action){
    
    case 'home':
      var userId = req.body.userId;
      console.log('Got userId: ', userId);
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
