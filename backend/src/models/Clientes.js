const mongoose = require('mongoose');
const EnderecoSchema = require('./Utils/Endereco');

const ClienteSchema = new mongoose.Schema({
    tipoConta: String,   //Admin ou cliente
    nome: String,
    cpf: Number,
    telefone: Number,
    email: {
        type: String,
        //required = true,
        //unique = true
    },
    //endereco = EnderecoSchema
    

});

module.exports = mongoose.model('Clientes', ClienteSchema);