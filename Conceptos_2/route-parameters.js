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

const routeUserBooks = '/user/:userId?/book/:bookId?'
const handler = (req, res) => {
    if (req.params.userId && req.params.bookId)
    {
        console.log('Se proporcionó User ID y Book ID')
        console.log(req.params)
        console.log(`Este es el UserID: ${req.params.userId}`)
        console.log(`Este es el BookID: ${req.params.bookId}`)
        res.send(req.params)            
    }
    if (req.params.userId && !req.params.bookId)
    {
            console.log('Se proporcionó User ID pero NO Book ID')
            console.log(req.params)
            console.log(`Este es el UserID: ${req.params.userId}`)
            console.log(`Este es el BookID: ${req.params.bookId}`)
            res.send(req.params)            
    }
    if (!req.params.userId && req.params.bookId)
    {
            console.log('NO se proporcionó User ID pero SI Book ID')
            console.log(req.params)
            console.log(`Este es el UserID: ${req.params.userId}`)
            console.log(`Este es el BookID: ${req.params.bookId}`)
            res.send(req.params)            
    }
    if (!req.params.userId && !req.params.bookId)
    {
                console.log('NO se proporcionó User ID y NO Book ID')
                console.log(req.params)
                console.log(`Este es el UserID: ${req.params.userId}`)
                console.log(`Este es el BookID: ${req.params.bookId}`)
                res.send(req.params)            
    }
}


router.get(routeUserBooks, handler)




module.exports = router