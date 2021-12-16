/* eslint-disable no-console */

module.exports = async function(app, tableName) {
   try {
      const db = app.get('knexClient')
   
      await db.schema.createTable(tableName, table => {
         table.increments('id')
         table.timestamp('created_at').defaultTo(db.fn.now()) // ex: 2020-11-23 06:32:48.524937+01
         table.text('text').notNull()
      })
      console.log(`Created ${tableName} table`)
   } catch(err) {
      console.log(`Error creating ${tableName} table: ${err.toString()}`)
   }
}
