// Modules
// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum - share what only we want)
const names = require('./04-names');
//you could destructure names cause names = { john: 'john', peter: 'peter' }
//const {john, peter} = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

//reqire loads and executes the file and that is why the function runs printing 15
//addValues runs not because it was exported but because the entire file is executed when required
require('./07-mind-grenade');

// console.log(data);
// console.log(names)
sayHi('susan');
//property name
sayHi(names.john);
sayHi(names.peter);