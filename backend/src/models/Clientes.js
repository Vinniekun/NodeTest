const mongoose = require('mongoose');

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
        //required : true,
        unique : true
    },
    telefone: Number,
    email: {
        type: String,
        //required : true,
        unique : true
    },
    cep: {
        type : Number,
        //required : true
    },
    cidade: {
        type : String,
        default : 'Chapeco'
    },
    estado: {
        type : String,
        default : 'Santa Catarina'
    },
    bairro: {
        type : String,
        default : 'Centro'
    },
    rua: {
        type : String,
        default : 'Nereu Ramos'
    },
    numero: {
        type : Number,
        default : '123'
    },
    complemento: {
        type : String,
        default : 'Casa'
    },
    tipo: {
        type : String,
        default : 'Residencial'
    },  //Selecionar comercial, residencial, rural, outro
    end_secundario: {
        type : String,
        default : 'nenhum end secundario'
    },
});

module.exports = mongoose.model('Clientes', ClienteSchema);