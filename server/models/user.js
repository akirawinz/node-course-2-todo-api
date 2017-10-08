const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserScema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true,
		validate: {
			validator:validator.isEmail,
			message: '{VALUE} is not valid email'
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens : [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true

		}
	}]
});

UserScema.methods.toJSON = function () {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject,['_id','email']);
};

UserScema.methods.generateAuthToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc132').toString();

	user.tokens.push({access,token});

	return user.save().then(() =>{
		return token;
	});
};

UserScema.statics.findByToken = function (token) {
	var User = this;
	var decoded;

	try{
		decoded =  jwt.verify(token,'abc132');
	} catch (e) {

		return Promise.reject();
	}
	return User.findOne({
		_id: decoded._id,
		'tokens.token': token,
		'tokens.access': 'auth'
	});
};

UserScema.pre('save', function (next){
	var user = this;
	if (user.isModified('password')) {
		bcrypt.genSalt(10,(err,salt) =>{
			bcrypt.hash(user.password,salt,(err,hash) =>{
				user.password = hash;
				next();
			});
		});

	}else{
		next();
	}

});

var User = mongoose.model('User', UserScema);



module.exports = {User};
