const express = require('express')
const authRoutes = require('./routes/auth.routes')
const db = require('./data/database')

const app = express()

app.use(authRoutes)
db.connectToDatabase() 
app.listen(5000)