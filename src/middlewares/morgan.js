//import the logger
const logger = require('../config/logger');

//import the morgan 
const morgan = require('morgan');

//create morgan middleware
const morganMiddleware = morgan(
    "tiny", { stream: logger.stream.write }
);
module.exports = morganMiddleware;