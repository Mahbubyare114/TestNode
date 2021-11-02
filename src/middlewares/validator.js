let status = require('http-status');
const { ApiError } = require('../payload/ApiError');

const validate = (schema) => (req, res, next) => {
    let { value, error } = schema.validate(req.body);
    if (error) {
        let messages = error.details[0].message
        res.status(status.BAD_REQUEST).send(new ApiError(status.BAD_REQUEST, messages));
    }
    next();
};
module.exports = validate;