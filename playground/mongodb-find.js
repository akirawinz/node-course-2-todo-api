// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59d33949b99b0234fcfd1a86')

	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log('unable to fetch totos',err);
	// });

	//count

	// 	db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log('unable to fetch totos',err);
	// });


	db.collection('Users').find({name : 'Win'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('unable to fetch totos',err);
	});


	// db.close();
});