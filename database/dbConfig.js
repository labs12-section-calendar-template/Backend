const knex = require('knex');
const knexConfig = require('../knexfile');
const dbenv = process.env.DB_ENV || 'development';
module.exports = knex(knexConfig[dbenv]);