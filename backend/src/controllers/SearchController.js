const Client = require('../models/Clientes')

module.exports = {
    async index(request, response){
        //busca
        const { nome, tipoConta, cpf } = request.query;

        const client = await Client.find({
            nome
        });

        return response.json( client );
    }

}