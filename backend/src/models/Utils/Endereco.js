const mongoose = require('mongoose');

const EnderecoSchema = new mongoose.Schema({
    endereco: {
        cep: String,
        cidade: String,
        estado: String,
        bairro: String,
        rua: String,
        numero: Number,
        complemento: String,
        tipo: String  //Selecionar comercial, residencial, rural, outro
    },
    endSecundario: String

});

module.exports = EnderecoSchema;