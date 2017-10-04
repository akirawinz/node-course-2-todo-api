var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

// var user = new User({
// 	email: '    winwin@eexample.com'
// });


// user.save().then((doc) =>{
// 	console.log('user saved', doc);
// },(e) =>{
// 	console.log('unable to save', e);

// });

// module.exports = {User};
