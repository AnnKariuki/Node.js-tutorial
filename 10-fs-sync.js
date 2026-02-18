const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

//if the file does not exist node will create one. If it exists node will overwrite the value in there
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'});
console.log('done with this task');
console.log('starting the next one');
// console.log(first, second);

