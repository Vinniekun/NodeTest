const Cliente = require('../models/Clientes');

//index, show(unico), add, update, delete

module.exports = {
    async addClient(request, response) {
        const { tipoConta, nome, cpf, telefone, email, cep, cidade, estado, bairro, rua, numero, complemento, tipo, end_secundario} = request.body;
        
        let client = await Cliente.findOne( {cpf})

        if(!client){
            client = await Cliente.create({
                tipoConta,
                nome,
                cpf,
                telefone,
                email,
                cep,
                cidade,
                estado,
                bairro,
                rua,
                numero,
                complemento,
                tipo,
                end_secundario
            });
        }
        
        return response.send('Cliente: ' + nome + ' adicionado no banco de clientes.' + client);
    },
    
    async index(request, response) {
        const clientList = await Cliente.find();

        return response.json(clientList);
    },

    async update(request, response) {
        const body = request.body;
        const id = body._id;

        const client = await Cliente.findByIdAndUpdate(id, {
            nome : body.nome,
            cpf : body.cpf,
            telefone : body.telefone,
            email : body.email,
            cep : body.cep,
            cidade : body.cidade,
            estado : body.estado,
            bairro : body.bairro,
            rua : body.rua,
            numero : body.numero,
            complemento : body.complemento,
            tipo : body.tipo,
            end_secundario : body.end_secundario

        });

        if(!client){
            console.log('Cliente não encontrado')
        }

        return response.Send( 'Cliente ' + body.nome + ' alterado.' );
    },

    async destroy(request, response){
        const id = request.query.id;

        const client = await Cliente.findByIdAndRemove(id);

        return response.json( 'Cliente ' + client.nome + ' foi removido.');
    }

}