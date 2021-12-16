
const service = require('feathers-knex');
const memory = require('feathers-memory')


module.exports = function(app) {
   const db = app.get('knexClient')
   let name = 'notes'

   app.use(name, service({
      Model: db,
      name,
      paginate: false,
   }))
   // app.use('notes', memory())   
}
