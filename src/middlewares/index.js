const validate = require('./validator');
const authMiddleware = require('./auth');
module.exports = {
    validate,
    authMiddleware
};