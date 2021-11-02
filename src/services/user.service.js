//import logger
const logger = require('../config/logger');
//import the user model
const { userModel } = require('../modal');

const isEmailExist = (email) => {
    if (userModel.isEmailExist(email)) {
        return true;
    }
    return false;
};

const isIdExist = (id) => {
    if (userModel.isIdExist(id).length) {
        return true;
    } else {
        return false;
    }
};

const getAllUsers = () => {
    return userModel.getusers();
};

const getUserById = (id) => {
    let userStatus = userModel.getuser(id)
    return userStatus;
};


const createUser = (user) => {
    logger.info('create user');
    let newUser = userModel.create(user);
    return newUser;
};

const updateUser = (id) => {
    let userUpdate = userModel.updateUser(id);
    return userUpdate;
};

const deleteUser = (id) => {
    logger.info('delete user');
    return userModel.deleteUser(id);
};

module.exports = {
    isEmailExist,
    isIdExist,
    updateUser,
    createUser,
    getAllUsers,
    getUserById,
    deleteUser
};