const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const mailer = require('nodemailer');

const app = express();

mongoose.connect('mongodb+srv://vinnie:senha@cluster0-ilgir.mongodb.net/banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true});

//app.use(cors({ origin: 'http://localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);