const { errorHandlers } = require('../handlers/errorHandlers');
const transactionService = require('../../../database/services/transaction.service');
const userModel = require('../../../database/models/user/userModel');

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

const editTransaction = async (req, res) => {
  try {
    // Extraer el ID del usuario del token
    const userId = req.user._id;
    // Extraer el ID de la transacción y los datos actualizados del cuerpo de la solicitud
    const { transactionId } = req.params;
    const newData = req.body;

    // Editar la transacción utilizando el ID del usuario y el ID de la transacción
    const updatedTransaction = await transactionService.editTransaction(
      userId,
      transactionId,
      newData
    );
    res.status(200).json({
      success: true,
      message: 'Transaction updated successfully.',
      data: updatedTransaction,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

const deleteTransaction = async (req, res) => {
  try {
    // Extraer el ID del usuario del token
    const userId = req.user._id;
    // Extraer el ID de la transacción del parámetro de la ruta
    const { transactionId } = req.params;

    // Eliminar la transacción utilizando el ID del usuario y el ID de la transacción
    await transactionService.deleteTransaction(userId, transactionId);
    res.status(200).json({
      success: true,
      message: 'Transaction deleted successfully.',
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

// Controlador para obtener el historial de transacciones de un usuario

const getTransactionHistory = async (req, res) => {
  try {
    const { page = 1 } = req.query;

    // Convertir los valores de page y limit a números enteros
    const pageNumber = parseInt(page);

    // Obtener el historial de transacciones paginado
    const transactionHistory = await transactionService.getTransactionHistory(req.user._id, pageNumber);

    res.status(200).json({
      success: true,
      message: 'Transaction history retrieved successfully.',
      data: transactionHistory,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};


module.exports = {
  createTransaction,
  editTransaction,
  deleteTransaction,
  getTransactionHistory,
};
