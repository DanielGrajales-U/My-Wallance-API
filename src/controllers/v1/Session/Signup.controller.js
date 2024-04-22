const { errorHandlers } = require('../handlers/errorHandlers');
const { verifyExistUser, createUser } = require('../../../database/services/user.service');

const registerUser = async (req, res) => {
  const { userName, password, email } = req.body;
  try {
    const existingUser = await verifyExistUser(email);
    
    if (existingUser) {
      return res.status(409).json(errorHandlers().dataAlreadyExist('User already exists.'));
    }

    const userId = await createUser({ userName, password, email });
    res.status(200).json({
      success: true,
      message: 'User created successfully.',
      data: {
        userId,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

module.exports = {
  registerUser,
};
