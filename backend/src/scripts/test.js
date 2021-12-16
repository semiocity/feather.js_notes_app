// Usage:
// cd backend
// node src/scripts/send-email.js buisson@n7.fr Hello "Hello JC how are you doing?"

const io = require('socket.io-client')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')

const socket = io('http://localhost:3030')
const app = feathers()
app.configure(socketio(socket))

async function main() {
   const note = await app.service('notes').create({text: "toto"})
   console.log("note: ", note)
   const notes = await app.service('notes').find({id: 26})
   console.log("notes: ", notes)

   process.exit(0)
}

main()