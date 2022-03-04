require('dotenv').config()
const express = require('express');
const app = express()
const router = require('./routes/authRoutes');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

app.use(router)
app.use(bodyParser.urlencoded({extended:true}))

//port listening
app.listen(PORT,()=> console.log(`listening on port ${PORT}`))