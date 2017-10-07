//library
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} =require('mongodb');

//local import
var {mongoose} =require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/User');

var app = express();
const port = process.env.PORT || 3000;

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

//GET /todo/{id}
app.get('/todos/:id', (req,res) => {
	var id = req.params.id;

  //valid id using isValid
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) =>{
		res.status(400).send();
	});

});


app.listen(port, () => {
	console.log(`Strat on port ${port}`);
});

module.exports ={app};