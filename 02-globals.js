// GLOBALS  - NO WINDOW !!!! - in js global variable live on the window but in nodejs there is no window

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed. server could sit on digital ocean, heroku

console.log(__dirname); //console available globally
setInterval(() => {
    console.log('hello world')
},1000);