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

const productController = {
    getProduct: (req, res) => {
        const {productId, category} = req.query
        res.json({ProductID: productId, Category: category})
    } 
} 

const searchController = {
    getSearch: (req, res) => {
        const {busqueda} = req.query
        res.json({Búsqueda: busqueda})
    }
}

const pageController = {
    getPage: (req, res) => {
        const {number, size} = req.query
        res.json({ Number: number, Size: size})
    }
}

const nameController = {
    getName: (req, res) => {
        const {firstname, lastname} = req.query
        res.json({name: `${firstname} ${lastname}`})
    }
}



router.get("/product", pageController.getPage)
router.get("/search", searchController.getSearch)
router.get("/page", pageController.getPage)
router.get("/name", nameController.getName)


module.exports = router