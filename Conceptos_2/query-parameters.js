// building express router object
const express = require('express')
const router = express.Router()


router.get("/query-example", (req, res) => {
    res.send('Esta ruta funciona')
})


// Estructura de una URL con query params
// /route?param1key=param1value&param2key=param2value 


// Ejemplos de rutas con query params

// /products = {productId, catergory}

router.get("/product", (req, res) => {
    const {productId, category} = req.query
    res.json({ProductID: productId, Category: category})
})

router.get("/search", (req, res) => {
    const {busqueda} = req.query
    res.json({Búsqueda: busqueda})
})

router.get("/page", (req, res) => {
    const {number, size} = req.query
    res.json({ Number: number, Size: size})
})



module.exports = router