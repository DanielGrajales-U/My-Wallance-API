const mongoose = require('mongoose')
const regexProvider = require('../../../regex/regex')

const transactionSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    description:{
        type:String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', transactionSchema, 'transactions')