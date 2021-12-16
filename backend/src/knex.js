const knex = require('knex')

module.exports = function (app) {
   const { client, connection } = app.get('dbConfig')
   const db = knex({ client, connection })

   app.set('knexClient', db)
};
