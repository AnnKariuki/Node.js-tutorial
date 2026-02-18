//local 
const secret = 'SUPER SECRET';

//share with the rest of our application
const john = 'john';
const peter = 'peter';

// console.log(module)
//make the values available to other files by putting them in the exports object of module
module.exports = {john, peter};