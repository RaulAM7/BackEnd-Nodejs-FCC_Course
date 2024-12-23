// building express router object
const express = require('express')
const router = express.Router()


router.get("/query-example", (req, res) => {
    res.send('Esta ruta funciona')
})


module.exports = router