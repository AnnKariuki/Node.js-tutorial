//remember module.exports is an object thus we can add new properties(items and singlePerson) 
// to the object and assign them values
//console.log(module.exports); -> { items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }
module.exports.items = ['item1', 'item2'];
const person = {
    name: 'bob'
};

module.exports.singlePerson = person;
// console.log(module);
// console.log(module.exports);