require('./../config/config');

//library
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} =require('mongodb');

//local import
var {mongoose} =require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

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
	}).catch((e) => {
		res.status(400).send(e);
	})
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

//delete
app.delete('/todos/:id',(req,res) =>{
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((todo) =>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.patch('/todos/:id',(req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body,['text','completed']);

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set : body}, {new: true}).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo});

	}).catch((e) => {
		res.status(400).sned();
	})


});

//POST /user
app.post('/users',(req,res) => {
	var body = _.pick(req.body,['email','password']);
	var user = new User(body);

	user.save().then(() => {
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth',token).send(user);
	}).catch((e) =>{
		res.status(400).send(e);
	})
});

// var authenticate = (req,res,next) =>{

// 	var token = req.header('x-auth');

// 	User.findByToken(token).then((user) => {
// 		if(!user){
// 			return Promise.reject();
// 		}
// 		req.user =user;
// 		req.token = token;
// 		next();
// 	}).catch((e) => {
// 		res.status(401).send();
// 	});
// };

app.get('/users/me',authenticate, (req,res) => {
	res.send(req.user);
});




app.listen(port, () => {
	console.log(`Strat on port ${port}`);
});

module.exports ={app};