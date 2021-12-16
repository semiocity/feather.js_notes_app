const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio')
const services = require('./services')
const configuration = require('@feathersjs/configuration')

const knex = require('./knex')

// Create a Feathers application
const app = feathers()

// Configure the Socket.io transport
app.configure(socketio())

// Create a channel that will handle the transportation of all realtime events
app.on('connection', connection => app.channel('everybody').join(connection))

// Publish all realtime events to the `everybody` channel
app.publish(() => app.channel('everybody'))

app.configure(configuration())

app.configure(knex)

app.configure(services)

// Start the server on port 3030
app.listen(3030)
console.log('listening on port 3030')
