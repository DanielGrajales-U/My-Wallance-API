const User = require('../models/user/userModel'); // Asumiendo que el modelo se ha actualizado y se llama "User"
const bcryptjs = require('bcryptjs');

const getUser = async () => {
    try {
        const response = await User.find({}).populate('history');
        return response;
    } catch (error) {
        throw error;
    }
};

const getInfoUser = async (id) => {
    try {
        const response = await User.findById(id).populate('history');
        return response;
    } catch (error) {
        throw error;
    }
};

const getUserAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return null; // El usuario no existe
        }
        
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        user.confirmPwd = isPasswordValid; // Establecer confirmPwd en true o false según la validación de la contraseña
        
        return user;
    } catch (error) {
        throw error;
    }
};

const verifyExistUser = async (email) => {
    try {
        const response = await User.findOne({ email });
        return response;
    } catch (error) {
        throw error;
    }
};

const createUser = async (data) => {
    try {
        const hashedPassword = await bcryptjs.hash(data.password, 10);
        const userData = { ...data, password: hashedPassword };
        const newUser = new User(userData);
        await newUser.save();
        return newUser._id;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUser,
    getInfoUser,
    getUserAuth,
    verifyExistUser,
    createUser
};
