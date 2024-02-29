const { Router }= require('express')
const controller = require('../../controllers/v1/')

const user = Router() 

user.get('/', controller.getUsers)

module.exports = user