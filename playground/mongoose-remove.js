const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//deleteall
// Todo.remove({}).then((result) =>{
// 	console.log(result);
// });


// Todo.findOneAndRemove()
Todo.findByIdAndRemove('59d8f8a24138361bdde2d8bb').then((todo) => {
	console.log(todo);
});
