const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://vinnie:senha@cluster0-ilgir.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true});

app.use(express.json());
app.use(routes);

app.listen(3333);