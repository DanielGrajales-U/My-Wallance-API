require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
require('./database/conection')

const routes = require('./routes/v1/')

const corsOptions = {
    //origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type,Authorization',
  };
  
app.use(cors(corsOptions))
app.use(express.json())
app.use('/wallance/api/v1', routes)

app.get('/', (req, res) => {
    res.send('Welcom to your Wallance')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log('Todo listo señor Grajales 🔥🔥 on port: ', port)
})