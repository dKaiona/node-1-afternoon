const express = require('express')
const {json} = require('body-parser')
const messageControl = require('./controllers/messages_controller')

const app = express()

app.use(json())
app.use(express.static(__dirname + '/../public/build'))


app.post('/api/messages', messageControl.create)
app.get('/api/messages', messageControl.read)
app.put('/api/messages/:id', messageControl.update)
app.delete('/api/messages/:id', messageControl.delete)

const Port = 3001
app.listen(Port, () => console.log(`Working on ${Port}`))