const Cliente = require('../models/Clientes');

//index, show(unico), add, update, delete

module.exports = {
    async addClient(request, response) {
        const { tipoConta, nome, cpf, telefone, email} = request.body;
        let client = await Cliente.findOne( {cpf})

        if(!client){
            client = await Cliente.create({
                tipoConta,
                nome,
                cpf,
                telefone,
                email
                
            });
            console.log(request.body);
        }
        
    
        //return response.json(newClient);
        //return response.send(request.body);
        return response.send('Cliente: ' + nome + ' adicionado no banco de clientes.');
    },
    
    async index(request, response) {
        const clientList = await Cliente.find();

        return response.json(clientList);
    }

}