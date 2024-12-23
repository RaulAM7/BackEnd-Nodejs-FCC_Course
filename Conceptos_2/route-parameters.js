// building express router object

const express = require('express')
const router = express.Router()

// Middleware

const requestData = (req, res, next) => {
    console.log(`REQUEST DATA - [PATH: ${req.path}] [METHOD: ${req.method}] [IP: ${req.ip}]`)
    next()
}
router.use(requestData)

// Ejemplo de Route Parameter

const routeUserBooks = '/user/:userId/book/:bookId'
const handler = (req, res) => {
    console.log('Abajo son los request parameters')
    console.log(req.params)
    console.log(`Este es el UserID: ${req.params.userId}`)
    console.log(`Este es el BookID: ${req.params.bookId}`)
    res.send(req.params)
}
router.get(routeUserBooks, handler)




module.exports = router