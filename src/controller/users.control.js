/**
 * middlewares
 */
const status = require('http-status');
const logger = require('../config/logger');
const { userService } = require('../services');
const{ApiError}=require('../payload/ApiError');
const{ApiResponse}=require('../payload/ApiResponse');
//get all users
getAllUsers = (req, res) => {
    let users = userService.getAllUsers();
    res.status(status.OK).send(new ApiResponse(status.OK,message="OK",users));
};

//get user by ID
getUserById = (req, res) => {
    let userId = req.params.userId;
    if (userService.isIdExist(userId)) {
        let userfilter = userService.getUserById(userId);
        return res.status(status.OK).send(new ApiResponse(status.OK,message="OK", userfilter));
    }
    return res.status(status.NOT_FOUND).
    send(new ApiError(status.NOT_FOUND,message= "This user does not exist"));
};

//create user
create = (req, res) => {
    logger.info('calling create user');
    let user = req.body;
    if (userService.isEmailExist(user.email)) {
        return res.status(status.NOT_ACCEPTABLE)
        .send(new ApiError(status.NOT_ACCEPTABLE, message= 'User already exist'));
    }
    let createUserStatus = userService.createUser(user);
    if (createUserStatus) {
        return res.status(status.OK).send(new ApiResponse(status.OK,message ='user is created'));
    }
    return res.status(status.OK)
    .send(new ApiError(status.OK,message= 'something went wrong'));
};

//update user
updateUser = (req, res) => {
    let user = req.body.id;
    if (userService.isIdExist(user)) {
        let userUpdated = userService.updateUser(req.body);
        res.status(status.OK)
            .send(new ApiResponse(status.OK,message= "The User has been updated"));
    }
    res.status(status.NOT_FOUND)
        .send(new ApiError(status.NOT_FOUND,message= 'This user does not exist'));
};

//delete user
deleteUser = (req, res) => {
    let user = req.params.userId;
    if (userService.isIdExist(user)) {
        let userfilter = userService.deleteUser(user);
        return res.status(status.OK)
        .send(new ApiResponse(status.OK,message= `user with id: ${user} is deleted`));
    }
    return res.status(status.NOT_FOUND)
    .send(new ApiError(status.NOT_FOUND, message= "this user is not exist"));
};

/**
 * export controllers
 */
module.exports = {
    getAllUsers,
    getUserById,
    create,
    updateUser,
    deleteUser
};