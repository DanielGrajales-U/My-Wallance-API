const { Router } = require('express')
const controller = require('../../../controllers/v1')
const validateTransaction = require('../../../middlewares/validateTransaction')

const transaction = Router()

transaction.post('/createtransaction', validateTransaction, controller.createTransaction)
transaction.get('/history', controller.getTransactionHistory)

module.exports = transaction
