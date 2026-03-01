const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
//req => middleware => res
//all app.uses and middleware functions need to be at the top then the route methods

//if you remove the path it will be applied to all route functions
// app.use("/api",logger)

// 1.use vs route
// 2. options - our own / express / third party

//execute many middleware functions in succession. Executed in the order they are in the array
// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', [logger, authorize], (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('server listening on port 5000....')
})