const joi = require('joi');
//validation for create user
const createUser = joi.object({
    id: joi.number().required(),
    firstName: joi.string().required(),
    middleName: joi.string().optional(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    age: joi.number().min(12).max(120)
});

//validation for update user
const updateUser = joi.object({
    id: joi.number().required(),
    firstName: joi.string().required(),
    middleName: joi.string().optional(),
    lastName: joi.string().required(),
    age: joi.number().min(12).max(120)
});

//export the validatoins
module.exports = {
    createUser,
    updateUser
};