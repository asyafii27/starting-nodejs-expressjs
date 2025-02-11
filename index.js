const express = require('express')

const app = express()

app.get('/', function(request, response) {
    response.send('Home')
})

app.get('/about', function(request, response) {
    response.send('About')
})

app.get('/users', function(request, response) {
    response.send('Get User')
})

app.post('/users', function(request, response) {
    response.send('post User')
})

app.put('/users', function(request, response) {
    response.send('put User')
})

app.delete('/users', function(request, response) {
    response.send('delete User')
})

app.listen(8002, function() {
    console.log('server ready')
})