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
        if (!userId || orderId)
        {
            return res.status(400).json({error: 'faltan argumentos'})
        }
        res.json({UserID: userId, OrderID: orderId})
    },
    getOneUserProduct: (req, res) => {
        const {userId} = req.params
        const {category, minPrice, maxPrice} = req.query
        
        if (!userId || !category || !minPrice || !maxPrice)
        {
            return res.status(400).json({error: 'faltan argumentos'})
        }
        res.json({UserID: userId, category: category, priceRange: `${minPrice} - ${maxPrice}`})

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
        
        if (!category || !minPrice || !maxPrice)
        {
            return res.status(400).json({error: 'faltan argumentos'})
        }

        res.json({category: category, priceRange: `${minPrice} - ${maxPrice}`})
    }
}

/* ### **Extra: Combina Ambos**
Crea una ruta `/user/:userId/products` que acepte un ID de usuario en el path 
y parámetros de filtro en la query string (`category`, `minPrice`, `maxPrice`).

Lo he añadido como un nuevo handler en el userController y simplemente añado una nueva ruta al final del todo

*/


router.get("/user/:userId/order/:orderId", userController.getOneUserOrder)
router.get("/product", productController.getOneProductInfo)
router.get("/user/:userId/products", userController.getOneUserProduct)





module.exports = router