// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59d462b4ce606126d5fba3a7')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((results) => {
	// 	console.log(results);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('59d33b5462e86635543039ff')
	}, {
		$set: {
			name: 'Win'
		},
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((results) => {
		console.log(results);
	})

	// db.close();
});