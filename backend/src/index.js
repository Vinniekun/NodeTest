const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://vinnie:senha@cluster0-ilgir.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true});

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World'} );
});

app.listen(3333);