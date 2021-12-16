
const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')

const knex = require('../knex')

const createNotesTable = require('../services/notes/notes.model')


async function main() {
   const app = feathers()

   app.configure(configuration())
   app.configure(knex)

   // database   
   await createNotesTable(app, "notes")

   process.exit(0)
}

main()
