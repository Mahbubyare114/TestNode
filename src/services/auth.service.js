const jwt = require('jsonwebtoken');
const { userModel } = require('../modal');
const logger = require('../config/logger');
const { ApiError } = require('../payload/ApiError');

const login = (email, password) => {
    logger.info("nfo the authentication is working");
    let user = userModel.getUserByEmailAndPassword(email, password);
    if (user.length <= 0) {
        throw new ApiError(401, "email or password does not exist");
    }
    //create token
    let token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '2m' });

    return {
        accessToken: token
    };
}


module.exports = {
    login
};