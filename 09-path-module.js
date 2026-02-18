const path = require('path');

console.log(path.sep);


const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

//Return the last portion of a path.
const base = path.basename(filePath);
console.log(base);

//create an absolute path (right to left)
const absolute = path.resolve(__dirname, 'content' ,'subfolder', 'test.txt');
console.log(absolute)