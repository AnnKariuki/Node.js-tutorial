const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
//we can use async await to wait until promise is settled
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       else {
//         resolve(data);
//       }
//     })
//   })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))

const start = async () => {
  //wait for promise to resolve
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    //don't have a variable here cause write returns undefined
    await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'} )
    console.log(first, second) 
  } catch (error) {
    console.log(error)
  }
}

start() 