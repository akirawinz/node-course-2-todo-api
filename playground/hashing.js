const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err,salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});
var hasedPassword = '$2a$10$ACDMPOiQ8p3bwl7NMqx4g.BOPTlmTABHtBp2sTvMrCJwGIuxSTkpG';
bcrypt.compare('123',hasedPassword,(err,res) => {
	console.log(res);
});
// var data = {
// 	id: 10
// };

// var token = jwt.sign(data, 'secreat123');
// console.log(token);

// var decoded = jwt.verify(token,'secreat123');
// console.log('decoded',decoded);
// var message = 'I am User number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`HAS: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
// 	console.log('data was not change');
// }else{
// 	console.log('data change DONT TRUST');
// }

