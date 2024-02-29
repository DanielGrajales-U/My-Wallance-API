const { errorHandlers } = require('../handlers/errorHandlers');
const transactionService = require('../../../database/services/transaction.service');

// Controlador para crear una nueva transacción
const createTransaction = async (req, res) => {
  try {
    // Extraer el ID del usuario del middleware ensureToken
    const userId = req.user._id;
    // Datos de la transacción desde el cuerpo de la solicitud
    const { amount, description } = req.body;

    // Crear la transacción utilizando el ID del usuario
    const newTransaction = await transactionService.createTransaction(userId, amount, description);
    res.status(200).json({
      success: true,
      message: 'Transaction created successfully.',
      data: newTransaction,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

// Controlador para obtener el historial de transacciones de un usuario
const getTransactionHistory = async (req, res) => {
  try {
    // Extraer el ID del usuario del middleware ensureToken
    const userId = req.user._id;

    // Obtener el historial de transacciones para el usuario
    const transactionHistory = await transactionService.getTransactionHistory(userId);
    console.log(transactionHistory)
    res.status(200).json({
      success: true,
      message: 'Transaction history retrieved successfully.',
      data: transactionHistory,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

module.exports = {
  createTransaction,
  getTransactionHistory,
};
