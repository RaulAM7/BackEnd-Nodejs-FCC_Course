// building express router object
const express = require('express')
const router = express.Router()


router.get("/query-example", (req, res) => {
    res.send('Esta ruta funciona')
})


// Estructura de una URL con query params
// /route?param1key=param1value&param2key=param2value 






module.exports = router