//req => middleware => res
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    //must call next or send back response. if not the browser gets stuck and we see a spinner(loading)
    // res.send('Testing')
    next()
}

module.exports = logger