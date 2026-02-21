const { readFile, writeFile } = require('fs');

// the callback is passed two arguments (err,data) where data is the contents of the file.
//readFile calls your callback and passes err and data to it when it finishes.
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        const second = data;
        //writeFile does not return a value it executes a callback function upon completion
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('done with this task');
            // console.log(data)
        });
    });
});

console.log('starting next task');