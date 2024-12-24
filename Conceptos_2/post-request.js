// montamos el router
let express = require('express')
let router = express.Router()


// middlewares static para servir archivos de las rutas staticas
router.use(express.static(__dirname + "/public")) 
router.use(express.static(__dirname + "/views")) 



const formController =
{
    showForm: (req, res) => 
    {
        const absolutePath = __dirname + '/public/views'
        res.sendFile(absolutePath)
    }
}



module.exports = router