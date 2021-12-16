
// database
const notesService = require('./notes/notes.service.js')
// custom
// ...

module.exports = function (app) {

   // database
   app.configure(notesService)
   // custom
   // ...
}
