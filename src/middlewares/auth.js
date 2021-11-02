const status = require('http-status');
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiError');
const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    // let authHeader = req.headers['x-access-token'];
    // let token = authHeader.split(' ')[1];
    let token = req.headers['x-access-token'];
    if (!token) {
        throw new ApiError(401, "Please enter a token to access users");
        // res.status(401).send("Please enter a token to access users");
    }
    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (response) next();
    throw new ApiError(401, "your token is expired, please logina again");

    // try {
    //     let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //     if (response) next()
    // } catch (err) {

    //     throw new ApiError(401, "your token is expired, please logina again");
    // }

};


module.exports = { auth };