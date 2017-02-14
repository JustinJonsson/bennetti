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

    /*
    prefs.findOne({userid:userId, like:{$in: [1000002]}},function(err,result){
      console.log('TOPone', userId,result);
      console.log('');
    });
    */
    
    var locStream = locales.find().stream();
    var resArray = [];

    locStream.on('data', function(doc){
      var tempdoc = doc;
      /*
      prefs.findOne({userid: userId, like: {$in: [doc.localeid]}}, function(err,prefdoc){
        if(prefdoc) {
          doc.like = true;
        }
      });
      prefs.findOne({userid: userId, donotlike: {$in: [doc.localeid]}}, function(err,prefdoc){
        if(prefdoc) {
          doc.donotlike = true;
        }
      });
      */
      var prefStream = prefs.find({userid: userId}).stream();

      prefStream.on('data', function(pdoc){
        var likeArr = pdoc.like;
        var donotlikeArr = pdoc.donotlike;

        if (likeArr.length > 0 && likeArr.indexOf(doc.localeid)>-1){
          console.log('LIKE',doc.localeid,likeArr);
          tempdoc.like = true;
        }
        if (donotlikeArr.length > 0 && donotlikeArr.indexOf(doc.localeid)>-1){
          console.log('DONOTLIKE',doc.localeid,donotlikeArr);
          tempdoc.donotlike = true;
        }

        resArray.push(tempdoc);
        //console.log('just pushed',tempdoc);
      });
    });

    locStream.on('end', function(){
      console.log('closed!');
      console.log('Result Doc', resArray);
      db.close();
      //res.json(resArray);
      res.json(testArray);
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
