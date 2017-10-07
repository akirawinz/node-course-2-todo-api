var env = process.env.NODE_ENV || 'development';
console.log('env ****',env);

if(env === 'development'){
	process.env.PORT = 3000;
	process.env.MOGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env === 'test'){
	process.env.PORT = 3000;
	process.env.MOGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}else if(env === 'production'){
	process.env.MOGODB_URI = 'mongodb://heroku_83r7z0qp:al8dqo2bhubjanufep8uupf87j@ds113785.mlab.com:13785/heroku_83r7z0qp';
}


