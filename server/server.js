//library
var express = require('express');
var bodyParser = require('body-parser');

//local import
var {mongoose} =require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

//Route POST
app.post('/todos',(req,res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	},(e) => {
		res.status(400).send(e);
	});
});

//Route GET
app.get('/todos',(req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	},(e) => {
		res.status(400).send(e);
	});
});


app.listen(3000, () => {
	console.log('Strat on port 300');
});

module.exports ={app};