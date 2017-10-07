var mongoose = require('mongoose');
let db ={
	localhost: 'mongodb://localhost:27017/TodoApp',
	mlab: 'mongodb://akwins123:passwordis12@ds113505.mlab.com:13505/heroku_0lhms2pw'
}
mongoose.Promise = global.Promise;
mongoose.connect(db.mlab || db.localhost);

module.exports ={mongoose};