// montamos el router
let express = require('express')
let router = express.Router()





const formController =
{
    showForm: (req, res) => 
    {
        const absolutePath = process.cwd() + '/views/form.html'
        res.sendFile(absolutePath)
    }
}
router.get("/form", formController.showForm)


module.exports = router