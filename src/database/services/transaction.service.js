const { errorHandlers } = require('controllers/v1/handlers/errorHandlers');
const Transaction = require('../models/transactions/transaction.model');
const User = require('../models/user/userModel');

// Crear una nueva transacción
const createTransaction = async (userId, amount, description) => {
  try {
    // Verificar que el usuario exista
    const user = await User.findById(userId);
    if (!user) {
      return res.status(403).json(errorHandlers().insufficientPermissions("Forbidden"));
    }

    const newTransaction = new Transaction({
      userId,
      amount,
      description,
    });
    await newTransaction.save();

    const updatedUser = await User.findByIdAndUpdate(userId, { $inc: { amount } });
    if (!updatedUser) {
      throw new Error('Failed to update user balance');
    }

    return newTransaction;
  } catch (error) {
    throw error;
  }
};

const editTransaction = async (userId, transactionId, newData) => {
  try {
    const user = await User.findById(userId)
    
    if (!user) {
      return res.status(403).json(errorHandlers().insufficientPermissions("Forbidden"));
    }

    const transaction = await Transaction.findOne({ _id: transactionId, userId: userId });
    if (!transaction) {
      throw new Error('Transaction not found for the user.');
    }
    console.log(suma)
    user.amount += newData.amount;
    await user.save();

    // Actualizar la transacción con los nuevos datos
    const updatedTransaction = await Transaction.findByIdAndUpdate(transactionId, newData, {
      new: true,
    });
    return updatedTransaction;
  } catch (error) {
    throw error;
  }
};

const deleteTransaction = async (userId, transactionId) => {
  try {
    const user = await User.findById(userId)

    if (!user) {
      return res.status(403).json(errorHandlers().insufficientPermissions("Forbidden"));
    }
    
    const transaction = await Transaction.findOne({ _id: transactionId, userId: userId });
    console.log(transaction);
    if (!transaction) {
      throw new Error('Transaction not found for the user.');
    }

    user.amount -= transaction.amount;
    await user.save()

    await Transaction.findByIdAndDelete(transactionId);
  } catch (error) {
    throw error;
  }
};


//Opciones de paginacion

// Obtener el historial de transacciones de un usuario
const getTransactionHistory = async (userId, page = 1, limit = 6) => {

  try {
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: {date: -1}
    }
    // Obtener el historial de transacciones del usuario
    const transactions = await Transaction.paginate({ userId: userId }, options);
    return transactions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTransaction,
  getTransactionHistory,
  deleteTransaction,
  editTransaction
};
