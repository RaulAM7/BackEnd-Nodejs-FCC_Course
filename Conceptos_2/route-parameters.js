// building app object

const express = require('express')
const app = express()

// Middleware

const requestData = (req, res, next) => {
    console.log(`REQUEST DATA - [PATH: ${req.path}] [METHOD: ${req.method}] [IP: ${req.ip}]`)
    next()
}
app.use(requestData)

// Ejemplo de Route Parameter

app.get('/user/:userId/book/:bookId', (req, res) => {
    console.log('Abajo son los request parameters')
    console.log(req.params)
})




module.exports = app