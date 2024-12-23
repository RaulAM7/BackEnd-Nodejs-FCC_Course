/*
----------- .ENV FILE
*/

let dotenv = require('dotenv').config()
console.log(process.env.MESSAGE_STYLE)

/*
----------- EXPRESS APP OBJECT
*/
let express = require('express')
let app = express()

/*
----------- DEPENDENCIES
*/


/*
----------- MIDDLEWARE
*/
app.use((req, res, next) => {
    console.log('Alright, alright, alright')
    next()
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}:${req.socket.localPort}`)
    if (req.socket.localPort === 3000)
    {
        console.log('Estamos en casita en el puerto 3000')
    }
    next()
})


app.use('/public', express.static(__dirname + "/public"))

/*
----------- ROUTES
*/

app.get("/", (req,res) => {
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", (req, res) => {
    let message = 'Hello json'
    if (process.env.MESSAGE_STYLE === 'uppercase')
    {
        message = message.toUpperCase()
    }
    else
    {
        message = message.toLowerCase()
    }
    res.json({message: message})
})


app.get("/now", (req, res, next) => {
    req.time = new Date().toString()
    next()
    }, (req, res) => {
        res.json({time: req.time})
    }
)





module.exports = app
