const winston = require('winston');
//create your own format
const { combine, timestamp, label, printf } = winston.format;
const myformat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}:${message}`;
});

// create logger
const logger = winston.createLogger({
    format: combine(
        winston.format.colorize(),
        label({ label: process.env.MYPROJECT }),
        timestamp(),
        myformat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combine.log' }),
    ],
});

module.exports = logger;