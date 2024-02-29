const { Router }= require('express')
const controller = require('../../../controllers/v1/')

const login = Router() 

login.post('/login', controller.authUser)

module.exports = login

