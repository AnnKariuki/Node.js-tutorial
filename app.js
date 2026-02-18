// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac you would probably have to use sudo and authenticate)

// package.json - manifest file (stores important info about project/package)
//3 ways to create the package.json file
// 1. manual approach (create pachake.json in the root, create properties etc)
// 2. npm init (step by step, press enter to skip) (init short for initialize)
// 3. npm init -y (everything default y flag)

//Use `npm install <pkg>` afterwards to install a package and
//save it as a dependency in the package.json file.

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

function flattenDeep(arr) {
  if (arr.length === 0) {
    return [];
  }

  const first = arr[0];
  const rest = arr.slice(1);

  if (Array.isArray(first)) {
    return flattenDeep(first).concat(flattenDeep(rest));
  } else {
    return [first].concat(flattenDeep(rest));
  }
}

const newItems2 = flattenDeep(items);
console.log(newItems2);