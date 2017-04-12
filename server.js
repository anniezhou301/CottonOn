var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("list",['list']);
var bodyParser = require("body-parser");
var path = require('path');
app.set('view engine', 'jade');
app.use(express.static(__dirname + "/views"));
app.use(bodyParser.json());
app.get('/list', function(req, res){
	db.list.find(function(err, docs){
		res.json(docs);
	});
});
app.post('/list', function(req, res){
	db.list.insert(req.body, function(err,doc){
		res.json(doc);
	});
});
app.delete('/list/:id', function(req, res){
	var id  = req.params.id;
	console.log(id);
	db.list.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
		
	});

})
app.listen(3000);
console.log("server running on 3000");