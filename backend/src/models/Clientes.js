const mongoose = require('mongoose');
const EnderecoSchema = require('./Utils/Endereco');

const ClienteSchema = new mongoose.Schema({
    tipoConta: {
        type : String,
        default : 'Cliente'
    },   //Admin ou cliente
    nome: {
        type: String,
        required : true
    },
    cpf: {
        type: Number,
        required : true,
        unique : true
    },
    telefone: Number,
    email: {
        type: String,
        required : true,
        unique : true
    },
    cep: {
        type : Number,
        required : true
    },
    cidade: String,
    estado: String,
    bairro: String,
    rua: String,
    numero: Number,
    complemento: String,
    tipo: String,  //Selecionar comercial, residencial, rural, outro
    end_secundario: String
});

module.exports = mongoose.model('Clientes', ClienteSchema);