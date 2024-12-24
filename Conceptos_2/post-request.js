// montamos el router
let express = require('express')
let router = express.Router()



router.use(express.urlencoded({extended: false}))


const formController =
{
    showForm: (req, res) => 
    {
        const absolutePath = process.cwd() + '/views/form.html'
        res.sendFile(absolutePath)
    },
    postForm: (req, res) =>
    {
        console.log(`Este es el Request Body:`)
        console.log(req.body)
        const {first, last} = req.body
        if( !first || !last)
        {
            return res.status(400).json({error: 'faltan campos'})
        }
        res.json({name: `${first} ${last}`})
    }
}
router.get("/form", formController.showForm)
router.post("/form", formController.postForm)


module.exports = router