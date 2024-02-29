const Transaction = require('../models/transactions/transaction.model');
const User = require('../models/user/userModel');

// Crear una nueva transacción
const createTransaction = async (userId, amount, description) => {
    try {
      // Verificar que el usuario exista
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
  
      // Crear la transacción
      const newTransaction = new Transaction({
        userId,
        amount,
        description
      });
      await newTransaction.save();
  
      // Actualizar el saldo del usuario
      const updatedUser = await User.findByIdAndUpdate(userId, { $inc: { amount } });
      if (!updatedUser) {
        throw new Error('Failed to update user balance');
      }
  
      return newTransaction;
    } catch (error) {
      throw error;
    }
  };

// Obtener el historial de transacciones de un usuario
const getTransactionHistory = async (userId) => {
  try {
    // Obtener el historial de transacciones del usuario
    const transactions = await Transaction.find({ userId: userId });
    return transactions;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTransaction,
  getTransactionHistory
}
