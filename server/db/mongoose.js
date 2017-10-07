var mongoose = require('mongoose');
let db ={
	localhost: 'mongodb://localhost:27017/TodoApp',
	// mlab: 'mongodb://heroku_83r7z0qp:al8dqo2bhubjanufep8uupf87j@ds113785.mlab.com:13785/heroku_83r7z0qp'
}
mongoose.Promise = global.Promise;
mongoose.connect(db.mlab || db.localhost);

module.exports ={mongoose};