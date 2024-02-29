const errorCodes = require("../enums/error_codes.enum")
const regexProvider = require("../regex/regex")

const validateUser = (req, res, next) => {
    const {userName, email, password} = req.body

    if(!userName || !email || !password){
        return res.status(400).json({
            success: false,
            message: 'Miss data (userName, email o password)',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(userName.length < 3 || userName.length > 15) {
        return res.status(400).json({
            success:false,
            message:'3 characters and a maximum of 15',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(!regexProvider.nameRegex.test(userName)){
        return res.status(400).json({
            success:false,
            message:'UserName invalid',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(!regexProvider.emailRegex.test(email)){
        return res.status(400).json({
            success:false,
            message:'Email invalid',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    if(password.length < 8) {
        return res.status(400).json({
            success:false,
            message:'8 characters minimum',
            error: errorCodes.INVALID_REQUEST_BODY
        })
    }

    next()
}

module.exports = validateUser