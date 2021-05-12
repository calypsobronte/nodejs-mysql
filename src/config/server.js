const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const bcryptjs = require('bcryptjs')
const session = require('express-session')


const app = express()// initial serve

//config
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../app/views'))

// config recibir la info de form
app.use(express.urlencoded({extended:false}))
app.use(express.json())

dotenv.config({path:path.join(__dirname, '../env/.env')}) // config variable entorno

app.use('/resorces', express.static(path.join(__dirname, '../public')))

//config manejo session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

module.exports = app