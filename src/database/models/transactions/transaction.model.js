const mongoose = require('mongoose')
const pagination = require('mongoose-paginate-v2')

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
transactionSchema.plugin(pagination)
module.exports = mongoose.model('Transaction', transactionSchema, 'transactions')