const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59d5d24470f4b7d564dcf74a';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('id not found');
// 	}
// 	console.log('Todo By id',todo);
// }).catch((e) => console.log(e));


User.findById('59d47558b33756e93e63f256').then((user) =>{
	if(!user){
		return console.log('unable to find user')
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
})





