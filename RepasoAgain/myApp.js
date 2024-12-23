// ---------------DEPENDENCIAS-------------------------

// Cargamos el .env file con dotenv
let dotenv = require('dotenv').config()
console.log('MESSAGE_STYLE:', process.env.MESSAGE_STYLE);

// Creamos el objeto express app object
let express = require('express')
let app = express() 

// Middleware dependencies
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const jwt = require('jsonwebtoken')
const rateLImit = require('express-rate-limit')
const compression = require("compression")
const multer = require('multer')
const upload = multer({ dest: 'uploads/'})


// ---------------DEPENDENCIAS - END-------------------------
/*
// Class 1 - Meet the Node console
console.log('Hello world')

console.log('this is a change using nodemon')
console.log('this is antoher change using nodemon')
*/

// ---------------MIDDLEWARE - START-------------------------

// Clase 4 -> Usando middleware antes de ver qué es el middleware
// MIDDLEWARE BLOCK
// Montamos middleware para servir archivos estaticos desde el directorio /public

// Globales App
const middlewareChecker = ((req, res, next) => {
    console.log('Se ejecutan los middleware')
    next()
})
app.use(middlewareChecker)

// Middleware hecho por nosotros
// Logger

const loggerMiddleware = ((req, res, next) => {
    req.time = new Date().toISOString()
    let log_message = `[TIME: ${req.time}] METHOD: ${req.method} ROUTE: ${req.path} - IP: ${req.ip}`
    console.log(log_message)
    next()
})
 
app.use(loggerMiddleware)

// Middlewares Static para servir archivos estaticos
app.use(express.static(__dirname + "/public")) 
app.use(express.static(__dirname + "/views")) // Le decimos a la app que en cualquier momento puede usar los archivos de ambos directorios 



// MIDDLEWARE ROOT LEVEL más usados

// express.json() -> Analiza cuerpos JSON en las solicitudes y los convierte ne un objeto accesible desde req.body
app.use(express.json())

// express.urlencoded() -> Analiza datos enviados mediante formularios HTML y los convierte en un objeto accesible desde req.body
app.use(express.urlencoded({extended: true}))

// bodyparser -> package to parse de data coming from POST requests
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())

// cookie-parser -> Analiza cookies de las solicitudes y las convierte ne un objeto accesible desde req.cookies
app.use(cookieParser())

// cors -> Habilita CORS (Cross-Origin Resource Sharing) - Permite que tu API sea accesible desde dominios externos
app.use(cors())

// morgan -> Middleware para registro de solicitudes en un formato predefinido
app.use(morgan('dev'))

// helmet -> Agrega encabezados HTTP para mejorar la seguridad de tu aplicación
app.use(helmet())

// compresion -> Comprime las respuestas HTTP para mejorar la velocidad
app.use(compression())



// middleware logger auxiliar printeador del body de la request
const printRequestBody = (req, res, next) => {
    console.log(`Este es el request body => ${JSON.stringify(req.body)}`)
    next()
}
app.use(printRequestBody)


// middleware personalizado para manejo de errores
const middlewareErrorChecker = (err, req, res, next) => {
    console.error(`Este es el middleware ErrorChecker: ${err.stack}`)
    res.status(500).send('ALGO SALÓ MAL')
    next()
}
app.use(middlewareErrorChecker)

// MIDDLEWARES AVANZADOS
/* JWT Auth - Middleware de Autenticacion y Autorizacion 
app.use((req, res, next) => {
    const token = req.headers['authorization']
    if (!token) return res.status(403).send('ERROR: NO AUTHORIZATION')
    
    jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
        if (err) return res.status(403).send('ERROR: TOKEN NO VALIDO')
    })

    req.user = decoded
    next()
})
*/

// EXPRESS RATE LIMIT - Middleware de limitacion de solicitudes, para evitar abusos o ataques por fuerza bruta
const limiter = rateLImit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Maximo de 100 solicitudes por IP
})
//app.use(limiter)


// ---------------MIDDLEWARE - END-------------------------

// ---------------ROUTES - CONTROLLERS - START-------------------------

// Route specific
app.use("/public", express.static(__dirname + "/public")) // Le decimos a la app que puede la ruta /public usar los archivos del directorio /public



// Class 2 - Start a working Express server
app.get("/", (req, res)=> {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

// Clase 4 - Serving json on a route
app.get("/json", (req, res) => 
{
    let messageRoute = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") 
    {
        messageRoute = messageRoute.toUpperCase()
    } else 
    {
        messageRoute = messageRoute.toLowerCase()
    }
    res.json( {message: messageRoute} )
})

// Class 8 - Middleware chaining on a route
app.get("/now", (req, res, next) => {
    req.time = new Date().toString()
    next()
    }, (req, res) => {
        console.log(req.time)
        res.send(req.time)
    }
)


// Class 3 - Route handlers responses types
app.get("/send-1", (req, res) => {
    res.send('Esto es un texto mandado por .send')
})
app.get("/send-2", (req, res ) => {
    res.send('<h1>This is an h1 sent by the .send method of the handler of this route</h1>')
})
app.get("/json-1", (req, res)=> {
    res.json( {"name": "Raul"} )
})
app.get("/sendFile-1", (req, res) => {
    const filePath = __dirname + "/views/index.html"
    res.sendFile(filePath)
})
app.get("/redirect", (req, res) => {
    res.redirect("/redirected")
})
app.get("/redirected", (req, res) => {
    res.send("You have been redirected")
})

// Class 10 Route Request Params 

// GET /:word/echo

app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word })
})


// EJEMPLO DE RUTA POST

app.post("/name", (req, res) => {
    const {first, last} = req.query
    res.json({name: `${first} ${last}`})
})




// ---------------ROUTES - CONTROLLERS - END-------------------------



module.exports = app






