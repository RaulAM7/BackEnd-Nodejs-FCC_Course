// montamos router
let express = require('express')
let router = express.Router()


/*  ### **Ejercicio 1: Manejar Route Parameters**

Crea una ruta que reciba un ID de usuario y un ID de pedido en el path:

- Ruta: `/user/:userId/order/:orderId`
- Respuesta:
{ "userId": "123", "orderId": "456" }

*/

const userController = 
{
    getOneUserOrder: (req, res) => {
        const {userId, orderId} = req.params
        res.json({UserID: userId, OrderID: orderId})
    }
}



/* ### **Ejercicio 2: Manejar Query Parameters**

Crea una ruta `/products` que acepte query parameters para filtrar productos por categoría y rango de precios:
category=electronics&minPrice=100&maxPrice=500
*/

const productController = 
{
    getOneProductInfo: (req, res) => 
        {
        const {category, minPrice, maxPrice} = req.query
        res.json({category: category, priceRange: `${minPrice} - ${maxPrice}`})
    }
}



router.get("/user/:userId/order/:orderId", userController.getOneUserOrder)
router.get("/product", productController.getOneProductInfo)

module.exports = router