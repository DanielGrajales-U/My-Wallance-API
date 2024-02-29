const { Router }= require('express')
const controller = require('../../../controllers/v1/')
const validateUser = require('../../../middlewares/validateUser')

const signup = Router() 

signup.post('/signup',validateUser, controller.registerUser)

module.exports = signup

