const errorCodes = require("../enums/error_codes.enum")
const regexProvider = require("../regex/regex")

const validateTransaction = (req, res, next) => {
    const { amount, description } = req.body;

    // Verificar si se proporcionó el monto
    if (typeof amount !== 'number') {
        return res.status(400).json({
            success: false,
            message: 'Invalid amount data',
            error: errorCodes.INVALID_REQUEST_BODY
        });
    }

    // Verificar si se proporcionó la descripción
    if (!description) {
        return res.status(400).json({
            success: false,
            message: 'Missing description data',
            error: errorCodes.INVALID_REQUEST_BODY
        });
    }

    // Verificar longitud de la descripción
    if (description.length < 3 || description.length > 50) {
        return res.status(400).json({
            success: false,
            message: 'Description must be between 3 and 50 characters',
            error: errorCodes.INVALID_REQUEST_BODY
        });
    }

    next();
};


module.exports = validateTransaction