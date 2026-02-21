const { readFile } = require('fs')
const path = require('path')


console.log('started a first task')
//CHECK FILE PATH!!!!
readFile(path.join(__dirname, '../content/first.txt'), 'utf8', (err, result) => {
  if(err){
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})

console.log('starting next task')