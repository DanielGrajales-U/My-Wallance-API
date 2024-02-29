const { errorHandlers } = require('../handlers/errorHandlers');
const { getInfoUser, getUser } = require('../../../database/services/user.service');

const getInfUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getInfoUser(id);
    if (!user) {
      return res.status(404).json(errorHandlers().functionNotFound('User does not exist.'));
    }

    res.status(200).json({
      success: true,
      message: 'User found successfully.',
      data: {
        user,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getUser();
    if (!users || users.length === 0) {
      return res.status(404).json(errorHandlers().functionNotFound('No users found.'));
    }

    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully.',
      data: {
        users,
      },
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(errorHandlers().internalErrorServer());
  }
};

module.exports = {
  getInfUser,
  getUsers,
};
