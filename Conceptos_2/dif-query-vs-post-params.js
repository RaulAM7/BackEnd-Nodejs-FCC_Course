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
router.get("/user/:userId/order/:orderId")


module.exports = router