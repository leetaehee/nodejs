require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'nodebirdTest',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'nodebird',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false,
    },
};