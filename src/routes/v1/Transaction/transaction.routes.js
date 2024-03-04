const { Router } = require('express')
const controller = require('../../../controllers/v1')
const validateTransaction = require('../../../middlewares/validateTransaction')

const transaction = Router()

transaction.post('/create', validateTransaction, controller.createTransaction)
transaction.put('/edit/:transactionId', validateTransaction, controller.editTransaction)
transaction.delete('/delete/:transactionId', controller.deleteTransaction)
transaction.get('/history', controller.getTransactionHistory)

module.exports = transaction
