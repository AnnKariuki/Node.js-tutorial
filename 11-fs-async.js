const { readFile, writeFile } = require('fs');

// the callback is passed two arguments (err,data) where data is the conents of the file.
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
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('done with this task');
        });
    });
});

console.log('starting next task');