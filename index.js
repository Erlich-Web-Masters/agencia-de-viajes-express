import express from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000

app.listen(port,host, () => console.log(`Example app listening on port ${port}!`))   

//Conectando a una base de datos
db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch( (err) => console.error('err'))

//middelware para pasar mi variable year
app.use( (req,res,next) => {
    const year = new Date()
    res.locals.yearActual = year.getFullYear()
    res.locals.title = 'Agencia de Viajes'
    next()
})

app.use(express.urlencoded(  {extended : true} ))

//mostrando las rutas
app.use('/', router)

//configurando el template engine
app.set('view engine', 'pug')

//configurando la carpeta de archivos estaticos
app.use(express.static('public') )
  