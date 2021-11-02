const express = require('express');
// creating router
const route = express.Router();
//import the controller for users
const { usersController } = require('../../controller');

//import the validation
const { userValidation } = require('../../validations');

//import the middleware
const { validate } = require('../../middlewares');
const { authMiddleware } = require('../../middlewares')

route.get('/', authMiddleware.auth, usersController.getAllUsers);
route.get('/:userId', usersController.getUserById);
route.post('/create', validate(userValidation.createUser), usersController.create);
route.patch('/update', validate(userValidation.updateUser), usersController.updateUser);
route.delete('/:userId', usersController.deleteUser);

module.exports = route;