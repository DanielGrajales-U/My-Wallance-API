const jwt = require('jsonwebtoken');
const { errorHandlers } = require('../handlers/errorHandlers');
const { getUserAuth } = require('../../../database/services/user.service');

const authUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await getUserAuth(email, password);
        if (!user) {
            return res.status(409).json(errorHandlers().functionNotFound("User does not exist."));
        }
        if (!user.confirmPwd) {
            return res.status(403).json(errorHandlers().functionNotFound("Incorrect password."));
        }

        const tokenData = {
            id: user._id,
            userName: user.userName,
            email: user.email,
            history: user.history // Cambio: Devolvemos el historial en lugar de los tableros
        };

        const token = jwt.sign(tokenData, 'my_secret_key', { expiresIn: '24h' });
        res.status(200).json({
            success: true,
            message: "User logged in successfully.",
            data: tokenData,
            token
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(errorHandlers().internalErrorServer());
    }
};

module.exports = {
    authUser,
};