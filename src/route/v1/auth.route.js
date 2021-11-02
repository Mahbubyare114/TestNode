const express = require('express');
const route = express.Router();
//import the controller for authcontrol
const { authController } = require('../../controller');
const { authValidation } = require('../../validations');
let { validate } = require('../../middlewares');

route.post('/login', validate(authValidation.login), authController.login) //use the imported controller for login
route.post('/signup', authController.signup) //use the imported controller for signup

module.exports = route