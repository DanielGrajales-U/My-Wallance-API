const { authUser } = require('./Session/Login.controller');
const { registerUser } = require('./Session/Signup.controller');
const {
  createTransaction,
  getTransactionHistory,
} = require('./transaccion/transaction.controller');
const { getUsers } = require('./user/user.controller');

module.exports = {
  getUsers,
  authUser,
  registerUser,
  createTransaction,
  getTransactionHistory,
};
