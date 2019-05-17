// Update with your config settings.
const DBConnection = {
  host: 'heroku',
  database: 'user',
  username:'Zechy',
  password: 'pass'
}
const calendrDBConnection = process.env.DATABASE_URL || DBConnection

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/dev.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: calendrDBConnection,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
